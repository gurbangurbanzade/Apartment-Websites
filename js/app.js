// Search form
const searchBTN = document.querySelector(".searchBTN");
const form = document.querySelector(".form");
const checkText = `
                <span class="checkText">This field is required</span>
                `;
searchBTN.addEventListener("click", function salamla(e) {
  e.preventDefault();
  //   console.log(form.children);
  for (let input of form.children) {
    // console.log(input.lastElementChild.tagName);

    // console.log(input.children[1]);
    if (
      input.lastElementChild.tagName == "INPUT" &&
      input.lastElementChild.value == ""
    ) {
      input.innerHTML += checkText;
      console.log("salam");
    }
  }
});

// End Search form
