const btnQR = document.querySelector(".btnQR")
const imgQR = document.querySelector(".imgQR")
const error  = document.querySelector(".Error")
const inputText  = document.querySelector(".inputText")

btnQR.addEventListener("click", () => {
    if(inputText.value.length == 0) {
            console.log("eror")
            error.textContent = "¡Error, ingresa al menos un carácter!"
            imgQR.style.display = "none"
    }else {
        imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${inputText.value}`   
        imgQR.style.display = "block"
        error.textContent = ""
    }
})