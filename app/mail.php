<?php

$recepient = "youmail@ya.ru";
$sitename = "Название сайта";

$name = trim($_POST["file"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");