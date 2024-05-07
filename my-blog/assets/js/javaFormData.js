document.addEventListener("DOMContentLoaded", function(){
    //should get data from local storage
    const formData = JSON.parse(localStorage.getItem('formData'));

    //should display form data
    const formDataDiv = document.getElementById('formData');
    formDataDiv.innerHTML = `
    <div><strong><Username:</strong>${formData.username}</div>
    <div><strong><Title:</strong>${formData.title}</div>
    <div><strong><Content:</strong>${formData.content}</div>
    `;
});

//link to Back button
const backButton =document.getElementById("back-button");

//event listener for Back button
backButton.addEventListener("click",function(){
    window.location.href="index.html";
});

//Dark Mode toggle
const darkModetoggle = document.getElementById("dark-mode-toggle");

darkModetoggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
});