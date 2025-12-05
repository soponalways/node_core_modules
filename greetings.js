const args = process.argv; 

// console.log(args);

const name = args[2] || "Guest"; 
const time = new Date().getHours(); 

let greetings; 

if(time < 12 ) {
    greetings = "Good Morning"; 
} else if(time < 18 ) {
    greetings = "Good AfterNoon"; 
} else {
    greetings = "Good Evening"
}


 console.log(`${greetings} ${name}`);