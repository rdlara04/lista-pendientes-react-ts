import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'   // Importamos los estilos globales
import { TodoApp } from './components/TodoApp' // Importamos el componente principal

// Buscamos el elemento con id="root" en index.html
// Allí React "inyecta" toda la aplicación
createRoot(document.getElementById('root')!).render(
  // StrictMode es una herramienta de React para detectar posibles problemas en el código
  // No afecta en producción, solo en desarrollo
  <StrictMode>
    {/* Renderizamos nuestro componente principal */}
    <TodoApp />
  </StrictMode>,
)

