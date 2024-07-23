let btnBack = document.querySelector(".btn-back") as HTMLButtonElement;
let  btnNext = document.querySelector(".btn-next")
let images = document.querySelectorAll("img");

btnBack.addEventListener("click" , () => {
    let ActiveImg : string;
    images.forEach((img) => {
        console.log(img.classList)
    })
})
