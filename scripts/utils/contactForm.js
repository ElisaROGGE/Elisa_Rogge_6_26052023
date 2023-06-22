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

const formModal = document.getElementById('formModal')
formModal.addEventListener('submit', (e) => validate(e))

  function validate(e){
    e.preventDefault()
  
    if(checkFirstname()){
      const firstname = document.getElementById('first').value;
  
      const contact = {
        firstname
      }
  
      console.log(contact)
      console.log("Tout est ok")
      modal.style.display = "none";
      modal.reset()
      return true;
      }else{
        console.log("Erreur")
        return false;
      }
  
  }
