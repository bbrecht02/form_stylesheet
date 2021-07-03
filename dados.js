window.onload = function() {

    form = document.getElementById("form");
    nome = document.getElementById("nome");
    sobrenome = document.getElementById("sobrenome");
    email = document.getElementById("email");
    xp = document.getElementById("experiencia");
    tech = document.getElementById("check");
    
    
    divDetalhes = document.getElementById("xp");
    detalhes = divDetalhes.getElementsByTagName("textarea");

    form.addEventListener('submit', function(e) {

        console.log(nome.value);
        console.log(sobrenome.value);
        console.log(email.value);
        console.log(xp.value);
        console.log(tech.value);
        console.log(detalhes.value);
        
        e.preventDefault();
    });
};