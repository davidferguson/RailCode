<?php
	session_start();
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Credits</title>
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
				<h1>Credits</h1>
				<h3>RailCode could not have been possible without the help of the following projects and people. We will always be grateful for their contributions.</h3>

				<h3>Tyler Vano - jsCard</h3>
				The compiler used to translate the RailCode language into JavaScript, so it can run in your browser, is based of a modified version of the jsCard compiler.
				jsCard is licensed under the MIT license and can be found at <a href="http://www.creysoft.com/xtalk">www.creysoft.com/xtalk</a>
				
				<h3>Ed Webster - Train Images</h3>
				All of the images used for the login page of RailCode were taken by Ed Webster, who published them under a <a href="https://creativecommons.org/licenses/by/2.0/">Creative Commons license</a> on Flickr.
				They can be found on <a href="https://www.flickr.com/photos/ed_webster/">Ed's Flickr page</a>.

				<h3>Sameboat - London Underground Map</h3>
				The maps of the London Underground used in RailCode were based off a map created by Sameboat, which was then uploaded to wikipedia.
				The map is under a <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">Creative Commons license</a> and is available <a href="https://commons.wikimedia.org/wiki/User:Sameboat">on Sameboats WikiPedia profile</a>

				<h3>Iconify - Lock Icon</h3>
				A small, yet important detail. The lock icon to signify the locked nature of a challenge stage was based off a lock image by <a href="http://iconify.it/">Iconify<a/>. 
				It is licensed under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons license</a>.
				
				<h3>David Arthur - Edinburgh Tram Map</h3>
				Although not directly viewable (yet) on the site, David's map of the Edinburgh Tram line was vital to the creation of the modular extension system, allowing RailCode to be adapted to other cities of countries.
				David's map can be seen through <a href="https://en.wikipedia.org/wiki/File:Edinburgh_tramway_map.svg">Wikipedia</a>, and is under a <a href="https://creativecommons.org/licenses/by-sa/4.0/">creative commons license</a>
				
				<h4>This list is not exhaustive, and our memories are far from perfect. If you think that you helped towards RailCode and are not on this lisr, let us know.</h4>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
	</body>
</html>