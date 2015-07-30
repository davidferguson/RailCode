<?php
	switch( $_GET["action"] )
	{
		case "login":
			$dbConn = mysql_connect('localhost', 'balgreen_railcod', 'passwordhere');
			if ( ! $dbConn )
			{
				die("Unable to connect to database: " . mysql_error());
			}
			$db_selected = mysql_select_db('balgreen_railcode', $dbConn);
			if ( ! $db_selected )
			{
				die ("Unable to select database: " . mysql_error());
			}
			$loginQuery = mysql_query("SELECT `id` FROM `users` WHERE email='" . $_POST["inputEmail"] . "' AND password='" . $_POST["inputPassword"] . "'");
			if( $loginQuery )
			{
				if( mysql_num_rows($loginQuery) == 1 )
				{
					session_start();
					$username = mysql_query("SELECT `username` FROM `users` WHERE id='" . $loginQuery . "'");
					$learnStage = mysql_query("SELECT `learnStage` FROM `users` WHERE id='" . $loginQuery . "'");
					$_SESSION["id"] = $loginQuery;
					$_SESSION["email"] = $_POST["inputEmail"];
					$_SESSION["username"] = $username;
					$_SESSION["learnStage"] = $learnStage;
					header("Location: home.php");
				}
				else
				{
					header("Location: login.php?loginerror=1");
				}
			}
			else
			{
				echo "Unable to select info from database: " . mysql_error();
			}
			break;
		case "logout":
			session_start();
			if( isset( $_SESSION["id"] ) )
			{
				session_destroy();
				header("Location: login.php");
			}
	}
?>