<?php
// Check if the request is a POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $inputData = file_get_contents('php://input');
    
    // Decode the JSON data
    $data = json_decode($inputData, true);

    // Check if the data was decoded successfully
    if ($data && isset($data['name'], $data['email'], $data['message'])) {
        $name = htmlspecialchars($data['name']);
        $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
        $message = htmlspecialchars($data['message']);
        var_dump($name);
        var_dump($email);
        var_dump($message);
        // Check if the data is valid
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
        echo "Required fields are missing or invalid.";
    }
} else {
    echo "Invalid request method.";
}
?>
