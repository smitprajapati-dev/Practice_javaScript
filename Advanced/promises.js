const promeiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Db calls, cryptography, netwrok
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promeiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ Username: "smit", email: "smitaksdf;la@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ useName: "SMit", password: "123" });
    } else {
      reject("ERROR Somethig went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.useName;
  })
  .then((myUser) => {
    console.log(myUser);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ useName: "JavaScript", password: "123" });
    } else {
      reject("ERROR JavaScript went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     console.log(data);

//     } catch (error) {
//         console.log("E:", error);

//     }
// }

// getAllUsers();

fetch("https://api.github.com/users/smitprajapati-dev")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
