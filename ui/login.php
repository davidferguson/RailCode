<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Login</title>
		<link href="bootstrap.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Quicksand:400,300,700' rel='stylesheet' type='text/css'>
		<style>
			body {
				padding-top: 50px;
				background: url('<?php echo "/img/train/train" . rand(1,12) . ".jpg"; ?>') no-repeat center center fixed; 
				-webkit-background-size: cover;
				-moz-background-size: cover;
				-o-background-size: cover;
				background-size: cover;
			}
			.starter-template {
				padding: 40px 15px;
				text-align: center;
			}
			.form-signin {
				max-width: 330px;
				padding: 15px;
				margin: 0 auto;
			}
			.form-signin .form-signin-heading,
			.form-signin .checkbox {
				margin-bottom: 10px;
				text-align: center;
			}
			.form-signin .checkbox {
				font-weight: normal;
			}
			.form-signin .form-control {
				position: relative;
				height: auto;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				padding: 10px;
				font-size: 16px;
			}
			.form-signin .form-control:focus {
				z-index: 2;
			}
			.form-signin input[type="email"] {
				margin-bottom: -1px;
				border-bottom-right-radius: 0;
				border-bottom-left-radius: 0;
			}
			.form-signin input[type="password"] {
				margin-bottom: 10px;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
			.footer {
				position: absolute;
				bottom: 0;
				width: 100%;
				/* Set the fixed height of the footer here */
				height: 20px;
				font-size: 16px;
				color: black;
			}
		</style>
	</head>
	<body>
		<!--<nav class="navbar navbar-inverse navbar-fixed-top">
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
						<li><a href="#contact">Logout</a></li>
					</ul>
				</div>
			</div>
		</nav>-->
		<div class="container" style="margin-top:100px;">
			<form class="form-signin" action="process.php?action=login" method="POST">
				<?php
					if($_GET["loginerror"])
					{
						echo '<div class="alert alert-danger" role="alert">
							<strong>Woops!</strong> It seems that your Email/Password combination was incorrect. Please try again
						</div>';
					}
				?>
				<h2 class="form-signin-heading">Step on Board...</h2>
				<label for="inputEmail" class="sr-only">Email address</label>
				<input type="email" id="inputEmail" class="form-control" placeholder="Email address" name="inputEmail" required="" autofocus="">
				<label for="inputPassword" class="sr-only">Password</label>
				<input type="password" id="inputPassword" class="form-control" placeholder="Password" name="inputPassword" required="">
				<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
			</form>
		</div>
		<footer class="footer" style="width: 100%;">
			<div class="container" style="float: right; width: 100%; text-align: right;">
				<p style="width: 100%; text-align: right;">Background photo by <a target="_blank" href="https://www.flickr.com/photos/ed_webster/">Ed Webster</a></p>
			</div>
		</footer>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
	</body>
</html>