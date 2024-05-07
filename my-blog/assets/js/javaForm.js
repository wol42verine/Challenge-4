//Todo Can't access formData error
document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault(); //stops submission
    //getting form data
    const formData = new FormData(this);

    //converts form data to JSON
    const jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    localStorage.setItem('formData', JSON.stringify(jsonData));
    //Should direct user to blog.html, Error
    window.location.href = "blog.html";
});

//Dark Mode toggle
const darkModetoggle = document.getElementById("dark-mode-toggle");

darkModetoggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
});