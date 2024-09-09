document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault();

      const emailInput = document.getElementById('email-input').value;
      const passwordInput = document.getElementById('password-input').value;
      const errorMessage = document.getElementById('error-message');
      errorMessage.innerHTML = "";

      
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(emailInput)) {
          errorMessage.innerHTML += "Invalid email format. <br>";
      }


      if (passwordInput.length > 8) {
          errorMessage.innerHTML += "Password must be less than or equal to 8 characters. <br>";
      }


      if (errorMessage.innerHTML === "") {
          alert('Form  Unsuccessfully!');
          
      }
  });
