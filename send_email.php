<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if ($email && $name && $message) {
        $to = "sentance22@gmail.com"; // Replace with your email
        $subject = "New Contact Form Submission";
        $headers = "From: info@instadimes.com";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8";

        $body = "Name: $name\nEmail: $email\nMessage: $message";

        if (mail($to, $subject, $body, $headers)) {
            echo "Your message has been sent!";
        } else {
            echo "Sorry, your message could not be sent.";
        }
    } else {
        echo "Invalid input. Please check your details.";
    }
} else {
    echo "Invalid request method.";
}
