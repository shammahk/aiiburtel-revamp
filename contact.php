<?php
    $from_name = $_POST['fullname'];
    $company = $_POST['company'];
    $from_mail =  $_POST['email'];
    $replyto = $_POST['email'];
    $budget = $_POST['budget'];
    $phone = $_POST['phone'];
    $message =  $_POST['description'];
    $subject = $_POST['category']." Request";
    $mailto = "contact@chigisoft.com";
    // $mailto = "providcneifeosame@gmail.com";
    $data = [];
    $uid = md5(uniqid(time()));
    // header
    $header = "From: ".$from_name." <".$from_mail.">\r\n";
    $header .= "Reply-To: ".$replyto."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: text/html; boundary=\"".$uid."\"\r\n\r\n";

    // message & attachment
    $nmessage = "";
    $nmessage .= $message."<br><br><br>";
    $nmessage .= "Full Name: ".$from_name."<br><br>";
    $nmessage .= "Phone: ".$phone."<br><br>";
    $nmessage .= "E-Mail: ".$from_mail."<br><br>";
    $nmessage .= "Project Type: ".$project_type."<br><br>";
    $nmessage .= "Country: ".$country."<br><br>";
    $nmessage .= "Company: ".$company."<br><br>";
    $nmessage .= "Send Me Updates: ".$send_me."<br><br>";

    if (mail($mailto, $subject, $nmessage, $header)) {
    $mailto = $_POST['email'];
    $subject = "Aiiburtel Reponse";
    $nmessage = "Dear, ".$from_name.". Thank you for sending us a proposal, we have received your message and we'll get back to you.";
    if(mail($mailto, $subject, $nmessage, $header)){
        echo 'true';
        return;
    }else {
        echo 'false';
        return;
    }   
    } else {
    echo 'false';
    return;
    }


?>