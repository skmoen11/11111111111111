<?php
// Set the recipient email address
$to = 'skmoen18@gmail.com';

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$payment_method = $_POST['payment'];
$transaction_id = isset($_POST['transaction_id']) ? $_POST['transaction_id'] : 'N/A';
$package_name = $_POST['package_name'];
$package_price = $_POST['package_price'];
$message = isset($_POST['message']) ? $_POST['message'] : 'No additional notes';

// Create email subject
$subject = "New Order: $package_name";

// Create email message
$email_message = "
<html>
<head>
    <title>New Order: $package_name</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #6c5ce7; color: white; padding: 15px; text-align: center; }
        .content { padding: 20px; border: 1px solid #ddd; }
        .footer { margin-top: 20px; font-size: 12px; color: #777; text-align: center; }
        .detail { margin-bottom: 10px; }
        .detail-label { font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Order Received</h2>
        </div>
        <div class='content'>
            <div class='detail'><span class='detail-label'>Package:</span> $package_name ($$package_price)</div>
            <div class='detail'><span class='detail-label'>Customer Name:</span> $name</div>
            <div class='detail'><span class='detail-label'>Email:</span> $email</div>
            <div class='detail'><span class='detail-label'>Phone:</span> $phone</div>
            <div class='detail'><span class='detail-label'>Payment Method:</span> $payment_method</div>
            <div class='detail'><span class='detail-label'>Transaction ID:</span> $transaction_id</div>
            <div class='detail'><span class='detail-label'>Additional Notes:</span> $message</div>
        </div>
        <div class='footer'>
            <p>This email was sent from your website order form.</p>
        </div>
    </div>
</body>
</html>
";

// Set email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
$mail_sent = mail($to, $subject, $email_message, $headers);

// Prepare response
if ($mail_sent) {
    $response = array(
        'success' => true,
        'message' => 'Your order has been submitted successfully! We will contact you shortly.'
    );
} else {
    $response = array(
        'success' => false,
        'message' => 'There was an error submitting your order. Please try again later.'
    );
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>