// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}
function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.tomato) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}
function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  //you can also use getElementById
  if (state.onion) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}
function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}
document.querySelector(".btn-patty").onclick=function () {
 state.Patty = !state.Patty;
  if(state.Patty===true)
  {document.getElementById('pattybtn').style.background="orangered";
    ingpatty(true);
    renderPrice(80);
  }
  else
  {document.getElementById('pattybtn').style.background="#ffd058";
   ingpatty(false);
   renderPrice(-80);
  }

  renderAll();
};
// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.cheese = !state.cheese;
  if(state.cheese===true)
 { document.getElementById('cheesebtn').style.background="orangered";
   ingcheese(true);
  renderPrice(10);
 }
  else
  {document.getElementById('cheesebtn').style.background="#ffd058";
   ingcheese(false);
    renderPrice(-10);
  }
  renderAll();
};
// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.tomato = !state.tomato;
  if(state.tomato===true)
 { document.getElementById('tomatobtn').style.background="orangered";
  ingtomato(true);
 renderPrice(20);
 }
  else
 { document.getElementById('tomatobtn').style.background="#ffd058";
   ingtomato(false);
 renderPrice(-20);
 } 
  renderAll();
};
// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.onion = !state.onion;
  if(state.onion===true)
  {document.getElementById('onionbtn').style.background="orangered";
   ingonion(true);
    
    renderPrice(20);
  }
  else
  {document.getElementById('onionbtn').style.background="#ffd058";
   ingonion(false);
    renderPrice(-20);
  }
  renderAll();
};
// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.lettuce = !state.lettuce;
  if(state.lettuce===true)
  {document.getElementById('lettucebtn').style.background="orangered";
    inglettuce(true);
    renderPrice(20);
  }
  else
  {document.getElementById('lettucebtn').style.background="#ffd058";
    inglettuce(false);
    renderPrice(-20);
  }
  renderAll();
};
//Challenge 1 - Add/Remove the class active to the buttons based on state

// var btnPatty=0;
// function renderButtons()
// {  btnPatty++;
//   if(btnPatty%2!==0){
//   state.Patty=true;
//   document.getElementById('p1').style.background="red";}
  
//   else if(count%2===0){
//      state.Patty=false;
//      document.getElementById('p1').style.background="blue";
//   }
  
// }
//Challenge 2 - Render only the items selected in the ingredients board based on the state
//Judgement 1
function ingpatty(check){
    if(check===true)
    document.getElementById("ingPatty").innerHTML="Patty";
    else
    document.getElementById("ingPatty").innerHTML="";
}
function ingcheese(check){
  if(check===true)
  document.getElementById("ingCheese").innerHTML="Cheese";
  else
  document.getElementById("ingCheese").innerHTML="";
}
function ingtomato(check){
  if(check===true)
  document.getElementById("ingTomato").innerHTML="Tomato";
  else
  document.getElementById("ingTomato").innerHTML="";
}
function ingonion(check){
  if(check===true)
  document.getElementById("ingOnion").innerHTML="Onion";
  else
  document.getElementById("ingOnion").innerHTML="";
}
function inglettuce(check){
  if(check===true)
  document.getElementById("ingLettuce").innerHTML="Lettuce";
  else
  document.getElementById("ingLettuce").innerHTML="";
}






//In the p element having price-details as the class, display the calculated
//price based on ingredients
let sum=20;
function renderPrice(value)
{   sum+=value;
  console.log(sum);
  
  if(sum<=0)
  document.querySelector('#price-details').innerHTML="Current Order Total INR  "+20;
  
  else
  document.querySelector('#price-details').innerHTML="Current Order Total INR  "+sum;
  
  renderAll();
  }