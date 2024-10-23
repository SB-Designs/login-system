<?php
// index.php
session_start();

if (isset($_SESSION['user_email'])) {
    // User is logged in, redirect to after_login.php
    header("Location: after_login.php");
    exit();
} else {
    // User is not logged in, redirect to login.php
    header("Location: login.php");
    exit();
}
?>
