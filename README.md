# 📝 - Intro component with sign up form

This is a simple HTML/CSS/JavaScript project that demonstrates basic form validation.

![Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg)


## 🚀 Features

- Validates form inputs on button click.
- Displays custom error messages if:
  - Fields are left empty.
  - The email format is invalid.
- Adds a visual indicator (e.g., red border) to invalid fields.
- Shows a success alert when all fields are valid.

## 💡 How It Works

- On clicking the **Submit** button:
  - Each input field is checked:
    - If empty → a message like "First Name cannot be empty" is shown.
    - If the email is invalid → a message like "Looks like this is not an email" is shown.
  - Errors are styled via a `.show-error` class.
  - If no errors are found → an alert is shown indicating success.

## ✅ Technologies Used

- HTML
- CSS
- JavaScript (vanilla)

## 📌 Notes

- Error messages are stored in the `data-name` attribute.
- Pseudo-elements (`::before`) are used to display error messages visually.


## Deploying my project

- [Live Site URL](https://intro-component-with-sign-up-form-nine-omega.vercel.app/).
