const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
let modalText = document.getElementById("modal-text");
const input = document.getElementById("name");
const btn = document.getElementById("testBTN");
const form = document.getElementById("my-form");
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;



$(window).ready(function() {
    $("#my-form").on("keypress", function (event) {
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });
});

btn.addEventListener("click",()=>{
    function createProfile(name, email, age){
        if(name.length < 2){
            alert("Name must be at least 2 characters long, Profile not created");
            form.reset();
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(email)){
            alert("Email is not valid, Profile not created");
            form.reset();
            return false;
        }
        const ageRegex = /^[0-9]{1,3}$/;
        if(!ageRegex.test(age)){
            alert("Age is not valid, Profile not created");
            form.reset();
            return false;
        }
        return {
            name,
            email,
            age
        }
    }
    const profile = createProfile(nameInput.value, emailInput.value, ageInput.value);
    if(!profile){
        return;
    }

    function addGitHubProfle(userName){
        modalText.innerHTML = `<p>Name: ${profile.name}</p><p>Email: ${profile.email}</p><p>Age: ${profile.age}</p>`;
        modalText.innerHTML += `<img src="https://github.com/${userName}.png" style="max-width:300px; max-height:300px" alt='Profile picture of ${userName}'>`;
    }
    modal.style.display="block";

    const profileImg = addGitHubProfle(nameInput.value);
    form.reset();
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }