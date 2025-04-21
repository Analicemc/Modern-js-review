"use strict";
/*
async function init() {
  const start = Date.now();
  document.getElementById("output").innerHTML = "Ínicio de init(): 0";
  const user = await getUserData();

  document.getElementById("output").innerHTML += `<br>Fim de init(): ${
    Date.now() - start
  } ${user.name}`;
}

const getUserData = function () {
  return new Promise((resolve, reject) => {
    let user = {
      name: "Analice",
      email: "euanacosta@gmail.com.br",
    };

    setTimeout(() => resolve(user), 2000);
  });
};

init();

*/

// WITHOUT CONCURRENCY
/*
async function init() {
  const start = Date.now();
  document.getElementById("output").innerHTML = "Ínicio de init(): 0";

  const user = await getUserData();
  document.getElementById("output").innerHTML += `<br>${Date.now() - start}: ${
    user.name
  }`;

  const welcomeStringMsg = await welcomeString();
  document.getElementById("output").innerHTML += `<br>${
    Date.now() - start
  }: ${welcomeStringMsg}`;
}

const getUserData = function () {
  return new Promise((resolve, reject) => {
    let user = {
      name: "Analice",
      email: "euanacosta@gmail.com.br",
    };

    setTimeout(() => resolve(user), 2000);
  });
};

const welcomeString = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Welcome to my asyncronous program!");
    }, 2000);
  });
}

init();
*/
// WITH CONCURRENCY
async function init() {
  const start = Date.now();
  
  const output = document.getElementById("output");
  output.innerHTML = `Início de init(): 0`;

  const resultPData = getUserData();
  const resultPWelcome = welcomeString();

  const user = await resultPData;
  output.innerHTML += `<br> Fim de init(): ${Date.now() - start} ${user.name}`;

  const message = await resultPWelcome;
  output.innerHTML += `<br> ${message}`;
}

const getUserData = function () {
  return new Promise((resolve, reject) => {
    let user = {
      name: "Analice",
      email: "euanalicecosta@gmail.com",
    };

    setTimeout(() => resolve(user), 2000);
  });
};

const welcomeString = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Welcome to my asyncronous program!"), 2000);
  });
};

init();