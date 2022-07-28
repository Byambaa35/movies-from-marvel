// // const search = document.querySelector(".searchPart input"),
// //       images = document.querySelectorAll('.image-cart')

// // search.addEventListener("keyup", e =>{
// //     if(e.key == "Enter"){
// //         let searcValue = search.value,
// //             value = searcValue.toLowerCase();
// //             images.forEach(image =>{
// //                 if(value === image.dataset.name){ //matching value with getting attribute of images
// //                     return image.style.display = "";
// //                 }
// //                 image.style.display = "none";
// //          });
// //     }
// // });

// // search.addEventListener('input', () => {
// //     let searcValue = search.value,
// //           value = searcValue.toLowerCase();
// //           images.forEach(image =>{
// //               if(searcValue.test(image.dataset.name)){
// //                     image.style.display = '';
// //               }
// //               image.style.display = 'none';
// //           })
          
// // })

// // search.addEventListener("keyup", () =>{
// //     if(search.value != "") return;
// //     images.forEach(image =>{
// //         image.style.display = "block";
// //     })
// // })

function searchUp() {
    var input, filter, images, image, h4, i, txtValue;
    input = document.getElementById("searchMovie");
    filter = input.value.toUpperCase();
    images = document.getElementById('images');
    image = images.getElementsByClassName("image-cart");
    for (i = 0; i < image.length; i++) {
        h4 = image[i].getElementsByTagName("h4")[0];
        txtValue = h4.textContent || h4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            image[i].style.display = "";
            images.style.justifyContent = 'center';
        } else {
            image[i].style.display = "none";
        }
        if(filter == "") {
            images.style.removeProperty('justify-content')
        }
    }
}

const myVideo = document.getElementById('myVideo')
const playPauseBtn = document.querySelector('.fa-circle-stop')

function playPause() {
    if(myVideo.paused) {
        myVideo.play();
        playPauseBtn.classList.replace('fa-circle-play', 'fa-circle-stop')
    } else {
        myVideo.pause();
        playPauseBtn.classList.replace('fa-circle-stop', 'fa-circle-play')
    }
}

const videoSound = document.querySelector('.videoSound');
const audioChange = videoSound.querySelector('.material-symbols-outlined')

myVideo.muted = true;
function soundChange() {
    if(myVideo.muted === true){
        myVideo.muted = false;
        audioChange.innerText = 'volume_off';
    } else {
        myVideo.muted = true;
        audioChange.innerText = 'volume_up';
    }
}


myVideo.addEventListener('pause', function() {
    playPauseBtn.classList.replace('fa-circle-stop', 'fa-circle-play')

})

const countImages = document.querySelector('.images')
const countImageCart = parseInt(countImages.children.length)

const inputPlaceholder = document.querySelector('.searchMovie')

inputPlaceholder.placeholder = 'Total ' + countImageCart + ' Marvel studio movies, search by name...';


const eyeSlash = document.querySelector('.material-symbols-outlined')
const containers = document.querySelector('.container')

function hideAndShow() {
   if(eyeSlash.innerText == 'visibility'){
       eyeSlash.innerText = 'visibility_off'
       containers.style.visibility = 'visible'
   } else {
       eyeSlash.innerText = 'visibility'
       containers.style.visibility = 'hidden'
   }

}

function exitDetail(x) {
    for(i=0; i<x; i++) {
        movieReveal[i].style.display = 'none'
    }
}

const movieReveal = document.querySelectorAll('.movie')

function expandView(x){
    // for(i=0; i<x; i++) {
    //     movieReveal[i].style.display = 'grid'
    // }
    movieReveal[x-1].style.display = 'grid';
}

