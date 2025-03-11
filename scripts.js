//Seleciona os elementos do formulário
const amount = document.getElementById("amount")

// Captura o evento de input para formatar o valor
amount.oninput = () =>{
  // Obtém o valor atualizado do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g, "")

  // Transformar o valor em centavos (exemplo: 150/100 = 1,50)
  value = Number(value)/100
  
  // Atualiza o valor do input
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL"
  })

  // Retorna o valor formartado
  return value
}