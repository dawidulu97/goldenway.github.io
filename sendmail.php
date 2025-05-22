<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form inputs
    $company = htmlspecialchars(trim($_POST["company"]));
    $country = htmlspecialchars(trim($_POST["country"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $name = htmlspecialchars(trim($_POST["name"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Compose email
    $to = "info@goldenway-oil.com";
    $subject = "New Contact Form Message from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_body = "You have received a new message from your website contact form:\n\n";
    $email_body .= "Company Name: $company\n";
    $email_body .= "Country: $country\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n\n";
    $email_body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
} else {
    // If accessed directly without POST
    echo "Invalid request.";
}
?>
