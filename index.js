var aplicacion= new function(){

    this.empleados=document.getElementById("empleados")

    this.read=function(){
        var datos="";
        datos="<tr><td>Id</td><td>Oscar</td><td>oscar@gmail.com</td><td>Editar | Borrar</td></tr>";

        return this.empleados.innerHTML=datos;
    }
        
}

aplicacion.read();