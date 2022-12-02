var botao = document.querySelector(".cabecalho__icone-menu");
var nav = document.querySelector(".cabecalho__menu-navegacao--escondido")
botao.addEventListener("click", function () {
    nav.classList.toggle("cabecalho__menu-navegacao");
    var iconeMenu = document.querySelector(".cabecalho__menu-fixo");
    iconeMenu.classList.toggle("cabecalho__menu-fixo--escondido")
  })
 
  
var botaoVoltar = document.querySelector(".cabecalho__menu-navegacao--voltar");
var navVoltar = document.querySelector(".cabecalho__menu-navegacao--escondido")
botaoVoltar.addEventListener("click", function () {
    navVoltar.classList.toggle("cabecalho__menu-navegacao");
    var iconeMenuVoltar = document.querySelector(".cabecalho__menu-fixo");
    iconeMenuVoltar.classList.toggle("cabecalho__menu-fixo--escondido")
  })