const loginCard = document.getElementById("home-card");
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
console.log(registerButton);
registerButton.addEventListener("click", openRegForm);

function openRegForm() {
  loginCard.innerHTML = " ";
  // Set up form with fields
  const fields = [
    {
      tag: "label",
      attribute: {
        for: "username",
        id: "username:",
        class: "label",
      },
    },
    {
      tag: "input",
      attribute: {
        type: "text",
        name: "username",
        placeholder: "Enter a username",
        class: "input-box",
      },
    },
    {
      tag: "label",
      attribute: {
        for: "email",
        id: "email:",
        class: "label",
      },
    },
    {
      tag: "input",
      attribute: {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        class: "input-box",
      },
    },
    {
      tag: "label",
      attribute: {
        for: "password",
        id: "password:",
        class: "label",
      },
    },
    {
      tag: "input",
      attribute: {
        type: "password",
        name: "password",
        placeholder: "Enter a password",
        class: "input-box",
      },
    },
    {
      tag: "label",
      attribute: {
        for: "passwordConfirmation",
        id: "password!confirmation:",
        class: "label",
      },
    },
    {
      tag: "input",
      attribute: {
        type: "password",
        name: "passwordConfirmation",
        placeholder: "Enter your password again",
        class: "input-box",
      },
    },
    {
      tag: "input",
      attribute: {
        type: "submit",
        name: "submit",
        value: "Create User",
        class: "submit-button",
      },
    },
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    // Object.entries method returns an array of a givne object's own enumerable string-keyed property [key, value pairs]
    // [[type, text], [name, username], [placeholder, Username]]
    // [[a, v], [a, v], [a, v], [a, v]]
    Object.entries(f.attribute).forEach(([a, v]) => {
      // So here we are looping over each [key,value] pair setting an attribute and value
      // field.setAttribute('type', 'text')
      field.setAttribute(a, v);

      // getting our labels by using id of each label

      let words = field.id.split("!");
      // Cap each word
      if (field.id) {
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
      }
      // set textcontent of label to the id we modified
      const label = words.join(" ");
      if (field.id) {
        field.textContent = label;
      }
      form.id = "registerForm";
      form.appendChild(field);
    });
  });
  //   form.addEventListener('submit', registerUser)
  loginCard.appendChild(form);
}
