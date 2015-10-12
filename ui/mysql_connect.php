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
?>