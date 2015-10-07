<?php
	function dbConnect()
	{
		$dbConn = mysql_connect('', '', '');
		if ( ! $dbConn )
		{
			die("Unable to connect to database: " . mysql_error());
		}
		$db_selected = mysql_select_db('', $dbConn);
		if ( ! $db_selected )
		{
			die ("Unable to select database: " . mysql_error());
		}
	}
	
	session_start();
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Main</title>
		<link href="bootstrap.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Quicksand:400,300,700' rel='stylesheet' type='text/css'>
		<style>
			body {
				padding-top: 50px;
			}
			.starter-template {
				padding: 40px 15px;
				text-align: center;
			}
			#logoBig {
				width: 100%;
			}
			svg {
				width: 50%;
				height: auto;
				display: block;
				margin-left: auto;
				margin-right: auto;
				font-family: 'Quicksand', sans-serif;
				text-decoration: 
			}
			.col-md-6 {
				padding-right: 20px;
				padding-left: 20px;
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
						<?php
							if( isset($_SESSION["email"]) )
							{
								echo '
									<li><a href="learn.php">Learn</a></li>
									<li><a href="main.php">Play</a></li>
									<li><a href="challenge.php">Challenge</a></li>
									<li><a href="process.php?action=logout">Logout</a></li>
								';
							}
							else
							{
								echo '
									<li><a href="login.php">Login</a></li>
								';
							}
						?>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container" style="margin-top:20px;">
			<div class="row" style="margin-top: 50px;">
				<div class="col-md-6">
					<h1 style="text-align: center;">Challenges</h1>
					<div class="list-group">
						<?php
							
							dbConnect();
							$challenges = mysql_query( "select * from challenges" );
							
							while( $challenge = mysql_fetch_array( $challenges, MYSQL_ASSOC ) )
							{
								$maxScore = 0;
								$maxScores = mysql_query( "select * from solutions WHERE challengeId='" . $challenge["id"] . "'" );
								while( $currentScore = mysql_fetch_array( $maxScores, MYSQL_ASSOC ) )
								{
									if( $currentScore["points"] > $maxScore )
									{
										$maxScore = $currentScore["points"];
									}
								}
								echo '<a href="main.php?mode=2&challenge=' . $challenge["id"] . '" class="list-group-item"><span class="badge">' . $maxScore . '</span>' . base64_decode($challenge["name"]) . '</a>';
							}
						?>
					</div>
				</div>
				<div class="col-md-6">
					<h1 style="text-align: center;">Leaderboard</h1>
					<div class="list-group">
						<?php
							
							dbConnect();
							$users = mysql_query( "select * from users ORDER BY points DESC" );
							
							while( $user = mysql_fetch_array( $users, MYSQL_ASSOC ) )
							{
								echo '<li class="list-group-item"><span class="badge">' . $user["points"] . '</span>' . $user["username"] . '</li>';
							}
						?>
					</div>
				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
	</body>
</html>