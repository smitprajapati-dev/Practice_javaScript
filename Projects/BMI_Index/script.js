const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 19) {
      // console.log("You are in underWeight category");
      message.innerHTML = "<span>You are in underWeight category</span>";
    } else if (bmi > 19 || bmi < 25) {
      // console.log("You are in normal Catergory")
      message.innerHTML = "<span>You are in normal Catergory</span>";
    } else {
      // console.log("You are in Over Weighted");
      message.innerHTML = "<span>You are in Over Weighted</span>";
    }
  }
});
