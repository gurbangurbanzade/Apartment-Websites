// Search form
const searchBTN = document.querySelector(".searchBTN");
const form = document.querySelector(".form");
const checkInputs = document.querySelectorAll(".checkInput");
const checkText = `
                <span class="checkText">This field is required</span>
                `;
const checkTextFormat = `
                <span class="checkText">Format is not valid</span>
                `;
const time = new Date();
// Search Availabilty function start
searchBTN.addEventListener("click", function searchAvailaility(e) {
  e.preventDefault();
  const day = time.getDate() + time.getMonth() + 1 + time.getFullYear();
  for (let inputs of checkInputs) {
    if (
      inputs.value.length < 8 ||
      inputs.value.length > 8 ||
      !Number(inputs.value)
    ) {
      if (inputs.value == "") {
        if (!inputs.nextElementSibling) {
          inputs.insertAdjacentHTML("afterend", checkText);
        } else if (
          inputs.nextElementSibling.innerHTML == "Format is not valid"
        ) {
          inputs.nextElementSibling.innerHTML = "This field is required";
        }
      } else {
        inputs.insertAdjacentHTML("afterend", checkTextFormat);
        inputs.value = "";
      }
    } else if (inputs.value.slice(4, 8) < time.getFullYear()) {
      inputs.insertAdjacentHTML("afterend", checkTextFormat);
      inputs.value = "";
    } else if (inputs.value.slice(4, 8) == time.getFullYear()) {
      if (
        inputs.value.slice(2, 4) > 12 ||
        inputs.value.slice(2, 4) <= time.getMonth() + 1
      ) {
        if (
          inputs.value.slice(2, 4) == time.getMonth() + 1 ||
          (inputs.value.slice(2, 4) < time.getMonth() + 1 &&
            (inputs.value.slice(0, 2) > 31 ||
              inputs.value.slice(0, 2) < time.getDate()))
        ) {
          inputs.insertAdjacentHTML("afterend", checkTextFormat);
          inputs.value = "";
        }
      } else {
        if (
          inputs.value.slice(0, 2) > 31 ||
          inputs.value.slice(0, 2) < time.getDate()
        ) {
          inputs.insertAdjacentHTML("afterend", checkTextFormat);
          inputs.value = "";
        }
      }
    }
  }
});
// End Search Availabilty function start
// Input Error Delete Function Start
function deleteError(e) {
  if (e.nextElementSibling) {
    e.nextElementSibling.remove();
  }
}

// // End Search form
// //
// All form check
// for (let input of form.children) {
//   if (
//     input.lastElementChild.tagName == "INPUT" &&
//     input.lastElementChild.value == ""
//   ) {
//     input.innerHTML += checkText;
//     console.log("salam", input);
//   }
// }
// Check in/out input format check
