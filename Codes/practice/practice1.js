

// display the current day and time
const d = new Date()
//const dArray = 
const dayMapping = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday'}
console.log('Today is: ',dayMapping[d.getDay()])
const time = `Current Time is: ${d.getHours()} ${d.getHours()>12 ? 'PM': 'AM'} : ${d.getMinutes()} : ${d.getSeconds()}`
console.log(time)

// get the current date
console.log(d.getDate+'')

// find the area of a triangle where lengths of the three of its sides are 5, 6, 7

getArea = (a,b,c) =>{
    var s = (a+b+c)/2
    console.log("S is: ", s)
    areaOfTriangle = Math.sqrt((s*(s-a)*(s-b)*(s-c)))
    return areaOfTriangle
}
// method call
// console.log(getArea(5,6,7))

// JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter
// from the end of the string and attaching it to the front
let str = 'w3resource'
var rotatedString = ''
rotateString = (str) =>{
    
    for(i=str.length-1; i>=0 ; i--){
        console.log(str[i])
        rotatedString = rotatedString + str[i]
    }
}

rotateString(str)
// method call
//console.log(rotatedString)

// a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
//d.setFullYear(2022)
d.setDate(1)  // setting date to 1st
d.setMonth(0)  // Setting month to Jan
for(let i = 2015; i<=2050 ; i++){
    d.setFullYear(i)  // setting Year
    //console.log(d.getFullYear(), d.getDay())
    if(d.getDay() == 0){
        console.log("Year: "+d.getFullYear()+" is Having Sunday on 1st-Jan")
    }
}

// JavaScript program where the program takes a random integer between 1 to 10, the user is
//  then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched"

guessNumber = (userNumber) =>{
    console.log('User selected: ', userNumber)
    let randomNumber = Math.ceil(Math.random()*10)
    console.log('Random Number is : ', randomNumber)
    return randomNumber == userNumber ? 'Lucky You' : 'Bad Luck'
}
userNumber = process.argv[2]
// method call
// console.log(guessNumber(userNumber))

// JavaScript program to calculate days left until next Christmas
dayForChristmas = () =>  {
    console.log('dayForChristmas called')
    let d1 = new Date()
    d2 = new Date('12-25-2022')
    console.log(Date(d2-d1))
}

// dayForChristmas()

// a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
convertTemperature =  (tempInCelcius, tempInFahrenheit) => { 
    console.log('convertTemperature called')
    if (tempInCelcius){
        console.log('Temp In Celcius Got. COnverting to F')
        return String((9/5)*(tempInCelcius) + 32)+' Degree F'
    }
    else{
        console.log('Temp In F Got. COnverting to C')
        return String((5/9)*(tempInFahrenheit - 32))+ ' Degree C'
    }
}

// console.log(convertTemperature(0,45))

// JavaScript exercise to get the extension of a filename
getExtension = (fileName) =>{
    console.log('getExtension method called')
    files = fileName.split('.')
    console.log('Extension of file is : ',files[1])
}

// getExtension('myFile.java')

// JavaScript program to check whether a given integer is within 20 of 100 or 400
checkNumberRange =(num) =>{
    console.log('checkNumberRange called')
    if(num >= 20 || num<= 100 || num <= 400){
        console.log('Number is in range')
    }
}

// checkNumberRange(60)

// avaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.
