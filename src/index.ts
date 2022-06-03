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

let cantidadInfantes: number = Number(
  prompt("Ingrese la cantidad de infantes")
);
let arrayAulaAmarilla: number[] = new Array(30);
let arrayAulaVerde: number[] = new Array(35);
let arrayAulaAzul: number[] = new Array(40);

function asignarAula(cantidadAlumnos: number) {
  if (cantidadAlumnos <= 0) {
    console.log(
      `La cantidad ingresada de infantes (${cantidadAlumnos}) no es posible`
    );
  } else if (cantidadAlumnos > 40) {
    console.log(
      `No hay suficiente espacio para los ${cantidadAlumnos} infantes`
    );
  } else if (
    cantidadAlumnos <= arrayAulaAzul.length &&
    cantidadAlumnos > arrayAulaVerde.length
  ) {
    console.log(`Los ${cantidadAlumnos} infantes ingresados van al aula Azul`);
  } else if (
    cantidadAlumnos <= arrayAulaVerde.length &&
    cantidadAlumnos > arrayAulaAmarilla.length
  ) {
    console.log(`Los ${cantidadAlumnos} infantes ingresados van al aula Verde`);
  } else if (cantidadAlumnos <= arrayAulaAmarilla.length) {
    console.log(
      `Los ${cantidadAlumnos} infantes ingresados van al aula Amarilla`
    );
  }
}

asignarAula(cantidadInfantes);
