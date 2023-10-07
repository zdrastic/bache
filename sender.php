<?php
$to = "yurish4e@gmail.com";  // Почта получателя4
// $to = "alalal@gmail.com";  // Почта получателя4
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
//Кодировка письма
$headers .= "From: Отправитель <gomining>\r\n"; //Наименование и почта отправителя

$subject = 'Форма';


$name = isset($_POST['name']) ? urldecode(htmlspecialchars(trim($_POST['name']))) : '';
$phone = isset($_POST['tel']) ? urldecode(htmlspecialchars(trim($_POST['tel']))) : '';
$email = isset($_POST['email']) ? urldecode(htmlspecialchars(trim($_POST['email']))) : '';
$dialCode = isset($_POST['dialCode']) ? urldecode(htmlspecialchars(trim($_POST['dialCode']))) : '';
$country = isset($_POST['country']) ? urldecode(htmlspecialchars(trim($_POST['country']))) : '';


$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>

                        <p>Name: ' . $name . '</p>
                        <p>Country: ' . $country . '</p>
                        <p>DialCode: ' . $dialCode . '</p>
                        <p>Phone: ' . $phone . '</p>
                        <p>Email: ' . $email . '</p>


                    </body>
                </html>';
if (mail($to, $subject, $message, $headers)) {
  header("HTTP/1.1 200 OK");  
  header("location: /thankyou.html");
} else {
  header("HTTP/1.1 500 Server Error");
  header('location: /error.html');
}
