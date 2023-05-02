const usuario = {
    nombre: 'Jesus', 
    correo: 'jsus@gmail.com',
    telefono: 551212121221233123,
    direccion: {
        calle: 'Calle 123',
        numero: '1234',
        colonia: 'ixtapaluca'
    },
    pasatiempos: ['video juegos', 'lectura', 'deportes']
}

const {nombre,telefono}=usuario;
console.log(nombre.toUpperCase())
console.log(telefono.toString().length);
// //esa extraer el ssd y grafica
// const pcComponentes = {
//     procdor: 'RYZEN 5',
//     capacidadRAM: '16GB',
//     ssd: '240gb',
//     grafica: 'rtx 3060'
// }

// //ejercicio
// const {procesador, capacidadRAM, ssd, grafica} = pcComponentes;
// console.log(procesador, ssd);

//console.log (procesador, capacidadRAM, ssd, grafica);