let indiceEditar = null; //definimos una variable global para utilizarlo como bandera

document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('usuario')) {
      alert('Debe loguearse');
      window.location.href = 'js/login.html';
      return;
    }
  
    const salir = document.getElementById('logout');
    if (salir) {
      salir.addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = 'js/login.html';
      });
    }
  
    const form = document.getElementById('formSalon');
  
    
    form.addEventListener('submit', function (event) {
      
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const direccion = document.getElementById('direccion').value;
      const descripcion = document.getElementById('descripcion').value;
  
      const salon = { nombre, direccion, descripcion };
  
      const salonesGuardados = JSON.parse(localStorage.getItem('salones')) || [];
      
      if (indiceEditar !== null) {
        // Modo edición
        salonesGuardados[indiceEditar] = salon;
        alert(`Salón editado:\n\nNombre: ${nombre}\nDirección: ${direccion}\nDescripción: ${descripcion}`);
        indiceEditar = null; // Reset para volver a modo alta
      } else {
        // Modo alta
        salonesGuardados.push(salon);
        alert(`Salón nuevo:\n\nNombre: ${nombre}\nDirección: ${direccion}\nDescripción: ${descripcion}`);
      }
  
      localStorage.setItem('salones', JSON.stringify(salonesGuardados));
  
      this.reset();
      mostrarSalones();
    });
  
    mostrarSalones();
  });
  function mostrarSalones() {
    const tablaBody = document.querySelector('#tablaSalones tbody');
    tablaBody.innerHTML = ''; // Limpiar contenido previo
    const salones = JSON.parse(localStorage.getItem('salones')) || [];
  
    salones.forEach((salon, index) => {
      const fila = document.createElement('tr'); 
      fila.innerHTML = `
        <td>${salon.nombre}</td>
        <td>${salon.direccion}</td>
        <td>${salon.descripcion}</td>
        <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editarSalon(${index})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="eliminarSalon(${index})">Eliminar</button>
        </td>
      `;
      
      tablaBody.appendChild(fila);
    });
    
  }
  