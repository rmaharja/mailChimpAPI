document.addEventListener("DOMContentLoaded", function(){
  console.log("Document is Ready Yo")

document.getElementById("add-email").addEventListener("click", subscribeEmail);

function subscribeEmail(e) {
  e.preventDefault();
  console.log("Subscribe email");
}



})//end of document ready