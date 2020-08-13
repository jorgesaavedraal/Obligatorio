
 window.onload = function () {

        
        
      document.loginjap.addEventListener('submit', validarFormulario);
        
        }
        
         
        
        function validarFormulario(evObject) {
        
        evObject.preventDefault();
        
        var todoCorrecto = true;
        
        var formulario = document.loginjap;
        
        for (var i=0; i<formulario.length; i++) {
        
                        if(formulario[i].value =='') {
        
                                       if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
        
                                        alert (' Introduce usuario y contraseña ');
        
                                    todoCorrecto=false;
                                 }
        
                      }
        
                      }
        
      if (todoCorrecto ==true) {formulario.submit();}
        
       }

       
        
        