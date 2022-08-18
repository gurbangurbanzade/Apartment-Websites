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
const checkInInput = document.querySelector("#inputCheckIn");

const checkOutInput = document.querySelector("#inputCheckOut");

// Search Availabilty function start
searchBTN.addEventListener("click", function searchAvailaility(e) {
  e.preventDefault();
  const day = time.getDate() + time.getMonth() + 1 + time.getFullYear();
  const checkInInputDate = `${checkInInput.value.slice(
    4,
    8
  )}-${checkInInput.value.slice(2, 4)}-${checkInInput.value.slice(0, 2)}`;
  const checkOutInputDate = `${checkOutInput.value.slice(
    4,
    8
  )}-${checkOutInput.value.slice(2, 4)}-${checkOutInput.value.slice(0, 2)}`;
  //---------------------------------------------------
  for (let inputs of checkInputs) {
    console.log(
      new Date(
        `${inputs.value.slice(4, 8)}-${inputs.value.slice(
          2,
          4
        )}-${inputs.value.slice(0, 2)}`
      )
    );
    console.log(time);
    if (
      inputs.value.length < 8 ||
      inputs.value.length > 8 ||
      !Number(inputs.value) ||
      isNaN(
        new Date(
          `${inputs.value.slice(4, 8)}-${inputs.value.slice(
            2,
            4
          )}-${inputs.value.slice(0, 2)}`
        )
      ) ||
      new Date(
        `${inputs.value.slice(4, 8)}-${inputs.value.slice(
          2,
          4
        )}-${inputs.value.slice(0, 2)}`
      ) < time
    ) {
      if (inputs.value == "") {
        if (!inputs.nextElementSibling) {
          inputs.insertAdjacentHTML("afterend", checkTextFormat);
        } else if (
          inputs.nextElementSibling.innerHTML == "Format is not valid"
        ) {
          inputs.nextElementSibling.innerHTML = "This field is required";
        }
      } else {
        inputs.insertAdjacentHTML("afterend", checkTextFormat);
        inputs.value = "";
      }
    } else if (new Date(checkInInputDate) >= new Date(checkOutInputDate)) {
      console.log("salam");
      document
        .querySelector("#inputCheckOut")
        .insertAdjacentHTML("afterend", checkTextFormat);
      document.querySelector("#inputCheckIn").value = checkInInput.value;
      // document.querySelector("#inputCheckOut").value = "";
      break;
    }
  }
  //---------------------------------------------------
  // for (let inputs of checkInputs) {
  //   if (
  //     inputs.value.length < 8 ||
  //     inputs.value.length > 8 ||
  //     !Number(inputs.value)
  //   ) {
  //     if (inputs.value == "") {
  //       if (!inputs.nextElementSibling) {
  //         inputs.insertAdjacentHTML("afterend", checkText);
  //       } else if (
  //         inputs.nextElementSibling.innerHTML == "Format is not valid"
  //       ) {
  //         inputs.nextElementSibling.innerHTML = "This field is required";
  //       }
  //     } else {
  //       inputs.insertAdjacentHTML("afterend", checkTextFormat);
  //       inputs.value = "";
  //     }
  //   } else if (inputs.value.slice(4, 8) < time.getFullYear()) {
  //     inputs.insertAdjacentHTML("afterend", checkTextFormat);
  //     inputs.value = "";
  //   } else if (inputs.value.slice(4, 8) == time.getFullYear()) {
  //     if (
  //       inputs.value.slice(2, 4) > 12 ||
  //       inputs.value.slice(2, 4) <= time.getMonth() + 1
  //     ) {
  //       if (
  //         inputs.value.slice(2, 4) == time.getMonth() + 1 &&
  //         (inputs.value.slice(0, 2) > 31 ||
  //           inputs.value.slice(0, 2) < time.getDate())
  //       ) {
  //         inputs.insertAdjacentHTML("afterend", checkTextFormat);
  //         inputs.value = "";
  //       } else if (inputs.value.slice(2, 4) < time.getMonth() + 1) {
  //         inputs.insertAdjacentHTML("afterend", checkTextFormat);
  //         inputs.value = "";
  //       }
  //     } else {
  //       if (
  //         inputs.value.slice(2, 4) == time.getMonth() + 1 &&
  //         (inputs.value.slice(0, 2) > 31 ||
  //           inputs.value.slice(0, 2) < time.getDate())
  //       ) {
  //         inputs.insertAdjacentHTML("afterend", checkTextFormat);
  //         inputs.value = "";
  //       }
  //     }
  //   }
  // }
  //------------------------------------
  // Date Difference  Control
});
// End Search Availabilty function start
// Input Error Delete Function Start
function deleteError(e) {
  if (e.nextElementSibling) {
    e.nextElementSibling.remove();
  }
}
// End Input Error Delete Function Start
//-----------------------------------------
// // Date Difference  Control
// const checkInInput = document.querySelector("#inputCheckIn");
// const checkOutInput = document.querySelector("#inputCheckOut");
// // console.log(checkInInput);
// if (
//   1
//   // checkInInput.value.length == 8 &&
//   // checkOutInput.value.length == 8
//   // &&
//   // Number(checkInInput.value) &&
//   // Number(checkOutInput.value)
//   // &&
//   // checkOutInput.value.slice(4, 8) >=
//   //   checkInInput.value.slice(4, 8) >=
//   //   time.getFullYear() &&
//   // checkOutInput.value.slice(2, 4) >=
//   //   checkInInput.value.slice(2, 4) >=
//   //   time.getMonth() + 1 &&
//   // checkOutInput.value.slice(0, 2) >=
//   //   checkInInput.value.slice(0, 2) >=
//   //   time.getDate()
// ) {
//   console.log("Salam");
// }

// End Search form
//
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

//--------------------------------------------------------------
//Slider
const photos = document.querySelector(
  ".page__right__header__photoDown"
).children;
const homePhoto = document.querySelector(
  ".page__right__header__photoUp__box"
).children;
const info = document.querySelector(".page__right__header__photoUp__info");
for (let photo of photos) {
  photo.addEventListener("click", function () {
    for (let photo of photos) {
      if (photo.children[0] !== this.children[0]) {
        // photo.children[0].style.filter = "opacity(65%)";
        photo.children[0].classList.remove("slide");
        photo.children[0].classList.add("slideHover");
      } else {
        photo.children[0].classList.remove("slideHover");
        photo.children[0].classList.add("slide");
      }
    }

    for (let img of homePhoto) {
      if (this.children[0].alt == img.alt) {
        img.style.display = "block";
        info.innerHTML = `${this.children[0].alt}`;
      } else {
        img.style.display = "none";
      }
    }
  });
}
function myFunction(event) {
  console.log();
}
//End Slider
//Modal Email Check
let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
document.querySelector(".modalBTN").addEventListener("click", function () {
  const modalInput = document.querySelector(".modalEmail");
  if (!Email.test(modalInput.value)) {
    document.querySelector(".checkEmailText").style.display = "block";
  } else {
  }
});

function deleteEmailError() {
  if (document.querySelector(".checkEmailText").style.display == "block") {
    document.querySelector(".checkEmailText").style.display = "none";
  }
}

//End Modal Check
