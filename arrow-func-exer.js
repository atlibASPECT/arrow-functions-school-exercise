// Exersize 1
function sum(num1, num2){
    return num1 + num2
    }
    sum(40,2)
    sum(42,0)
    console.log("the answer to everything is", sum(42,0))

// The arrow function underneeth
    arrow = (num1, num2) => num1 + num2
        console.log("The answer to everything is:", arrow(32,10))

// Excersize 2
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
    }
    
    let longestCityNameInTheWorld =
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
    stringLength(longestCityNameInTheWorld)

// The arrow function underneeth
stringLength = (str) => console.log(`The length of "${str}" is:`, str.length)
    
    let veryLongestCityNameInTheWorld = 
    "Krung Thep Mahanakhon Amon Rattanakosin Mahinthara Yuthaya Mahadilok Phop Noppharat Ratchathani Burirom Udomratchaniwet Mahasathan Amon Piman Awatan Sathit Sakkathattiya Witsanukam Prasit!"
    stringLength(veryLongestCityNameInTheWorld)

// Excersize 3
function shortness(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
    }
    shortness("willynilly")

// The arrow function underneeth
shortestness = str => {
    let length = str.length
    console.log(`The length of "${str}" is:`, length)
    return str.length
    }
    shortestness("Willynilly")

// Excersize 4
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff")

// The arrow function underneeth
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

showAlert =name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)

showAlert("You ball of fluff")