function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 0

    if (hora == 1)
    {
        msg.innerHTML = 'BOM DIA'
        img.src = '_imagem/manha99.png'
    } 
    else if (hora == 2)
    {
        msg.innerHTML = 'BOA TARDE'
        img.src = '_imagem/tarde99.png'
    } 
    else if (hora == 3)
    {
        msg.innerHTML = 'BOA NOITE'
        img.src = '_imagem/noite99.png'
    }
    else
    {
        msg.innerHTML = 'ERRO'
        img.src = ''
    }
}
function botaocontrolemanha() {
    var botaomanha = window.document.getElementById('bmanha')
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var sec = window.document.getElementById('sec')
    msg.innerHTML = 'BOM DIA (Você apertou o botão MANHA)'
    img.src = '_imagem/manha99.png'
    sec.style.background = 'rgb(255, 255, 105)'
    msg.style.color = 'black'
}
function botaocontroletarde() {
    var botaotarde = window.document.getElementById('btarde')
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    msg.innerHTML = 'BOA TARDE (Você apertou o botão TARDE)'
    img.src = '_imagem/tarde99.png'
    sec.style.background = 'rgb(204, 110, 22)'
    msg.style.color = 'black'
}
function botaocontrolenoite() {
    var botaonoite = window.document.getElementById('bnoite')
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    msg.innerHTML = 'BOA NOITE (Você apertou o botão NOITE)'
    img.src = '_imagem/noite99.png'
    sec.style.background = 'rgb(70, 0, 102)'
    msg.style.color = 'white'
}