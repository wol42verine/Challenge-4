//Linked to blog.html
document.addEventListener("DOMContentLoaded", function(){
    //should get data from local storage
    //change to array
    const formDataArray = JSON.parse(localStorage.getItem('formDataArray'));

    //should display form data
    const formDataDiv = document.getElementById('formData');

    //test to see if data is stored properly
    // document.addEventListener("DOMContentLoaded",function(){
    //     const formDataString=localStorage.getItem('formDataArray');
    //     console.log(formDataStraing);
//});

if (formDataArray) {
    formDataArray.forEach(formData => {
        const div =document.createElement('div');
        div.innerHTML = `
            <div><strong><Username:</strong>${formData.name}</div>
            <div><strong><Title:</strong>${formData.title}</div>
            <div><strong><Content:</strong>${formData.content}</div>
            <hr>
        `;
        formDataDiv.appendChild(div);
    });
}
    
    

//     formDataDiv.innerHTML = `
//     <div><strong><Username:</strong>${formData.name}</div>
//     <div><strong><Title:</strong>${formData.title}</div>
//     <div><strong><Content:</strong>${formData.content}</div>
//     `; 
// });

//link to Back button
const backButton = document.getElementById("back-button");

//event listener for Back button
backButton.addEventListener("click",function(){
    window.location.href="index.html";
});

//Dark Mode toggle
const darkModetoggle = document.getElementById("dark-mode-toggle");

darkModetoggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
});
});