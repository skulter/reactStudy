const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let coffeeList = "Espresso";
    console.log(coffeeList);
    resolve(coffeeList);
  }, 500);
});

promise
  .then((coffeeList) => {
    return new Promise((resolve) => {
      setTimeout(
        (coffeeName) => {
          coffeeList += ", " + coffeeName;
          console.log(coffeeList);
          return resolve(coffeeList);
        },
        500,
        "Americano"
      );
    });
  })
  .then((coffeeList) => {
    return new Promise((resolve) => {
      setTimeout(
        (coffeeName) => {
          coffeeList += ", " + coffeeName;
          console.log(coffeeList);
          return resolve(coffeeList);
        },
        500,
        "Mocha"
      );
    });
  })
  .then((coffeeList) => {
    return new Promise((resolve) => {
      setTimeout(
        (coffeeName) => {
          coffeeList += ", " + coffeeName;
          console.log(coffeeList);
          return coffeeList;
        },
        500,
        "Latte"
      );
    });
  });
