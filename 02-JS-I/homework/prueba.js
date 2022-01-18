function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.size == str2.size){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(tienenMismaLongitud("hola","adios"));