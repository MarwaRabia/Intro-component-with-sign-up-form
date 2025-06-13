// Select the submit button
const btn = document.querySelector("button");

// Select all input fields in the form
const inputs = document.querySelectorAll("input");

// Regular expression to validate an email address
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add click event listener to the button
btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form from submitting
  let isValid = true; // assume all fields are valid

  // First, remove all existing error styles/messages
  inputs.forEach((input) => {
    const parent = input.parentElement;
    parent.classList.remove("show-error"); // Remove the error class
  });

  // Validate each input field
  inputs.forEach((input) => {
    const parent = input.parentElement;

    // If input is empty, show required field error
    if (!input.value) {
      parent.classList.add("show-error"); // Add error class for styling
      parent.setAttribute(
        "data-name",
        `${input.getAttribute("placeholder")} can not be empty` // Set custom error message
      );
      isValid = false;
    }
    // If the input is an email and doesn't match regex, show invalid email error
    else if (input.type === "email" && !emailRegex.test(input.value.trim())) {
      parent.classList.add("show-error");
      parent.setAttribute("data-name", `Looks like this is not an email`);
      isValid = false;
    }
  });
  // If all fields are valid, submit the form
  if (isValid) {
    alert("Form submitted successfully!");
  }
});
