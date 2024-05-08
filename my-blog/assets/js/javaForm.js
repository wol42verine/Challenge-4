document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault(); //stops submission
    //getting form data
    const formData = new FormData(this);

    //converts form data to JSON
    const jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    //Create array for formData
    //const jsonDataArray=[jsonData];

    //New code for saving data as an array
    const existingFormData =JSON.parse(localStorage.getItem('formDataArray')) || [];

    existingFormData.push(jsonData);

    //saves array under the key 'formData'
    localStorage.setItem('formDataArray', JSON.stringify(existingFormData));
    //Should direct user to blog.html, Error
    window.location.href = "blog.html";
});

//Dark Mode toggle
const darkModetoggle = document.getElementById("dark-mode-toggle");

darkModetoggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
});