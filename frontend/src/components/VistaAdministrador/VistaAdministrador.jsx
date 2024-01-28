import React, { useState, useEffect } from "react";

const VistaAdministrador = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/users")
      .then(response => response.json())
      .then(data => {
        console.log("Datos de usuarios:", data);
        const usuariosArray = Array.isArray(data.mensaje) ? data.mensaje : Object.values(data.mensaje);
        setUsuarios(usuariosArray);
      })
      .catch(error => console.error("Error al obtener usuarios:", error));
  }, []);

  const handleEliminarUsuario = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Usuario eliminado con éxito");
        setUsuarios(prevUsuarios => prevUsuarios.filter(usuario => usuario._id !== id));
        setUsuarioSeleccionado(null);
      } else {
        throw new Error(`Error al eliminar usuario: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <>
      <h2>Administrar Usuarios</h2>
      <ul>
        {usuarios.map(usuario => (
          <li className="p-3" key={usuario._id}>
            <span>{usuario.first_name} {usuario.last_name}</span>
            <button className="btn btn-warning" onClick={() => setUsuarioSeleccionado(usuario)}>Ver Detalles</button>
            <button className="btn btn-danger" onClick={() => handleEliminarUsuario(usuario._id)}>Eliminar Usuario</button>
          </li>
        ))}
      </ul>

      {usuarioSeleccionado && (
        <>
          <h3>Detalles del Usuario</h3>
          <p>ID: {usuarioSeleccionado._id}</p>
          {/* Otros detalles del usuario */}
        </>
      )}
    </>
  );
};

export default VistaAdministrador;
