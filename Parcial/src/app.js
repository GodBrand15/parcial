$(document).ready(function(){



    $('#Listar').on('click', function(){
         console.log(Listar)
let tabla= document.querySelector('#tabla')
tabla.innerHTML=''
$.ajax({

    url:"http://localhost:8080/ListarProductos",
    type: "GET",
    datatype: "JSON",
    success: function(Listar){
        console.log(Listar)
        tabla.innerHTML='';
        for(i=0;i< Listar.length;i++ ){
            tabla.innerHTML += '<tr><td>'+ Listar[i].referencia +
                    '</td><td>' + Listar[i].nombre +
                    '</td><td>' + Listar[i].categoria +
                    '</td><td>' + Listar[i].preciounitario +
                    '</td><td>' + Listar[i].cantidad +
                    '</td><td>' + Listar[i].total +
                    '</td></tr>';
        }
        $('#resultadoconsola').html(JSON.stringify(Listar))
    
    }
    });
});


$('#Buscar').on('click', function() {
let referencia = $('#idce').val();
$.ajax({
    url: "http://localhost:8080/BuscarProducto/" + referencia,
    type: "GET",
    datatype: "JSON",
    success: function(Buscar) {
        $('#idce').val("");
        if (Buscar) {
            alert("Producto " +
                Buscar.nombre);
        } else {
            alert("No se encontro el Producto");
        }
    }
});

});

// funcion añadir estudiante
$('#Añadir').on('click',function(){

let datos={
   referencia:parseInt($('#referencia').val()), 
   nombre:$('#nombre').val(),
   categoria:$('#categoria').val(),
   preciounitario:parseInt($('#preciounitario').val()),  
   cantidad:parseInt($('#cantidad').val())
}
let DatosEnviados = JSON.stringify(datos);
$.ajax({
   url: "http://localhost:8080/AgregarProducto",
   type: "POST",
   data: DatosEnviados,
   contentType: "application/JSON",
   datatype: 'JSON',
   success: function(respuesta) {
    $('#Restart')[0].reset();
      
         alert('El Producto se ha añadido correctamente.');
         console.log(respuesta)
         $('#exampleModal').modal('hide');

        
     
   }, error:function(xhr, textStatus, errorThrown){

   }
   
});

});

$('#Eliminarid').on('click', function() {
let referencia = $('#idce').val();
$.ajax({
    url: "http://localhost:8080/EliminarEstudiante/" + referencia,
    type: "DELETE",
    dataType: "JSON",
    success: function(respuesta) {
        $('#idce').val("");
        
    },
    error: function(xhr) {
        if (xhr.status === 404) {
            alert("No se encontró el Producto. " + referencia);
        }
    }
});
});

$('#Cargar').on('click', function() {
let referencia = $('#idce').val();
$.ajax({
    url: "http://localhost:8080/BuscarProducto/" + referencia,
    type: "GET",
    datatype: "JSON",
    success: function(Buscar) {
        $('#idce').val("");
        $('#nombre').val(Buscar.nombre);
        $('#referencia').prop('disabled',true);
        $('#referencia').val(Buscar.referencia);
        $('#categoria').val(Buscar.categoria);
        $('#preciounitario').val(Buscar.preciounitario);
        $('#cantidad').val(Buscar.cantidad);
        $('#total').val(Buscar.total);
    }
});

});

$('#Actualizar').on('click', function(){
let datos={
   referencia:parseInt($('#referencia').val()), 
   nombre:$('#nombre').val(),
   categoria:$('#categoria').val(),
   preciounitario:parseInt($('#preciounitario').val()),  
   cantidad:parseInt($('#cantidad').val())
}
let DatosEnviados = JSON.stringify(datos);
$.ajax({
   url: "http://localhost:8080/ActualizarProducto",
   type: "PUT",
   data: DatosEnviados,
   contentType: "application/JSON",
   datatype: 'JSON',
   success: function(respuesta) {
    $('#Restart')[0].reset();
    $('#Cedula').prop('disabled',false);
         alert('El Producto se ha actualizado correctamente.');
         console.log(respuesta)
         

   }
})
});

$('#TotalMayor').on('click', function(){
    let tabla= document.querySelector('#tabla')
    tabla.innerHTML=''
$.ajax({
    url: "http://localhost:8080/TotalMayor",
    type: "GET",
    datatype: "JSON",
    success: function(Listar){
        console.log(Listar)
        tabla.innerHTML='';
       
            tabla.innerHTML += '<tr><td>'+ Listar.referencia +
                    '</td><td>' + Listar.nombre +
                    '</td><td>' + Listar.categoria +
                    '</td><td>' + Listar.preciounitario +
                    '</td><td>' + Listar.cantidad +
                    '</td><td>' + Listar.total +
                    '</td></tr>';
        
        $('#resultadoconsola').html(JSON.stringify(Listar))
    
    }
    });
})






















})
