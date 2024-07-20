var form = document.getElementById('form');
alert("helloworld");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var content = document.getElementById('content').value;
    alert(comment);
    var postId = e.target.getAttribute("data-postId")




    fetch("/comment/" + postId + "/new", {
        method: 'POST',
        body: JSON.stringify({
            content: content
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            location.replace("/profile")
            // Handle the response data here
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
});