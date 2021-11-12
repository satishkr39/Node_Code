console.log('util.js')

my_name_1 = 'my name from utils'
my_name_2 = 'my another name from utils'
// define our fucntion
function add(a,b){
    return a+b
}

function minus(a,b){
    return a-b
}

// export the function add and minus
module.exports =  {add, minus}