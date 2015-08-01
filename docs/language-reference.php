<?php
	session_start();
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Language Reference</title>
		<link href="../ui/bootstrap.css" rel="stylesheet">
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
			.col-md-4 {
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
				<h1>RailCode: Language Reference</h1>

				<h3>Forgotten how to do something? Need a recap-at-a-glance? This is the dictionary of everything in RailCode's language</h3>

				<h2>Movement</h2>
				<h3>Forwards</h3>
				<h4>Moves the tube forwards by one station, from the station indicated by 'Current Station', to the station indicated by 'Forwards Station'.</h4>
				<h3>Backwards</h3>
				<h4>Moves the tube backwards by one station, from the station indicated by 'Current Station', to the station indicated by 'Backwards Station'.</h4>
				<br />

				<h2>Changing Directions</h2>
				<h3>Switch Line</h3>
				<h4>Switches the tube from its current line to the other line. This command should only be used if there is only one other line for the tube to switch to, otherwise the <b>switch line to</b> instruction should be used instead.</h4>
				<h3>Switch Line to &lt;<i>lineToSwitchTo</i>&gt;</h3>
				<h4>Switches the tube from its current line to the  line specified by <i>lineToSwitchTo</i>. Please be aware that <i>lineToSwitchTo</i> needs to be surrounded by double quotes (&quot;)</h4>
				<h3>Head &lt;<i>direction</i>&gt;</h3>
				<h4>Changes the direction that the tube will take when it reaches a split in the line. By default the tube will always go <i>left</i>, but this can be changed to <i>right</i>. The <i>direction</i> does not need to be in quotes.</h4>

				<h2>Looping</h2>
				<h3>while canMoveForwards do</h3>
				<h4>Any code between this and <b>end while</b> will be run until the tube can no longer move <b>forwards</b>.</h4>
				<h3>while canMoveBackwards do</h3>
				<h4>Any code between this and <b>end while</b> will be run until the tube can no longer move <b>backwards</b>.</h4>
				<h3>while the currentStation is not &lt;<i>stationName</i>&gt; do</h3>
				<h4>Any code between this and <b>end while</b> will be run until the station that the tube is on is <i>stationName</i>. Please note that <i>stationName</i> must be surrounded by double-quotes (&quot;).</h4>
				<h3>repeat &lt;<i>repeatNumber</i>&gt; times</h3>
				<h4>Any code between this and <b>end repeat</b> will be run <i>repeatNumber</i> times. Please note that no quotes around <i>repeatNumber</i> are needed.</h4>
				<br />

				<h2>Decisions</h2>
				<h3>if &lt;<i>lineName</i>&gt; is not in the switchLines then</h3>
				<h4>Any code between this and <b>end if</b> will be run as long as the tube can switch to the line specified by <i>lineName</i>. Please note that<i>lineName</i> must be surrounded by double-quotes (&quot;).</h4>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
	</body>
</html>