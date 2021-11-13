const yargs = require('yargs')

// get all command line arguments
console.log(yargs.argv) // node fileName.js satish kumar
console.log(yargs.argv) // node fileName.js satish --title="kumar" :: op :{ _: [ 'satish' ], title: 'kumar', '$0': 'yargs_demo.js' }

// to access our custom key value
console.log(yargs.argv.title)


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler : function(){
        console.log('Called Add Function')
    }
})

console.log(yargs.argv)
console.log(yargs.version)