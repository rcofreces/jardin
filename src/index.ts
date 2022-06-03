/*• El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada
• Ejemplo: si la cantidad de personas de un curso es 34, entonces
el aula a asignar será la Verde. El aula Amarilla no puede ser
asignada porque la cantidad de personas es mayor a la cantidad
de bancos disponibles. El aula Azul es descartada porque quedan
más bancos inutilizados que en el aula Verde (6 versus 1).*/

let dimensiónArreglo: number = Number(
  prompt("Ingrese la cantidad de infantes entre 1 y 40")
);
let cantidadInfantes: number[] = new Array(dimensiónArreglo);
let i: number = 0;

for (i = 0; i < cantidadInfantes.length; i++) {
  cantidadInfantes[i] = cantidadInfantes.length;
  console.log(
    `La cantidad total que hay de alumnos es: ${cantidadInfantes[i]}`
  );
}

for (i = 0; i < cantidadInfantes.length; i++) {
  if (i >= 1 || i <= 30) {
    console.log(`El infante irá a la sala Amarilla`);
  } else if (i >= 31 || i <= 35) {
    console.log(`El infante irá a la sala Verde`);
  } else if (i >= 36 || i <= 40) {
    console.log(`El infante irá a la sala Azul`);
  } else if (i > 40 || i <= 0) {
    console.log(`EROR: usted ha ingresado una cantidad mayor a 40 ó menor a 0`);
  }
}
