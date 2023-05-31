function pegaval(event){
    event.preventDefault();
    var senha  = "TRIPLATESTE";
    var acesso = document.getElementById("acess").value;
    if(acesso === senha){
        console.log("Passou");
        alert("Parabéns acesso concedido");
        var url = "table.html";
        window.location.href = url;
    }else{
        console.log("Não passou!")
        alert("Senha incorreta!");
    }
}

function mostrarSenha(){
    var inputPass = document.getElementById('acess')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}

function recarregarRetangulos() {
    window.location.reload();
  }

const rectangles = document.querySelectorAll('.rectangle div');

// Adiciona um evento de clique a cada retângulo
rectangles.forEach(rectangle => {
  rectangle.addEventListener('click', function() {
    // Verifica a cor atual do retângulo
    const currentColor = this.style.backgroundColor;
    
    if (currentColor === 'rgb(0, 255, 127)') {
      this.style.backgroundColor = 'white'; // cor padrão
    } else {
      this.style.backgroundColor = 'rgb(0, 255, 127)';
    }
  });
});
