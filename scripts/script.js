var getButton = document.getElementById("show-btn");
var imgButton = document.querySelector(".img-btn");
var shareContent = document.querySelector(".social-share");

getButton.addEventListener('click', function(){
    // var computedStyle = window.getComputedStyle(shareContent);
    if(shareContent.style.display === 'none' || shareContent.style.display === ''){
        shareContent.style.display = 'flex';
        getButton.classList.add("show");
        imgButton.classList.add("click");
    } else{
        shareContent.style.display = 'none';
        getButton.classList.remove("show");
        imgButton.classList.remove("click");
    }
})