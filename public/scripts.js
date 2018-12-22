document.addEventListener("DOMContentLoaded", function(){
  console.log("Document is Ready Yo")

  document.getElementById("user-posts").addEventListener("submit", userPost);

  function userPost(e) {
   e.preventDefault();

   let postEmail = document.getElementById("email-input").value;
   console.log(postEmail);

   $.ajax({
     url: "/",
     type: "POST",
     data: {
       email: postEmail
     },
     success: function(res){
       alert(res);
     }
   })



  }
})//end of document readyn