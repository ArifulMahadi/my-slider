const images = [
    "images/img-1.jpeg",
    "images/img-2.jpeg",
    "images/img-3.jpeg",
    "images/img-4.jpeg",
    "images/img-5.jpeg",
    "images/img-6.jpeg"
]
let imgIndex = 0;
const imgElement = document.getElementById("slider-img")

setInterval(() => {
    if(imgIndex >= 5){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex ++;
},3000)