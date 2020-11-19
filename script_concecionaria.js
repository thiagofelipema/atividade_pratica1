function verPromocao(){
    var veiculo = document.getElementById('veiculo').value
    document.getElementById('resposta_veiculo').innerHTML = "Promoção: " + veiculo
}

function calculaEntradaESaldo(){
    var preco = document.getElementById('preco').value
    var valor = parseFloat(preco)
    var entrada = valor/2
    var saldo = (entrada/12).toFixed(2)
    document.getElementById('resposta_entrada').innerHTML = "Entrada de R$: " + entrada

    document.getElementById('resposta_saldo').innerHTML = "+ 12x de R$: " + saldo
    
}

    var verpromo = document.getElementById('verpromo')
    verpromo.addEventListener('click', verPromocao)
    verpromo.addEventListener('click', calculaEntradaESaldo)
    
    
    

