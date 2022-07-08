let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';
let newPassword = '';

//passando valor do tamanho da senha desejada
sizePassword.innerHTML = sliderElement.value;

//funcao que atualiza o valor do tamanho da senha
slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

//funcao que gera senha
//gera a senha de maneira aleatoria, do tamanho que o usuario desejar
//dependendo da posicao que for gerada em pass, ele ira escolher um numero aleatorio
//que correspondera a posicao de um elemento dentro do charset, assim gerando a senha aleatoria
//apos gerar a senha, a classe hide sera removida do id container-password e o id password
//recebera a senha gerada
function GeneratePassword() {
    let pass = '';

    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

//funcao copiar senha
//copia a senha quando um usuario clica com o mouse em cima da senha
function CopyPassword() {
    alert('Senha copiada.')

    //copiar o que estiver dentro da variavel
    navigator.clipboard.writeText(newPassword);
}
