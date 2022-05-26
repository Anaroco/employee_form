let aplicacion= new function(){

    this.nombre= document.getElementById("nombre");
    this.correo= document.getElementById("correo");


    this.empleados= document.getElementById("empleados")

    this.Read=function(){
        let datos="";
        datos="<tr><td>Id</td><td>Oscar</td><td>oscar@gmail.com</td><td>Editar | Borrar</td></tr>";

        return this.empleados.innerHTML=datos;
    };

     this.Add=function(){

        console.log (nombre.value);
        console.log (correo.value);

     };

        
}

aplicacion.Read();