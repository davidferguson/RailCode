<?php
	session_start();
	if( ! isset($_SESSION["email"]) )
	{
		header("Location: login.php");
	}
	else
	{
		header("Location: learn.php");
	}
?>