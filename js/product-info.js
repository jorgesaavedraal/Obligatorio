var currentCategoriesArray = [];
var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        if (i==0){
            htmlContentToAppend += ` 
            <div  align ="center" class="carousel-item active"> <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
            
            `
        }else{
        htmlContentToAppend += `
        
        <div align ="center" class="carousel-item">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
            
          
        `
    }
   i++;
    document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            
            product = resultObj.data;
           

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productsoldCountHTML = document.getElementById("soldCount");
            let productProductoHTML = document.getElementById("producto");
            

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productsoldCountHTML.innerHTML = product.soldCount;
            productProductoHTML.innerHTML = product.category;
          
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        
           
            
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok"){
            let products = resultObj.data;
           
            let html = '';

            product.relatedProducts.forEach(function(productIndex) {
                let productosa = products[productIndex];
                html += `
                <div class="card" style="width: 18rem;">
                   <img src= "${productosa.imgSrc}" class="card-img-top" alt="...">
                   <div class= "card-body">
                      <h5 class="card-title">${productosa.name} </h5>
                      <p class="card-text">${productosa.description} </p>
                      <a href="" class= "btn btn-link">Ver</a> 
                    </div> 
                </div>
                `

                });
                        document.getElementById("ProductRel").innerHTML = html;
                }
            });   

        } 
        
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {let comentarios = resultObj.data;
            let html = '';
            for(let i = 0; i < comentarios.length; i++){
                let comentariosArray= comentarios[i];
                var valorE=	"";
                for (  let i=0 ; i < comentariosArray.score; i++) 
                {
                 valorE += '<i class="fas fa-star"></i>';
                }

                html += `
                <div class="comentario-box">
                <h5>${comentariosArray.user} -  ${comentariosArray.dateTime} -<label id=estrellaComment> ${valorE} </label> </h5> 
                <p>${comentariosArray.description}</p>
                
                </div> <br> 
                `
           };
            
               document.getElementById("comentarios").innerHTML = html;
      }
    });  
   

});        

var estrella = {}
boton.addEventListener('click', () => {
    let comentario = document.getElementById("comentario").value;
    let boton = document.getElementById("boton");
    let comments = document.getElementById("comentar");
    let nombre = localStorage.getItem("usuario");
   
    
    var valorE=	"";
    for (  let i=0 ; i < estrella.value; i++) 
    {
     valorE += '<i class="fas fa-star"></i>';
}

comments.innerHTML = '<div class="comentario-box">'+ ' <h5> ' + nombre + ' -<label id=estrellaComment>' + valorE + '</label>'+'</h5>' +'<p>' + comentario + '</p>' +'</div>';
});
 


