<?php
	$email = $_GET["email"];
	mysql_connect("localhost", "email", "weWantEmail");
	mysql_select_db("thirdplace") or die("{'success': 'false'}");
	mysql_query("INSERT INTO email VALUES ('$email')");
	mysql_close();
	print '{"success": "true"}';
?>
