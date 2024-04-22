function login(){
    const data = {
        nome: "matter",
        senha: "abc"
    }
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    
    if (nome == data.nome){
        if (senha == data.senha) {
            window.location.replace("./segunda.html")
        }
    }else{
        window.alert('ERRO')
    }
    }