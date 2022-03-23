let subTotal = 0;
let tax = 0.13;
let total = 0;

let amountOfGators = 0;
let amountOfBunnies = 0;
let amountOfElephants = 0;
let amountOfFoxes = 0;
let amountOfHedges = 0;

function UpdateReceipt(){
    document.getElementById('gatorsCount').innerHTML = amountOfGators;
    document.getElementById('bunniesCount').innerHTML = amountOfBunnies;
    document.getElementById('elephantsCount').innerHTML = amountOfElephants;
    document.getElementById('foxesCount').innerHTML = amountOfFoxes;
    document.getElementById('hedgeCount').innerHTML = amountOfHedges;

    document.getElementById('gatorsSub').innerHTML = amountOfGators * 5.99;
    document.getElementById('bunniesSub').innerHTML = amountOfBunnies * 6.99;
    document.getElementById('elephantsSub').innerHTML = amountOfElephants * 10;
    document.getElementById('foxesSub').innerHTML = amountOfFoxes * 3.99;
    document.getElementById('hedgehogsSub').innerHTML = amountOfHedges * 4.99;
}

function AddAlligators(){
    let amount = "";
    let firstLoop = true;

    while(isNaN(amount) || amount === "" || amount === null || amount % 1 != 0 ){
        if (firstLoop){
            amount = parseInt( prompt ('Quantity?'));
        }
        else{
            amount = parseInt( prompt ('Enter a valid whole number'));
        }
        firstLoop = false;
    }
    
    amountOfGators += amount;
    UpdateReceipt();
}

function AddBunnies(){
    let amount = "";
    let firstLoop = true;

    while(isNaN(amount) || amount === "" || amount === null || amount % 1 != 0 ){
        if (firstLoop){
            amount = parseInt( prompt ('Quantity?'));
        }
        else{
            amount = parseInt( prompt ('Enter a valid whole number'));
        }
        firstLoop = false;
    }
    
    amountOfBunnies += amount;
    UpdateReceipt();
}

function AddElephants(){
    let amount = "";
    let firstLoop = true;

    while(isNaN(amount) || amount === "" || amount === null || amount % 1 != 0 ){
        if (firstLoop){
            amount = parseInt( prompt ('Quantity?'));
        }
        else{
            amount = parseInt( prompt ('Enter a valid whole number'));
        }
        firstLoop = false;
    }
    
    amountOfElephants += amount;
    UpdateReceipt();
}

function AddFoxes(){
    let amount = "";
    let firstLoop = true;

    while(isNaN(amount) || amount === "" || amount === null || amount % 1 != 0 ){
        if (firstLoop){
            amount = parseInt( prompt ('Quantity?'));
        }
        else{
            amount = parseInt( prompt ('Enter a valid whole number'));
        }
        firstLoop = false;
    }
    
    amountOfFoxes += amount;
    UpdateReceipt();
}

function AddHedgehogs(){
    let amount = "";
    let firstLoop = true;

    while(isNaN(amount) || amount === "" || amount === null || amount % 1 != 0 ){
        if (firstLoop){
            amount = parseInt( prompt ('Quantity?'));
        }
        else{
            amount = parseInt( prompt ('Enter a valid whole number'));
        }
        firstLoop = false;
    }
    
    amountOfHedges += amount;
    UpdateReceipt();
}

function CheckOut(){
    customer = prompt ('Please enter your name')
    while(customer == ""){
        customer = prompt ('Name Field cannot be empty!');
    }

    let gator = parseFloat(document.getElementById('gatorsSub').innerHTML);
    let ele = parseFloat(document.getElementById('elephantsSub').innerHTML);
    let bun = parseFloat(document.getElementById('bunniesSub').innerHTML);
    let hedgehog = parseFloat(document.getElementById('hedgehogsSub').innerHTML);
    let fox = parseFloat(document.getElementById('foxesSub').innerHTML);

    subTotal = parseFloat(
        gator + ele + bun + hedgehog + fox
    );

    document.getElementById('subTotal').innerHTML = subTotal;
    document.getElementById('salesTax').innerHTML = subTotal * tax;
    tax = parseFloat(subTotal * 0.13);
    total = subTotal + tax;
    document.getElementById('finalTotal').innerHTML = customer + ", your total is " + total.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
}
