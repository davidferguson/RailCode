<?php
	session_start();
	require('mysql_connect.php');
	dbConnect();
	
	if( ! isset($_SESSION["email"]) )
	{
		header("Location: login.php");
	}
	else if( ( $_GET["mode"] == 1 ) && ( $_GET["stage"] > $_SESSION["learnStage"] ) )
	{
		header("Location: learn.php");
	}
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Learn</title>
		<link href="bootstrap.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Quicksand:400,300,700' rel='stylesheet' type='text/css'>
		<style>
			body {
				padding-top: 50px;
			}
			svg {
				width: 100%;
				height: 80%;
			}
			.starter-template {
				padding: 40px 15px;
				text-align: center;
			}
			#trainInfoPanel {
				height: 15%;
				background-color: #F3F781;
				overflow-y: scroll;
				padding-top: 5px;
				padding-bottom: 5px;
				padding-left: 10px;
				padding-right: 10px;
			}
			#codeMapPanel {
				height: calc(85% - 40px);
			}
			#codePanel {
				background-color: black;
				height: 100%;
			}
			#mapPanel {
				height: 100%;
			}
			#mapImg {
				max-width: 100%;
				max-height: calc(100% - 40px);
				display: block;
				margin-left: auto;
				margin-right: auto;
				position: relative;
			}
			#infoDiv {
				width: 100%;
				height: 40px;
				background-color: green;
			}
			#trainImg {
				position: absolute;
				width: 10px;
				height: 10px;
				background-color: red;
				top: 0px;
				left: 0px;
				z-index: 1000;
			}
			#codeButtons {
				font-weight: bold;
				font-size: 200%;
			}
			textarea {
				width: 100%;
				height: 100%;
				resize: none;
				background-color: #000;
				border: 1px solid #000;
				border-top: 1px solid white;
				color: #fff;
				padding: 8px;
				font-family: courier new;
				outline:0px !important;
				-webkit-appearance:none;
			}
			.instructionNameText {
				font-style: italic;
			}
			.instructionCodeText {
				font-weight: bold;
				font-family: monospace;
			}
			
		</style>
	</head>
	<body>
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="main.php">RailCode</a>
				</div>
				<div id="navbar" class="collapse navbar-collapse">
					<ul class="nav navbar-nav">
						<li><a href="learn.php">Learn</a></li>
						<li><a href="main.php">Play</a></li>
						<li><a href="challenge.php">Challenge</a></li>
						<li><a href="process.php?action=logout">Logout</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container" style="margin-top:20px;">
			<div class="row" id="trainInfoPanel">
				Loading Information...
			</div>
			<div class="row" id="codeMapPanel">
				<div class="col-md-4" id="codePanel">
					<h2 style="height: 10%; text-align: center; color: white;" id="codeBoxHeader">Type Your Code Below</h2>
					<div id="codeBox" style="width: 100%; height: calc(75% - 30px);">
						<textarea id="railcodeCode"></textarea>
					</div>
					<div id="codeButtons" style="width: 100%; height: 15%; font-size: 200%;">
						<button style="width: 100%; height: 100%;" onclick="compileAndRun();">Run</button>
					</div>
				</div>
				<div class="col-md-8" id="mapPanel">
					<div id="trainImg"></div>
					<div id="infoDiv"></div>
					<img src="" id="mapImg" ondragstart="return false;" />
				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
		<script src="/compiler/operators.js">Unable to load Operator Library</script>
		<script src="/compiler/base64.js">Unable to load Base64 Codec Library</script>
		<script src="/js/stationLocations.js">Unable to load the station locations Library</script>
		<script src="/js/opendata.js">Unable to load the Transport for London open data Library</script>
		<script src="/js/language.js">Unable to load the RailCode language Library</script>
		<script src="/js/stationFunctions.js">Unable to load the core station functions Library</script>
		<script src="/js/learnObject.js">Unable to load learn data Library</script>
		<script src="/js/errorCheck.js">Unable to load error checking Library</script>
		<script src="/js/stageCompleteMsg.js">Unable to load stage complete message Library</script>
		<script src="/js/calculatePoints.js">Unable to load points calculation Library</script>
		<script src="/js/playFunctions.js">Unable to load play functions Library</script>
		<script>
			<?php if( $_GET["mode"] == 1 )
			{
				echo "pageLoad('learn', (" . $_GET["stage"] . "-1));";
			}
			else if($_GET["mode"] == 2 )
			{
				dbConnect();
				$dbresult = mysql_query("SELECT * FROM `challenges` WHERE id='" . $_GET["challenge"] . "'");
				$dbresult = mysql_fetch_array( $dbresult, MYSQL_ASSOC );
				$activity = ($dbresult["activity"]);
				$startStation = base64_decode($dbresult["startstation"]);
				$startLine = base64_decode($dbresult["startline"]);
				$endStation = base64_decode($dbresult["endstation"]);
				$openData = base64_decode($dbresult["opendata"]);
				
				echo "\nvar setupActivity = " . $activity . ";\n";
				echo "var startStation = \"" . $startStation . "\";\n";
				echo "var startLine = " . $startLine . ";\n";
				echo "var endStation = \"" . $endStation . "\";\n";
				if( $openData != "" )
				{
					echo "var openData = " . $openData. ";\n";
				}
				else
				{
					echo "var openData = '';\n";
				}
				echo "//LOAD CHALLENGE;\n";
				echo "mode = 'challenge';\nchallengeInit(setupActivity, startLine, startStation, endStation, function() {
					challengeSetup();
				});";
				echo "var theChallengeId = " . $_GET["challenge"];
			}
			else
			{
				echo "pageLoad('play');";
			}
			?>
		</script>
	</body>
</html>