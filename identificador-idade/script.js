function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'homem'
            if (idade >=0 && idade <= 10){
                img.setAttribute('src', 'criança2.png')
                //criança
            } else if (idade < 21){
                img.setAttribute('src', 'adolescente2.png')
                //adolescente
            } else if (idade < 60){
                img.setAttribute('src', 'adulto2.png')
                //adulto
            }else {
                img.setAttribute('src', 'idoso2.png')
                //idoso
            }
        } else if (fsex[1].checked){
            gen = 'mulher'
            if (idade >=0 && idade <=10){
                img.setAttribute('src', 'criança1.png')
                //criança
            } else if (idade < 21){
                img.setAttribute('src', 'adolescente1.png')
                //adolescente
            } else if (idade < 60){
                img.setAttribute('src', 'adulto1.png')
                //adulto
            }else {
                img.setAttribute('src', 'idoso1.png')
                //idoso
            }
        } else if (fsex[2].checked){
            gen = 'pessoa'
            if (idade >=0 && idade <=10){
                //criança
            } else if (idade < 21){
                //adolescente
            } else if (idade < 60){
                //adulto
            }else {
                //idoso
            }
        }   
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}