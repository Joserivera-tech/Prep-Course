function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  if((num-Math.floor(num))>0.5){
    return Math.ceil(num);
  }
  else{
    return Math.floor(num);
  }
}
  console.log(redondearNumero(3.7));