document.getElementById("submitButton").
addEventListener("click", function(event) {
    event.preventDefault();
    const formdata = {
        nome: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("phone").value,
    };

    console.log("Dados:", formdata);

    fetch("http://localhost:3333/cadastro", {
        method: "POST" ,
        headers:{ "Content-Type" : "application/json" ,
    },
    body: JSON.stringify(formdata),    
})
.then((Response) => Response.json())
.then((data) => {
    console.log("Sucesso:", data);
    alert("Cadastro realizado com sucesso! 👍");
})
.catch((error) => {
    console.error("Erro:", error);
    alert("Ocorreu um erro ao realizar o cadastro! 😰");
});
});

//limpar
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('phone').value = "";