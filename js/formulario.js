const formulario = document.querySelector('form');

function formularioEnviado(resposta){
    if(resposta.ok){
        formulario.innerHTML = '<p>Mensagem enviada, em breve entraremos em contato. Geralmente respondemos em 24horas</p>';
    }else{
        formulario.innerHTML ='<p>Erro no envio, você pode enviar diretamente para nosso email em: contato@bikcraft.net</p>';
    }
}

function enviarFormulário(event){
    event.prevenDefault();
    const botao = document.querySelector('form button');
    botao.disable = true
    botao.innerText = 'Enviando...';

    const data = new FormData(formulario);
    console.log(data.get('email'));

    fetch('./enviar.php',{
        method: 'POST',
        body: data,
    }).then(formularioEnviado);
};

formulario.addEventListener('submit', enviarFormulário);