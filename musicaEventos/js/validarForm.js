function validarForm(){
    //trim() elimina espacios en blanco

    var nombre = document.getElementById("nombre").value.trim()
    var apellido = document.getElementById("apellido").value.trim()
    var tel = document.getElementById("tel").value.trim()
    var email = document.getElementById("email").value.trim()
    var msj = document.getElementById("msj").value.trim()
    
        if(nombre ==="" || apellido==="" || tel==="" || email==="" || msj===""){
            alert("Debe completar todos los campos")
            return false
        }
        var nombreTest = /^[a-zA-Z]+$/.test(nombre)
        var apellidoTest = /^[a-zA-Z]+$/.test(apellido)

        if(!nombreTest || !apellidoTest){
            alert("Debe completar con letras el nombre y apellido")
        }
        if(isNaN(tel)){
            alert("Debe completar sólo con números el tel")
        }

} 
