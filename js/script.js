// alert("Oi Minha Mulher Linda!");
// função caixinha de mensagem

// var,let e const = são 3 tipos de variáveis que se usam no Javascript
var btnMenu = document.querySelector(".btn-menu");
var menu = document.querySelector(".menu");
// document.querySelector(".btn-menu"); = usado para selecionar um item do HTML neste caso as classes btn-menu e menu lá do css
// console.log(btnMenu) = Usado para avaliar o código através do console do nevagador

// Associar o evento de click ao btnMenu - quando  usuário clikar algo vai acontecer
btnMenu.addEventListener("click",function(){  
    // console.log("clicou"); //testando pelo console para ver se clicou...
    menu.classList.toggle("menu-open"); // add e remove a classe
    // menu.classlist.add("menu-open"); quando for para adicionar
    //menu.classlist.remove("menu-open"); quando for para remover
    // O Toggle faz as duas funções (remover e adicionar), neste caso o menu
    btnMenu.classList.toggle("x"); // add e remove a classe
})

// btnMenu.addEventListener("click",function(){  
//     // console.log("clicou"); //testando pelo console para ver se clicou...
    
//         menu.classList.toggle("menu-closed"); // add e remove a classe
//     // menu.classlist.add("menu-open"); quando for para adicionar
//     //menu.classlist.remove("menu-open"); quando for para remover
//     // O Toggle faz as duas funções (remover e adicionar), neste caso o menu
//         btnMenu.classList.toggle("c"); // add e remove a classe
// })

menu.addEventListener("click", function () {  
    // menu.classList.add("menu-closed");
    btnMenu.classList.toggle('x');
    menu.classList.remove("menu-open");
})


