export const Usuario = ({ nombre, edad, curso, rol, estado}) => {

    return (
        <div>
            <h3>Nombre:{nombre}</h3>
            <p>Edad:{edad}</p>
            <p>Curso:{curso}</p>
            <p>Rol:{rol}</p>
            <p>Estado:{estado}</p>
        </div>
    )
}
