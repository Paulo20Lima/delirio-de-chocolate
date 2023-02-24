<?php
$email = utf8_encode($_POST['email']);
require_once ('./PHPMailer/class.phpmailer.php');
$mail = new PHPMailer(true);

/* campos form */
$nome = $_POST['nome'];
$email = $_POST['email'];
$message = $_POST['message'];
$assunto = $_POST['assunto'];
switch($assunto){
    case 'pedidosP':
        $assuntoEmail = "Pedidos Personalizáveis";
    break;
    case 'duvidas':
        $assuntoEmail = "Dúvidas";
    break;
    case 'feedbacks':
        $assuntoEmail = "Feedbacks";
    break;
    case 'reclamacoes':
        $assuntoEmail = "Reclamações";
    break;
    default:
    $assuntoEmail = "Outro assunto";
}
try {
    # email da aplicação
    $mail->isSMTP(true);
    $mail->Host = "smtp.office365.com";
    $mail->Port = "587";
    $mail->SMTPSecure = "tls";
    $mail->SMTPAuth = "true";
    $mail->Username = ""; // e-mail tirado por causa da segurança
    $mail->Password = "";
    $mail->CharSet = 'UTF-8';
    # enviar o e-mail
    $mail->setFrom($mail->Username);
    $mail->addAddress($mail->Username);
    $mail->Subject = "Contato - Clientes";
    $mail->Body = 
    "Cliente: ".$nome."<br>"."E-mail: ".$email."<br>"."Assunto: ".$assuntoEmail."<br>"."Mensagem: ".$message;
    $mail->IsHTML(true);
    $mail->send();
    // retorno com JS
        echo "<script type='text/javascript'>".
                "alert('E-mail enviado com sucesso');".
                "window.location.href = 'contato.php'".
            "</script>";
} catch (phpmailerException $e) {
    echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
    echo $e->getMessage(); //Boring error messages from anything else!
}
?>
