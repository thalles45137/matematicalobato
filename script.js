function calcularSoma() {
    var num1 = parseFloat(document.getElementById("num1-soma").value);
    var num2 = parseFloat(document.getElementById("num2-soma").value);
    var resultado = num1 + num2;
    document.getElementById("resultado-soma").innerHTML = resultado;
  }
  
  function calcularSubtracao() {
    var num1 = parseFloat(document.getElementById("num1-subtracao").value);
    var num2 = parseFloat(document.getElementById("num2-subtracao").value);
    var resultado = num1 - num2;
    document.getElementById("resultado-subtracao").innerHTML = resultado;
  }
  
  function calcularMultiplicacao() {
    var num1 = parseFloat(document.getElementById("num1-multiplicacao").value);
    var num2 = parseFloat(document.getElementById("num2-multiplicacao").value);
    var resultado = num1 * num2;
    document.getElementById("resultado-multiplicacao").innerHTML = resultado;
  }
  
  function calcularDivisao() {
    var num1 = parseFloat(document.getElementById("num1-divisao").value);
    var num2 = parseFloat(document.getElementById("num2-divisao").value);
    if (num2 === 0) {
      alert("Não é possível dividir por zero!");
      return;
    }
    var resultado = num1 / num2;
    document.getElementById("resultado-divisao").innerHTML = resultado;
  }
  