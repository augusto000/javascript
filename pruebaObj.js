const Objeto={
    productos:"zapatos",
    cantidad:"4",
    sucursal:[
        {codSucursal:"12ad",
         nombreSucursal:"Lomas",
         Domicilio:"Av Belgrano 334",
         email:"lomas32@gmail.com",
         empleados:33,         
       },
       {codSucursal:"13aw",
       nombreSucursal:"Tigre",
       Domicilio:"Av Cazón 2831",
       email:"tirgre89@gmail.com", 
       empleados:6,        
       },
    ],
    aumentoEmpleado: function(sucursal){
        const indexSucursal = this.sucursal.findIndex(
            (sucur)=> sucur.codSucursal == sucursal
        );
        if (indexSucursal>-1){
             const file=document.querySelector('#fila')
             console.log("Empleados antes: ",this.sucursal[indexSucursal].empleados++);
             console.log("Empleados actuales :",this.sucursal[indexSucursal].empleados);
             renderSucursal(Objeto.sucursal);
        }
        else {
            console.log("not found!!");
        }
    }
};

function renderSucursal(sucursal){
    const html_ = sucursal.map((sucurs)=>`<tr>
                             <td>${sucurs.codSucursal}</td>
                             <td>${sucurs.nombreSucursal}</td>
                             <td>${sucurs.Domicilio}</td>
                             <td>${sucurs.email}</td>
                             <td>${sucurs.empleados}</td>
                             </tr>`
    );
    //..this line get the .innerHTML error when trying to load the data in 'fila-item': Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
  document.getElementById('fila-item').innerHTML=html_.join("");
}
    const subBtn = document.querySelector('#btn');
    subBtn.addEventListener("click", function(){
        const inputSucursal = document.querySelector('#inputSucursal').value;
        Objeto.aumentoEmpleado(inputSucursal);
    });    








