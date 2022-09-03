function enviaEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "amauri.dev21@gmail.com",
        Password : "",
        To : 'amaurirjw93@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Novo contato através do formulário",
        Body : ""
    }).then(
    message => alert(message)
    );
}