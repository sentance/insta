<?php
// check_post.php

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "<h1>Received POST Data</h1>";

    // Output POST data
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    // Handle file uploads if necessary
    if (!empty($_FILES)) {
        echo "<h1>Uploaded Files</h1>";
        echo "<pre>";
        print_r($_FILES);
        echo "</pre>";
    }
} else {
    echo "<h1>No POST Data Received</h1>";
    echo "<p>Send a POST request to this endpoint to test it.</p>";
}
?>
