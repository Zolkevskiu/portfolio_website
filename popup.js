document.querySelectorAll(".image-container img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

window.onclick = function(event) {
    if(event.target == document.querySelector(".popup-image")) {
        document.querySelector(".popup-image").style.display = "none";
    }
  }

document.querySelector(".popup-image span").onclick = () =>{
    document.querySelector(".popup-image").style.display = "none";
}