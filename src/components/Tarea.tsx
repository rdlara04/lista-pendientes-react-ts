// Definimos el tipo "Tarea" que describe las props que este componente recibirá
type Tarea = {
    // "tarea": es un string, representa el texto o nombre de la tarea
    tarea: string

    // "borrarTarea": es una función SIN parámetros
    // que se ejecutará cuando el usuario quiera eliminar esta tarea
    borrarTarea: () => void
}

// Definimos el componente funcional "Tarea"
// Recibe como parámetros las props "tarea" y "borrarTarea"
export const Tarea = ({tarea, borrarTarea}: Tarea) => {
  return (
    // Contenedor de una sola tarea
    <div className="task">
        {/* Mostramos en pantalla el texto de la tarea */}
        <span>{tarea}</span>

        {/* Botón que al hacer clic ejecuta la función borrarTarea */}
        <button onClick={borrarTarea}>
          Borrar tarea
        </button>
    </div>
  )
}
