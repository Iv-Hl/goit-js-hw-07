document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert("All form fields must be filled in");
      return;
    }

    const formBase = {
      email: email,
      password: password,
    };

    console.log(formBase); 

    form.reset(); 
  });
