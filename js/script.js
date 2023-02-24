// carregar o documento quando estiver pronto
$(document).ready(function(){

// progress bar
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {
         
        color: '#fff',
        strokeWidth: 8, /* borda */
        duration: 1400,
        from:{ color: '#7e5539'},
        to:{ color: '#665D1E'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 100);
            circle.setText(value);
        }
    });
    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {
         
        color: '#fff',
        strokeWidth: 8, /* borda */
        duration: 1600,
        from:{ color: '#7e5539'},
        to:{ color: '#665D1E'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 99);
            circle.setText(value);
        }
    });
    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {
         
        color: '#fff',
        strokeWidth: 8, /* borda */
        duration: 2000,
        from:{ color: '#7e5539'},
        to:{ color: '#665D1E'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 12);
            circle.setText(value);
        }
    });

    // iniciando o leader quanto o usuário chega no elemento
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500) && stop == 0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);

            stop = 1;
        }
    });

    // Parallax
    setTimeout(function(){

        $("#data-area").parallax({imageSrc: 'img/doce1.jpg'})
    }, 250);
});
// acessibilidade
function cliqueBotao() {
    const temas = {
        't-dark': 't-normal',
        't-normal': 't-dark'
}
    const temaCorrente = document.body.dataset.theme;
    tamanho = localStorage.getItem('tamanho');
    if (tamanho == undefined){
        tamanho=100;
    }
    document.body.setAttribute(
        'data-theme', temas[temaCorrente] || 
                        't-dark'
    );
    localStorage.setItem('theme', temas[temaCorrente]);

}
function aumentaFonte(){
    var aumenta = 10;
    tamanho = parseInt(tamanho) + aumenta;
    var corpo = document.querySelector('body');
    corpo.style.fontSize = tamanho +'%';
    localStorage.setItem('tamanho', tamanho);
}
function diminuiFonte(){
    var diminui = 10;
   tamanho = parseInt(tamanho) - diminui;
   var corpo = document.querySelector('body');
   corpo.style.fontSize = tamanho + '%';
   localStorage.setItem('tamanho', tamanho);
}
function inicializacao (){    
    const botao = document.getElementById ("background");
    const botaoAumenta = document.getElementById("btnFonteMais")
    const botaoDiminui = document.getElementById("btnFonteMenos")
    tema = localStorage.getItem('theme')
    
    if(tema == undefined){
        tema = 't-normal';
    }
    tamanho = localStorage.getItem('Tamanho')
    if(tamanho == undefined){
        tamanho = 100;
    }
    document.body.setAttribute('data-theme', tema)
    document.querySelector('body').style.fontSize = tamanho + '%';
    if (botao)  {
        botao.addEventListener('click', cliqueBotao);
    }
    if (botaoAumenta){
        botaoAumenta.addEventListener('click' , aumentaFonte);
    }
    if (botaoDiminui){
        botaoDiminui.addEventListener('click' , diminuiFonte);
    }
}; 

window.onload = function (){
    inicializacao();
};