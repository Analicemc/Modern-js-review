"use strict";

// ARROW FUNCTIONS
let username = {
  name: "Andrew",
  email: "andrew@example.com",
};

username = {
    name: "Ashley",
    email: 'ashley@example.com'
}

// function init(){
//     document.getElementById('output').innerHTML = `${username.name} (${username.email})`;
// }

const init = () => document.getElementById('output').innerHTML = `${username.name} (${username.email})`;

init();

// this CONTEXT 
document.getElementById('btn').addEventListener('click', function(){ // WE CAN USE A ARROW FUNCTION HERE SO THE this OBJECT WILL BE THE DOCUMENT

    console.log(this);
    // function getDetails(){
    //     console.log(this);
    //     return `The button id is ${this.getAttribute('id')}`;
    // }

    const getDetails = () => {
        console.log(this);
        return `The button id is ${this.getAttribute('id')}`;
    }

    document.getElementById('output').innerHTML = getDetails();

});