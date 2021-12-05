<?php
  $name = trim(strip_tags($_POST["name"]));
  $email = trim(strip_tags($_POST["email"]));
  $various = trim(strip_tags($_POST["various"]));
  $subject = "Оформление заказа event.html";
  $msg = "Данные формы заказа:\n" ."Имя: $name\n" ."email: $email\n".= "Мероприятие: $various\n";
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";
  $headers .= "From: Илья <2000bkmz@gmail.com>" . "\r\n";
  $headers .= "Bcc: 2000bkmz@gmail.com". "\r\n";
  if(!empty($name) && !empty($email) && !empty($various) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    mail($email, $subject, $msg, $headers);
    echo "Спасибо! Вы успешно зарегистрировались.";
    }
?>