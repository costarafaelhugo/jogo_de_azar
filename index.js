function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function geraElementos() {
    let titulo = document.createElement('h1')
    titulo.setAttribute('id', 'mainTitle')
    let textTitle = document.createTextNode('Gerador de improbabilidade infinita... ou quase isso.')
    titulo.appendChild(textTitle)
    document.body.appendChild(titulo)

    let divMain = document.createElement('div')
    divMain.setAttribute('id', 'divMain')
    document.body.appendChild(divMain)



    let paragrafo = document.createElement('p')
    paragrafo.setAttribute('id', 'paragrafo')
    let textoParagrafo = document.createTextNode('Não entre em pânico! Nós iremos testar sua sorte e ver como está seu dia, pode ser que você ganhe um vale compras pra usar no Restaurante que fica no fim do universo, ganhar algum conselho do Marvin, o android paranoid, ou quem sabe, ter o azar de ter que ler uma poesia vogon. Quando estiver pronto clique no Marvin. ')
    paragrafo.appendChild(textoParagrafo)
    divMain.appendChild(paragrafo)

    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'img')
    imagem.src = "pngwing.com.png"
    divMain.appendChild(imagem)

    let divRes = document.createElement('div')
    divRes.setAttribute('id', 'divRes')
    document.body.appendChild(divRes)

    let paragrafoRes = document.createElement('p')
    paragrafoRes.setAttribute('id', 'paragrafoR')
    divRes.appendChild(paragrafoRes)

}
geraElementos()

document.getElementById("img").onclick = function () {
    let respostas = document.getElementById("paragrafoR");

    let result = getRandom(1, 6)
    switch (result) {
        case 1:
            respostas.textContent = "Parabéns! Você irá jantar por nossa conta. Basta se dirigr até o Restaurante no fim do universo e devorar o suculento bife de um boi que se oferece como jantar enquanto se embriaga com a poderosa Dinamite Pangaláctica, assistindo de camarote ao momento em que tudo se acaba numa explosão fatal.'";

            console.log('deu 1')

            break;
        case 2:

            respostas.textContent = 'Que azar... sofra ao ler um poema vogon: "Ó fragúndio bugalhostro tua micturição é para mim Qual manchimucos num lúrgido mastim.           Frêmeo implochoro-o, ó meu perlíndromo exangue.Adrede não me apagianaste a crímidos dessartes?Ter-te-ei rabirrotos, raio que o parte!"';
            console.log('Deu 2')
            break;
        case 3:

            respostas.textContent = "Gozado, justamente quando você pensa que a vida não pode ser pior, de repente ela piora ainda mais. Marvin, o andróide paranóide.";
            console.log('Deu 3')
            break;
        case 4:

            respostas.textContent = "A realidade está frequentemente incorreta! Douglas Adams.";
            console.log('Deu 4')
            break;
        case 5:

            respostas.textContent = "42...nem é preciso dizer mais nada.Você tem a resposta, agora é encontrar a pergunta.";
            console.log('Deu 5')
            break;
        default:
            console.log('42')

    }



}




