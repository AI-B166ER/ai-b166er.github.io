function validaForm () {

	var nome  = document.forms["contatoForm"]["inpNome"].value;
	var email  = document.forms["contatoForm"]["inpEmail"].value;
	var assunto = document.forms["contatoForm"]["opcoes"].value;
	var termos;

	if (nome == "" || email == "" || assunto == "*Assunto"){
		document.getElementById("aviso").innerHTML = "Os campos marcados com asterisco são obrigatorios!";
	} else if (document.forms["contatoForm"]["boxTermos"].checked == false) {
		alert("Aceite os termos!");
	}
}

