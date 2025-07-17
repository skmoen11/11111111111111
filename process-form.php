<?php
header('Content-Type: application/json');

// Validate request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$service = isset($_POST['service']) ? trim(strip_tags($_POST['service'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['message' => 'Please fill in all required fields']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Please provide a valid email address']);
    exit;
}

// Set recipient email (your email)
$to = "maryhlarsen.1@gmail.com";

// Set email subject
$subject = "New CV Design Inquiry from $name";

// Build email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Phone: " . ($phone ? $phone : 'Not provided') . "\n";
$email_content .= "Service: " . ($service ? $service : 'Not specified') . "\n\n";
$email_content .= "Message:\n$message\n";

// Build email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(['message' => 'Thank you! Your message has been sent. I will contact you soon.']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Oops! Something went wrong and we couldn\'t send your message.']);
}
?>