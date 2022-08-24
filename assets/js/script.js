var nome = window.document.getElementById('nome')
var nomeDaSerie = window.document.getElementById('nomeDaSerie')
var canal = window.document.getElementById('canal')
var quantidade = window.document.getElementById('quantidade')
var nomeOk = false
var nomeDaSerieOk = false
var canalOk = false
var quantidadeOK = false

/*function validarNome(){
    let txtNome = document.getElementById('txtNome')
    if (nome.value.length <3) {
        txtNome.innerHTML='nome inválido'
        txtNome.style.color='red'
        nomeOk = false
    }else{
        txtNome.innerHTML='nome válido'
        txtNome.style.color='green'
        nomeOk = true
    }
}*/
function validarSerie() {
    let txtNomeDaSerie = document.getElementById('txtNomeDaSerie')
    if(nomeDaSerie.value.length=0){
        nomeDaSerieOk=false
    }else{
        nomeDaSerieOk=true
    }
}
function validarCanal() {
    let txtCanal = document.getElementById('txtCanal')
    if (canal.value.length=0) {
        canalOk=false
    } else {
        canalOk=true
    }
}
function validarQtd() {
    let txtQtd = document.getElementById('txtQtd')
    if (quantidade.value.length=0) {
        quantidadeOK=false
    } else {
        quantidadeOK=true
    }
}

function enviar(){
    if (nomeDaSerieOk==true && quantidadeOK==true && canalOk==true) {
        alert('formulário enviado com sucesso')
    }else{
        alert('preencha corretamente')
    }
}

