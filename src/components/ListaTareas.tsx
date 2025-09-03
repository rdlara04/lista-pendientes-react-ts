// Importamos el componente "Tarea", que se encarga de mostrar una sola tarea con su respectiva lógica
import { Tarea } from "./Tarea"

// Definimos el tipo de datos (props) que va a recibir este componente
// Esto ayuda a TypeScript a validar los tipos en tiempo de desarrollo
type ListaTareas = {
    // listaTareas: es un arreglo de strings, cada string representa una tarea escrita por el usuario
    listaTareas: string[]

    // borrarTarea: es una función que recibe como parámetro un índice (número)
    // y elimina la tarea que corresponda a esa posición en el array
    borrarTarea: (index:number) => void
}

// Componente ListaTareas
// Su propósito es recorrer el arreglo de tareas y renderizar un <Tarea /> por cada una
export const ListaTareas = ({listaTareas, borrarTarea}: ListaTareas) => {
  return (
    <>
      {/* Contenedor principal de la lista de tareas */}
      <div className='taskList'>

        {/* 
          Usamos .map() para recorrer el arreglo listaTareas.
          Por cada tarea encontrada, se ejecuta una función que:
          - Genera un componente <Tarea />
          - Le pasa las props necesarias
        */}
        {listaTareas.map((tarea, index) => (
            <Tarea 
              // key={index}: cada elemento en un .map necesita una clave única
              // Esto ayuda a React a identificar y actualizar solo el elemento que cambió
              key={index}

              // tarea={tarea}: le enviamos al componente hijo el texto de la tarea actual
              tarea={tarea}

              // borrarTarea: enviamos una función anónima que llama a la prop borrarTarea()
              // con el índice de la tarea actual. Así podemos borrar exactamente esa tarea.
              borrarTarea={() => borrarTarea(index)} 
            />
          ))
        }
      </div>
    </>
  )
}
