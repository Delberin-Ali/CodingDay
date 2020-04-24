let user = prompt("Please enter your email");
let pass = prompt("please enter your password?");


let database = [
    {
        Email: "Delberin.ali@gmail.com",
        password: "Dilo123"
    },
    {
        Email: "Kaan.ozel@gmail.com",
        password: "Kaan123"
    }
];

function signIn(){
    for(i = 0; i < database.length; i++)
    if(user === database[i].Email && pass === database[i].password){
        alert("You are in my website!!");
        return true;
    }
    alert("Please try again")
    let body = document.querySelector("body");
    body.style.visibility = "hidden";
    return false; 
}

signIn();
