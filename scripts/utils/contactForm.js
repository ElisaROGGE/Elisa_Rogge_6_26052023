const modal = document.getElementById("contact_modal");
function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function checkFirstname() {
    const regFirstName = /^[a-zA-Z]{2,}(?:['\s-][a-zA-Z]+)*$/;
    const firstname = document.getElementById('first');
    const error = document.getElementById('errorFirstname');
    const errorInput = error.previousElementSibling; 
    
    if (!regFirstName.test(firstname.value)) {
      error.style.display = 'block';
      error.textContent = 'Veuillez inscrire un prénom correct';
      errorInput.style.border = '2px solid red';
  
      firstname.focus();
      return false;
    } else {
      errorInput.style.border = "0.8px solid #ccc"
      error.style.display = 'none'
      return true;
    }
  }
  function checkLastName() {
    const regLastName = /^[a-zA-Z]{2,}(?:['\s-][a-zA-Z]+)*$/;
    const lastName = document.getElementById('last');
    const error = document.getElementById('errorLast');
    const errorInput = error.previousElementSibling; 
    
    if (!regLastName.test(lastName.value)) {
      error.style.display = 'block';
      error.textContent = 'Veuillez inscrire un nom de famille correct';
      errorInput.style.border = '2px solid red';
      lastName.focus();
      return false;
    } else {
      errorInput.style.border = "0.8px solid #ccc"
      error.style.display = 'none'
      return true;
    }
  }
  
  //Vérification de l'email
  function checkEmail() {
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const email = document.getElementById('email');
    const error = document.getElementById('errorEmail');
    const errorInput = error.previousElementSibling;
    
    if (!regEmail.test(email.value)) {
      error.style.display = 'block'
      error.textContent = 'Veuillez inscrire une adresse e-mail valide';
      errorInput.style.border = '2px solid red';
      email.focus();
      return false;
    } else {
      errorInput.style.border = "none"
      error.style.display = 'none'
      return true;
    }
  }

const formModal = document.getElementById('formModal')
formModal.addEventListener('submit', (e) => validate(e))

function validate(e){
e.preventDefault()

if(checkFirstname() && checkLastName() && checkEmail()){
    const firstname = document.getElementById('first').value;
    const lastname = document.getElementById('last').value;
    const email = document.getElementById('email').value;

    const contact = {
    firstname, 
    lastname,
    email
    }

    console.log(contact)
    console.log("Tout est ok")
    modal.style.display = "none";
    // modal.reset()
    return true;
    }else{
    console.log("Erreur")
    return false;
    }

}
