/* Start Modal */

var loginModal = document.getElementById('login-modal');
var signupModal = document.getElementById('signup-modal');

var password = document.getElementById('password');
var password2 = document.getElementById('password2');

var signupBtn = document.getElementById('signup-btn');

function validate() {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('password2').value;
  if (password != confirmPassword) {
    alert('Passwords do not match.');
    return false;
  }
  return true;
}

var btn = document.getElementById('login');

var span = document.getElementById('close');

function loginHandler() {
  loginModal.style.display = 'block';
  signupModal.style.display = 'none';
}

function closeLoginModal() {
  loginModal.style.display = 'none';
}

function closeSignupModal() {
  signupModal.style.display = 'none';
}

function signupHandler() {
  signupModal.style.display = 'block';
  loginModal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == loginModal || event.target == signupModal) {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  }
};

/* End Modal */

/* Start Menu */

const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.remove('open');
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu')) {
    menu.classList.remove('open');
  }
});

/* End Menu */
