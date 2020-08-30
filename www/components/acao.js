$(document).on("click", "#calcular", function() {
  //variaveis
  var formulario = $("#formulario").val();
  var atividade = $("#atividade").val();
  var sexo = $("#sexo").val();
  var peso = $("#peso").val();
  var idade = $("#idade").val();
  var altura = $("#altura").val();

  var sedentario = $("#sedentario").val();
  var levemente = $("#levemente").val();
  var moderadamente = $("#moderadamente").val();
  var altamente = $("#altamente").val();
  var extremamente = $("#extremamente").val();
  
  //masculino
  if(sexo == 'm' && atividade == sedentario) {
    resultado = sedentario * (66 + (13.7 * peso)) + ((5 * altura) - (6.8 * idade));
  }
  if(sexo == 'm' && atividade == levemente) {
    resultado = levemente * (66 + (13.7 * peso)) + ((5 * altura) - (6.8 * idade));
  }
  if(sexo == 'm' && atividade == moderadamente) {
    resultado = moderadamente * (66 + (13.7 * peso)) + ((5 * altura) - (6.8 * idade));
  }
  if(sexo == 'm' && atividade == altamente) {
    resultado = altamente * (66 + (13.7 * peso)) + ((5 * altura) - (6.8 * idade));
  }
  if(sexo == 'm' && atividade == extremamente) {
    resultado = extremamente * (66 + (13.7 * peso)) + ((5 * altura) - (6.8 * idade));
  }

  //feminino
  if(sexo == 'f' && atividade == sedentario) {
    resultado = sedentario * (655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * idade));
  }
  if(sexo == 'f' && atividade == levemente) {
    resultado = levemente * (655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * idade));
  }
  if(sexo == 'f' && atividade == moderadamente) {
    resultado = moderadamente * (655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * idade));
  }
  if(sexo == 'f' && atividade == altamente) {
    resultado = altamente * (655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * idade));
  }
  if(sexo == 'f' && atividade == extremamente) {
    resultado = extremamente * (655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * idade));
  }

  $("#resultado").val(resultado);
});
