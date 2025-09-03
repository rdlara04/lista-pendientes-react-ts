import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  // Estado para almacenar lo que el usuario escribe en el input
  const [newTask, setNewTask] = useState<string>("")

  // Estado que guarda la lista completa de tareas
  const [listaTareas, setlistaTareas] = useState<string[]>([])

  // Función que agrega una nueva tarea a la lista
  const handleAddTask = () => {
    // Si el input está vacío (solo espacios), no hace nada
    if(newTask.trim() === '') return
    
    // Actualiza el estado agregando la nueva tarea al final del array
    setlistaTareas(tareasAnteriores => [...tareasAnteriores, newTask])

    // Limpia el input después de agregar
    setNewTask('')
  }

  // Función que elimina una tarea según su posición (index)
  const handleBorrarTarea = (index:number) => {
    // Usamos filter para devolver todas las tareas MENOS la que coincide con el índice
    setlistaTareas(tareas => tareas.filter((_,i) => i !== index))
  }

  return (
    <>
      <h1>Lista de tareas</h1>

      <div>
        {/* Input controlado para escribir la nueva tarea */}
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Nueva tarea"
        />

        {/* Botón que ejecuta la función para agregar tarea */}
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      {/* 
        Renderizamos el componente ListaTareas y le pasamos:
        - listaTareas: el array de tareas actual
        - borrarTarea: la función que sabe cómo eliminar una tarea 
      */}
      <ListaTareas 
        listaTareas={listaTareas} 
        borrarTarea={handleBorrarTarea} 
      />
    </>
  );
};
