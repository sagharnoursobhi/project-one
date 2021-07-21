<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

header('Content-Type: application/json');
$code = 200;
$response = [
    'status' => 'nok'
];

$to = ''; // SET AN EMAIL FOR RECEIVER
$subject = 'New Contact Form Received';
$message = "Name: " . $_POST['name'] . "<br>";
$message .= "Phone: " . $_POST['phone'] . "<br>";
$message .= "Email: " . $_POST['email'] . "<br>";
$message .= "Message: " . $_POST['message'];
$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;

    $mail->setFrom('contact@aphome.se', 'APhome');
    $mail->addAddress($to);
    $mail->Subject = $subject;
    $mail->isHTML();
    $mail->Body = $message;
    $mail->send();

    $response['status'] = 'ok';
} catch (Exception $ex) {
    $code = 500;
}

http_response_code($code);
echo json_encode($response);