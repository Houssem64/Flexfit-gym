
/* BMI calculator*/ 

document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculate-bmi");
    calculateBtn.addEventListener("click", function () {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
      const bmi = weight / (height * height);

      if (!isNaN(bmi)) {
        const bmiResult = document.getElementById("bmi-result");
        let bmiCategory = "";

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