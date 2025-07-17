<?php
// Set headers
header('Content-Type: application/json');

// Database configuration (if you want to store submissions)
// define('DB_HOST', 'localhost');
// define('DB_USER', 'username');
// define('DB_PASS', 'password');
// define('DB_NAME', 'database_name');

// Process form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = strip_tags(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST['phone']));
    $service = strip_tags(trim($_POST['service']));
    $message = strip_tags(trim($_POST['message']));
    
    // Validate data
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['message' => 'Please fill in all required fields.']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['message' => 'Please provide a valid email address.']);
        exit;
    }
    
    // Set recipient email (your email)
    $recipient = "maryhlarsen.1@gmail.com";
    
    // Set email subject
    $subject = "New contact from $name - CV Design Service";
    
    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Service: $service\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Build email headers
    $email_headers = "From: $name <$email>";
    
    // Send email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Thank you! Your message has been sent. I will contact you soon.']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Oops! Something went wrong and we couldn\'t send your message.']);
    }
    
    // Here you could also save to database if needed
    // $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    // if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);
    // $stmt = $conn->prepare("INSERT INTO contacts (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)");
    // $stmt->bind_param("sssss", $name, $email, $phone, $service, $message);
    // $stmt->execute();
    // $stmt->close();
    // $conn->close();
    
} else {
    http_response_code(403);
    echo json_encode(['message' => 'There was a problem with your submission, please try again.']);
}
?>