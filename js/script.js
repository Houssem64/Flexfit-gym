
/* BMI calculator*/ 

document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculate-bmi");
    calculateBtn.addEventListener("click", function () {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
      const age = parseInt(document.getElementById("age").value);
  
      if (!isNaN(weight) && !isNaN(height) && !isNaN(age)) {
        const bmiResult = document.getElementById("bmi-result");
        let bmiCategory = "";
  
       
        const bmi = weight / (height * height) + (0.4 * age);
  
        if (bmi < 18.5) {
          bmiCategory = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          bmiCategory = "Normal Weight";
        } else if (bmi >= 25 && bmi < 29.9) {
          bmiCategory = "Overweight";
        } else {
          bmiCategory = "Obese";
        }
  
        bmiResult.innerHTML = `<h4>Your BMI: ${bmi.toFixed(2)}</h4>
        <p class='bmi-category'>Category: ${bmiCategory}</p>`;
      }
    });
  });
  

/* scroll back to top */

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0;
}



/* body fat calculator */


document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculate-body-fat");
  calculateBtn.addEventListener("click", function () {
    const gender = document.getElementById("gender").value;
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (!isNaN(age) && !isNaN(weight) && !isNaN(height)) {
      let bodyFatPercentage;

      if (gender === "male") {
        bodyFatPercentage = (0.29288 * weight) + (0.1585 * height) - (0.000315 * age) - 13.912;
      } else if (gender === "female") {
        bodyFatPercentage = (0.29669 * weight) + (0.1842 * height) - (0.000292 * age) - 9.247;
      } else {
        alert("Please select a valid gender.");
        return;
      }

      const bodyFatResult = document.getElementById("body-fat-result");
      bodyFatResult.innerHTML = `<h4>Your Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%</h4>`;
    } else {
      alert("Please enter valid values for age, weight, and height.");
    }
  });
});




/* Calories calculator */


document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculate-calories");
  calculateBtn.addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    const gender = document.getElementById("gender").value;
    const activityLevel = document.getElementById("activity-level").value;

    if (!isNaN(age) && !isNaN(weight) && !isNaN(height)) {
      const calorieResult = document.getElementById("calorie-result");

      // Calculate calories based on age, weight, height, gender, and activity level
      let calories = 0;

      if (gender === "male") {
        calories = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
      } else if (gender === "female") {
        calories = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
      }

      switch (activityLevel) {
        case "sedentary":
          calories *= 1.2;
          break;
        case "lightly-active":
          calories *= 1.375;
          break;
        case "moderately-active":
          calories *= 1.55;
          break;
        case "very-active":
          calories *= 1.725;
          break;
        case "super-active":
          calories *= 1.9;
          break;
      }

      calorieResult.innerHTML = `<h4>Your Daily Calorie Intake To Maintain Weight: ${calories.toFixed(2)} calories</h4>`;
    }
  });
});
