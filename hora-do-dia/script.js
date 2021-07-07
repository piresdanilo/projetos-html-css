function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.querySelector('img#imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 20
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    // Bom dia dda338
    img.src = 'manha.png'
    document.body.style.background = "#dda338"
} else if (hora >=12 && hora < 18){
    // Boa tarde
    img.src = 'tarde.png'
    document.body.style.background = "#306d97"
} else {
    // Boa noite
    img.src = 'noite.png'
    document.body.style.background = "#6f0641"
}
}