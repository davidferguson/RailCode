<?php
	session_start();
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Extensions</title>
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
				<h1>Extending RailCode</h1>
				<h3>RailCode is based around an extendible architecture. This allows anyone to add map images into RailCode. All you need to do this is an appropriate image - no knowledge of programming required.</h3>

				When selecting an image, make sure that it is suitable for use within RailCode. Many official transport maps - such as the ones provided for the London Underground by the Transport of London - are under copyright meaning you cannot use them in RailCode without the written permission of the copyright holder - and potentially a large fee. Look for images licensed as Creative Commons Attribution 4.0 or under the public domain. When in doubt, ask before using.

				The best images have an approximate resolution of 800x600 pixels. RailCode will automatically scale the image depending on the user's screen size, but try not to stray too far from 800x600. It is best if your chosen image has a transparent background.

				Once you have an image you wish to use, save it as a PNG file. Make sure each marker (e.g. stations, in the London Underground maps) has a clear title so users can easily identify it.

				Now open up the /railcode/js/stationLocations.js file in a text editor. Scroll to the bottom of the file, type 'return' a few times to space out between lines, then paste the following:

<pre>var lineName = {
	image: "/path/to/your/image.png",
	lines: [
		{
			name: "name of line",
			locations: [
				[{name:"markerName", x:24, y:268}],
				[{name:"markerName", x:204, y:23}],
				[{name:"markerName", x:204, y:23}]
			]
		}
	]
}</pre>

				Now, replace <b>lineName</b> with the name of your addition. Do not include spaces. Next, replace <b>/path/to/your/image.png</b> with the file path to the image you with to include. Replace <b>name of line</b> with the name of your addition, this time using spaces if necessary.

				Now, for every marker on your image you need to create a line that looks a bit like this:
				<b><pre>[{name:"markerName", x:24, y:268}],</pre></b>
				You can see that three have been created in the example text, but you can have any number, as long as there is more than one. For each marker replace <b> markerName</b> with the name of your marker exactly as it appears on the image, except all lower case. Then replace <b>204</b> with the X-Coordinate of the marker on the image, and <b>23</b> with the Y-Coordinate of the marker on the image. If you do not know the coordinates of the markers you can easily find them using most image-editing software such as the GNU Image Manipulation Program (GIMP).

				Once you have added in all your marker-information lines, delete the comma on the last line if there is one.

				You can now close stationLocations.js

				Now open up stationFunctions.js . It is in the same folder as stationLocations.js . Search for <b>var mapsToChoose</b> . You should find one line that starts with this. At the end of the line, but before the <b>];</b> , add a comma followed by the name of your addition - the one without the spaces.

				If there are any map images you wish to remove from RailCode, you can do so by removing their entry in the line starting with <b>var mapsToChoose</b> . Do not forget to remove the comma that comes after all but the last entries.

				That's it! Your map should now be added into RailCode.
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
	</body>
</html>