<?php
if ( isset( $_POST[ 'submit' ] ) ) {
	$name = $_POST[ 'name' ];
	$email = $_POST[ 'email' ];
	$query = $_POST[ 'message' ];
	$tel = $_POST[ 'tel' ];
	$email_from = $name . '<' . $email . '>' . $tel;
	$pagina = $_GET[ 'email' ]; //Output: myquery

	$to = "contato@alohabemsao.com.br";
	$subject = "Contato Site";
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= "From: " . $email_from . "\r\n";
	$message = "Nome:".$name."<br>Email-Id:".$email."<br>Telefone:".$tel."<br>Mensagem:".$query; 	   
	
	if ( $pagina == "contato" ) {
			
		if ( mail( $to, $subject, $message, $headers ) ) {
			header( "Location:../sucesso.html" );
		} else {
			header( "Location:../contact.php?msg=Mensagem não enviada!" );
		}

	} 
}

?>