var form = document.getElementById('form');
var deleteBtn = $('.delete');

form.addEventListener('submit', function (e){
   e.preventDefault();
   var postTitle = document.getElementById('postTitle').value;
var description = document.getElementById('postContent').value;
   alert('Post Completed');
   
   fetch("/post/new", {
    method: 'POST',
    body: JSON.stringify({
        postTitle: postTitle,
        description: description
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

deleteBtn.on('click', function (e){
   var postId = e.target.id
    fetch(`/post/${postId}`, {
     method: 'DELETE',
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

