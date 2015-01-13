<?php
function addEmailToDatabase() {
	$file = fopen("email.tmp", "a");
	if(isset($_GET["email"])) {
		$email = $_GET["email"];
	} else if(isset($_POST["email"])) {
		$email = $_POST["email"];
	} else {
		header('HTTP/1.1 400 Bad Request');
		fwrite($file, "Not request email has been sent\n");
		fclose($file);
		return;
	}

	mysql_connect("localhost", "email", "weWantEmail");
	mysql_select_db("thirdplace") or die("{'success': 'false'}");
	$result = mysql_query("SELECT * FROM email WHERE email='" . mysql_real_escape_string('$email') . "';");
	if(mysql_num_rows($result) > 0) {
		header('HTTP/1.1 401 Unauthorized');
		fwrite($file, "email exsits \n");
		fclose($file);
		return;
	}
	fclose($file);
	mysql_query("INSERT INTO email VALUES ('" . mysql_real_escape_string('$email') . "');");
	mysql_close();
	print "{'success': 'true'}";
}
addEmailToDatabase();
?>
