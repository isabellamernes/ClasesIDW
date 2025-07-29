function eliminarSalon(index) {
    const salones = JSON.parse(localStorage.getItem('salones')) || [];
    if (confirm(`¿Estás seguro de eliminar el salón "${salones[index].nombre}"?`)) {
      salones.splice(index, 1);
      localStorage.setItem('salones', JSON.stringify(salones));

      mostrarSalones(); 
    }
  }
  
  function editarSalon(index) {
      const salones = JSON.parse(localStorage.getItem('salones')) || [];
      const salon = salones[index];
    
      document.getElementById('nombre').value = salon.nombre;
      document.getElementById('direccion').value = salon.direccion;
      document.getElementById('descripcion').value = salon.descripcion;
    
      indiceEditar = index; // se guarda el indice para persistir la posiscion, ya que no estamos trabajando con id
    }
/*DEJO EL EJEMPLO QUE VIMOS EN CLASE*/
/*let frutas = ['manzana', 'banana', 'naranja'];
frutas.splice(1, 1); // Elimina 1 elemento desde el indice 1
console.log(frutas); // ['manzana', 'naranja']
// 
// let numeros = [1, 2, 5];
numeros.splice(2, 0, 3, 4); // Inserta 3 y 4 en el indice 2, no elimina nada
console.log(numeros); // [1, 2, 3, 4, 5]*/