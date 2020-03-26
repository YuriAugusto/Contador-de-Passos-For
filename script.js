function contar(){
    var ini = window.document.getElementById("txti")//vinculo com o formulário 1
    var fim = window.document.getElementById("txtf")//vinculo com o formulário 2
    var passo = window.document.getElementById("txtp")//vinculo com o formulário 3
    var res = window.document.getElementById("res")// Vai exibir a resposta da contagem.
       
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){//length == comprimento        
        res.innerHTML = "Impossível contar!"
        //alert("[Erro] Faltam dados!")
    }else{
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)//Converte o valor de ini para numérico
        var f = Number(fim.value)//Converte o valor de fim para numérico
        var p = Number(passo.value)//Converte o valor de passo para numérico
        if(p <= 0){
            alert("Passo inválido! Considerando passo 1.")
            p = 1
        }
        
        if(i < f){//Contagem crescente
            for(var c = i; c <= f; c += p){//Variavel "c" pois refere-se á contador __ o contador recebe o valor dele mesmo + o passo na expressão (c += p)
            res.innerHTML += ` ${c} \u{1F449}`//+= "+" de concatenação e = porquê irá receber um valor.//ele recebe o que já possui ("Contando: ") mais  `${c} ->`//\u{1F449} recebe o emoji
            }
                                        

        }else {//Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`//\u{1F3C1} emoji da bandeira 
    }


}