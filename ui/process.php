<?php
	
	function dbConnect()
	{
		$dbConn = mysql_connect('localhost', 'balgreen_railcod', 'verySecret');
		if ( ! $dbConn )
		{
			die("Unable to connect to database: " . mysql_error());
		}
		$db_selected = mysql_select_db('balgreen_railcode', $dbConn);
		if ( ! $db_selected )
		{
			die ("Unable to select database: " . mysql_error());
		}
	}
	
	switch( $_GET["action"] )
	{
		case "login":
			dbConnect();
			
			$dbresult = mysql_query("SELECT * FROM `users` WHERE email='" . $_POST["inputEmail"] . "' AND password='" . $_POST["inputPassword"] . "'");
			if( $dbresult )
			{
				if( mysql_num_rows($dbresult) == 1 )
				{
					session_start();
					$dbresult = mysql_fetch_array( $dbresult, MYSQL_ASSOC );
					
					$_SESSION['id'] = $dbresult["id"];
					$_SESSION['username'] = $dbresult["username"];
					$_SESSION['email'] = $dbresult["email"];
					$_SESSION['learnStage'] = $dbresult["learnStage"];
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
			break;
		
		case "updateStage":
			session_start();
			dbConnect();
			$newStage = $_GET["newStage"]+1;
			$_SESSION["learnStage"] = $newStage;
			$dbresult = mysql_query("UPDATE `users` SET learnStage='" . $newStage . "' WHERE id='" . $_SESSION["id"] . "'");
			if( $dbresult )
			{
				echo 1;
			}
			else
			{
				echo 0;
			}
			break;
			
		case "addChallenge":
			session_start();
			dbConnect();
			$openData = mysql_real_escape_string($_GET["openData"]);
			$challengeName = mysql_real_escape_string($_GET["challengeName"]);
			$activity = mysql_real_escape_string($_GET["activity"]);
			$startLine = mysql_real_escape_string($_GET["startLine"]);
			$startStation = mysql_real_escape_string($_GET["startStation"]);
			$endStation = mysql_real_escape_string($_GET["endStation"]);
			$dbresult = mysql_query("INSERT INTO `challenges` (userid, name, opendata, activity, startline, startstation, endstation) VALUES ('" . $_SESSION["id"] . "', '" . $challengeName . "', '" . $openData . "', '" . $activity . "', '" . $startLine . "', '" . $startStation . "', '" . $endStation . "')");
			if( $dbresult )
			{
				$dbresult = mysql_query("SELECT * FROM `challenges` WHERE userid='" . $_SESSION["id"] . "' AND name='" . $challengeName . "' AND activity='" . $activity . "' AND startline='" . $startLine . "' AND opendata='" . $openData . "' AND startstation='" . $startStation . "' AND endstation='" . $endStation . "'");
				$dbresult = mysql_fetch_array( $dbresult, MYSQL_ASSOC );
				$challengeId = $dbresult["id"];
				echo $challengeId;
			}
			else
			{
				echo -1;
				echo mysql_error();
			}
			break;
		
		case "addSolution":
			session_start();
			dbConnect();
			$code = mysql_real_escape_string($_GET["code"]);
			$points = mysql_real_escape_string($_GET["points"]);
			$challengeId = mysql_real_escape_string($_GET["challengeId"]);
			$dbresult = mysql_query("INSERT INTO `solutions` (userid, challengeId, code, points) VALUES ('" . $_SESSION["id"] . "', '" . $challengeId . "', '" . $code . "', '" . $points . "')");
			if( $dbresult )
			{
				echo 1;
			}
			else
			{
				echo 0;
			}
			break;
	}
?>