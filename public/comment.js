var form = document.getElementById('form');

form.addEventListener('submit', function (e){
   e.preventDefault();
var commentContent = document.getElementById('commentContent').value;
   alert(commentContent);
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   fetch("/comment/new", {
    method: 'POST',
    body: JSON.stringify({
        commentContent: commentContent
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
   })
   .then(function(response){
       return response.json();
   })
   .then(function(data){
       console.log(data);
       location.replace("/profile")
       // Handle the response data here
   })
   .catch(function(error){
       console.error('Error:', error);
   });
});