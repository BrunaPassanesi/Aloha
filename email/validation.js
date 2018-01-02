
 function validation()
 {
    
	var contactname=document.enq.name.value;
	var name_exp=/^[A-Za-z\s]+$/;
	if(contactname=='')
	{
		alert("Favor inserir o Nome!");
		document.enq.name.focus();
		return false;
	}
	else if(!contactname.match(name_exp))
	{
		alert("Campo nome inválido!");
		document.enq.name.focus();
		return false;
	}
	
	var email=document.enq.email.value;
	//var email_exp=/^[A-Za-z0-9\.-_\$]+@[A-Za-z]+\.[a-z]{2,4}$/;
	var email_exp=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(email=='')
	{
		alert("Digite seu E-mail!");
		document.enq.email.focus();
		return false;
	}
	else if(!email.match(email_exp))
	{
		alert("E-mail inválido!");
		document.enq.email.focus();
		return false;
	}
	
	
	var message=document.enq.message.value;
	if(message=='')
	{
		alert("Favor colocar a mensagem!");
		document.enq.message.focus();
		return false;
	}
    return true;
	 
	 var tel=document.enq.tel.value;
	if(tel=='')
	{
		alert("Favor colocar o Telefone!");
		document.enq.tel.focus();
		return false;
	}

 }
