/*const user={
    username: "Leena",
    price: 9999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage();
user.username = "Sam"
user.welcomeMessage();
//console.log(this);              //empty object*/



// function func(){
//     console.log(this);
// }
// func();


/*function addTwo(num1,num2){
    return num1+num2;
}
console.log(addTwo(3,8));*/

/*const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,8));*/

/*const addTwo=(num1,num2)=>(num1+num2);
console.log(addTwo(3,8));*/

/*const addTwo=(num1,num2)=>({username: "Leena"});
console.log(addTwo(3,8));*/


(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Leena");