const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalText = document.getElementById("modal-text");
const input = document.getElementById("name");
let btn = document.getElementById("testBTN");
let form = document.getElementById("my-form");
let nameInput = form.elements.name;

btn.addEventListener("click",()=>{
    modal.style.display="block";
    modalText = addGitHubProfle(nameInput.value); // yesh po bug
});


function addGitHubProfle(event){
    modalText.innerHTML = `<img src="https://github.com/${event}.png" style="max-width:300px; max-height:300px">`;
}
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