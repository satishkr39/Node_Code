yargs = require('yargs')
// get all command line arguments
console.log(yargs.argv) // node fileName.js satish kumar
console.log(yargs.argv) // node fileName.js satish --title="kumar" :: op :{ _: [ 'satish' ], title: 'kumar', '$0': 'yargs_demo.js' }

// to access our custom key value
console.log(yargs.argv.title)

// we can use yargs command to define our custom command and it will call the respective version of that. 
