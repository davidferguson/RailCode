<?php
	switch( $_GET["action"] )
	{
		case "login":
			$dbConn = mysql_connect('mysql2.000webhost.com', 'a2095108_rail', 'imacg3');
			if ( ! $dbConn )
			{
				die("Unable to connect to database: " . mysql_error());
			}
			$db_selected = mysql_select_db('a2095108_rail', $dbConn);
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
					$_SESSION["id"] = $loginQuery;
					$_SESSION["email"] = $_POST["inputEmail"];
					header("Location: learn.php");
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
	}
?>