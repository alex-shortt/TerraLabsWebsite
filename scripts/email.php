<?php
$msg = "Name: " . $_GET['name'] . "\nEmail: " . $_GET['email'] . "";
$msg = wordwrap($msg,70);
$subject = "New Terra Labs Signup";

$mail=mail("benjaminha@terralabs.io", $subject, $msg);
$mail=mail("benjaminha14@gmail.com", $subject, $msg);
$mail=mail("alexander.shortt@gmail.com", $subject, $msg);

?>