const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(data => {
        console.log('==========='.green)
        console.log(`tabla del ${argv.base}`.green)
        console.log('==========='.green)
        console.log(data)
      })
      .catch(err => console.log(`Error: ${err}`))
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`.blue))
      .catch(err => console.log(`Error: ${err}`))
    break;
    default:
      console.log('Comando no reconocido')
}



// console.log(`base ${argv.base} y limite ${argv.limite}`);
// let parametro = argv[2]
// let base = parametro.split('=')[1]



