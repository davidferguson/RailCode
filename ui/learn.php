<?php
	session_start();
	if( ! isset($_SESSION["email"]) )
	{
		header("Location: login.php");
	}
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Learn</title>
		<link href="bootstrap.css" rel="stylesheet">
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
				background-color: yellow;
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
					<a class="navbar-brand" href="#">RailCode</a>
				</div>
				<div id="navbar" class="collapse navbar-collapse">
					<ul class="nav navbar-nav">
						<li><a href="#about">Learn</a></li>
						<li><a href="#contact">Play</a></li>
						<li><a href="#contact">Leaderborad</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container" style="margin-top:20px;">
			<div class="row" id="trainInfoPanel">
				<div class="col-md-12">
					<h4>Train Information Panel</h4>
				</div>
			</div>
			<div class="row" id="codeMapPanel">
				<div class="col-md-4" id="codePanel">
					<h2 style="height: 10%; text-align: center; color: white;">Type Your Code Below</h2>
					<div id="codeBox" style="width: 100%; height: 75%;">
						<textarea id="railcodeCode"></textarea>
					</div>
					<div id="codeButtons" style="width: 100%; height: 15%;">
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
		<script type="text/javascript" src="/compiler/operators.js">Unable to load Operator Library...</script>
		<script type="text/javascript" src="/compiler/base64.js">Unable to load Base64 Codec Library...</script>
		<script src="/js/stationLocations.js"></script>
		<script src="/js/stationFunctions.js"></script>
	</body>
</html>