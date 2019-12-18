const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors');

/*let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];*/

//let base = 3;

/*creaArchivo()
    .then(archivo => console.log(`Archivo Creado : ${archivo}`)
    )
    .catch(e => console.log(e));

//console.log(process.argv);*/
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}
