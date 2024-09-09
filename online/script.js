let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
};

window.onscroll = () =>{
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

var swiper = new swiper(".reviews-slider", {
      loop: true,
      spaceBetween: 10,
      autoHeight: true,
      grabCursor: true,
      breakpoints: {
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.75": {
              slidesPerView: 2,
            },
            "@1.00": {
              slidesPerView: 3,
            },
            "@1.50": {
              slidesPerView: 4,
            },
          },

});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItems = 3;

loadMoreBtn.onclick = () =>{
      let boxes = [...document.querySelector('.packages .box-container .box')];
      for (var i = currentItems; i < currentItems + 3; i++) {
            boxes[i].style.display = 'inline-block';
      };
      currentItems += 3;
      if(currentItems >= boxes.length){
            loadMoreBtn.style.display = 'none';
      }
}

function validateForm() {
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var address = document.getElementById("address").value;
      var nic = document.getElementById("nic").value;

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var valid = true;

      clearErrors();

      if (email == "") {
          document.getElementById("emailError").innerHTML = "Email is required.";
          valid = false;
      } else if (!emailRegex.test(email)) {
          document.getElementById("emailError").innerHTML = "Invalid email format.";
          valid = false;
      }
      if (phone == "") {
          document.getElementById("phoneError").innerHTML = "Phone number is required.";
          valid = false;
      } else if (phone.length != 10) {
          document.getElementById("phoneError").innerHTML = "Phone number must be 10 digits.";
          valid = false;
      }
      if (address == "") {
          document.getElementById("addressError").innerHTML = "Address is required.";
          valid = false;
      }
      if (nic == "") {
          document.getElementById("nicError").innerHTML = "NIC is required.";
          valid = false;
      } else if (nic.length != 10 && nic.length != 12) {
          document.getElementById("nicError").innerHTML = "NIC must be 10 or 12 digits.";
          valid = false;
      }

      return valid;
  }

  function clearErrors() {
      document.getElementById("emailError").innerHTML = "";
      document.getElementById("phoneError").innerHTML = "";
      document.getElementById("addressError").innerHTML = "";
      document.getElementById("nicError").innerHTML = "";
  }
