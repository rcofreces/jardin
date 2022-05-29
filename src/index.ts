let cantidadInfantes: number = Number(
  prompt("Ingrese la cantidad de infantes entre 1 y 40")
);

if (cantidadInfantes >= 1 && cantidadInfantes <= 30) {
  console.log(`El infante irá a la sala Amarilla`);
} else if (cantidadInfantes >= 31 && cantidadInfantes <= 35) {
  console.log(`El infante irá a la sala Verde`);
} else if (cantidadInfantes >= 36 && cantidadInfantes <= 40) {
  console.log(`El infante irá a la sala Azul`);
} else {
  console.log(`EROR: usted ha ingresado una cantidad mayor a 40`);
}
