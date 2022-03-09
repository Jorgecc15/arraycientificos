urlsImg=["https://invdes.com.mx/wp-content/uploads/2020/09/10-09-20-einstein-800x445.jpg","https://invdes.com.mx/wp-content/uploads/2017/12/20-12-17-newton.jpg","https://twenergy.com/wp-content/uploads/2019/01/nikola-tesla.jpg","https://www.galileo.edu/iicta/files/2020/07/BANNER-PAGE-2-825x510.jpg"]
nombres= ["Albert Einstein","Isaac Newton","Nikola Tesla","Galileo Galilei" ]
html= ""
for(i=0; i<4; i++){
html= html+ `<div class="cientificos"> <img src="${urlsImg[i]}"/><p>${nombres[i]}</p></div>`
}
let contenedor =  document.querySelector("#contenedor")
    contenedor.innerHTML = html