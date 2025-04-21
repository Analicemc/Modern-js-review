"use strict";

document.getElementById("output").innerHTML = "Promises executing ^^";

let myPromise = new Promise((resolve, reject) => {
  let user = {
    name: "Analice",
    age: "21",
  };

  setTimeout(() => {
    resolve(user);
    // reject('Lorem ipsum');
  }, 2000);
});

const getAdditionalData = (user) => {
  return new Promise((resolve, reject) => {
    user.favoriteColor = "Pink";
    user.favoriteDrink = "Mojito";

    setTimeout(() => resolve(user), 2000);
  });
};

/*myPromise
  .then(getAdditionalData)
  .then((user) => {
    document.getElementById(
      "output"
    ).innerHTML = `${user.name} - ${user.age} - ${user.favoriteDrink}`;
  })
  .catch((error) => {
    document.getElementById("output").innerHTML = error;
  });*/

myPromise
  .then((user) => {
    document.getElementById("output").innerHTML = `${user.name} - ${user.age}`;
    getAdditionalData(user).then((user) => {
      document.getElementById(
        "output"
      ).innerHTML = `${user.name} - ${user.age} - ${user.favoriteDrink}`;
    });
  })
  .catch((error) => {
    document.getElementById("output").innerHTML = error;
  });
