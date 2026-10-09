import { useState } from 'react'
import { Container, Typography, Snackbar, Alert } from '@mui/material'
import FormularioComic from '../components/FormularioComic'
import ListaComics from '../components/ListaComics'

function ComicContainer() {
  // 1. ESTADOS PARA LOS CAMPOS DEL FORMULARIO
  const [titulo, setTitulo] = useState('')
  const [editorial, setEditorial] = useState('Marvel') // Valor por defecto
  const [calificacion, setCalificacion] = useState(1)
  const [precio, setPrecio] = useState('')
  const [esEspecial, setEsEspecial] = useState(false)

  // 2. ESTADO PARA LA LISTA DE CÓMICS GUARDADOS
  const [lista, setLista] = useState([])

  // 3. ESTADOS PARA MANEJAR LA ALERTA (SNACKBAR / DIALOG)
  const [openAlert, setOpenAlert] = useState(false)
  const [mensajeError, setMensajeError] = useState('')

  // 4. FUNCIÓN PARA MANEJAR EL ENVÍO DEL FORMULARIO (LOGICA DE NEGOCIO)
  const handleSubmit = (e) => {
    e.preventDefault()

    // VALIDACIÓN: Todos los campos son obligatorios (revisar que no estén vacíos o en 0)
    if (!titulo.trim() || !precio || Number(precio) <= 0 || !calificacion) {
      setMensajeError('Todos los campos son obligatorios. Por favor revisa los datos.')
      setOpenAlert(true) // Abre la alerta visual
      return
    }

    // CÁLCULO EN TIEMPO REAL: Si es Indie, descuento del 20%
    const precioBaseNum = Number(precio)
    const precioCalculado = editorial === 'Indie' ? precioBaseNum * 0.8 : precioBaseNum

    // CREACIÓN DEL NUEVO OBJETO CÓMIC
    const nuevoComic = {
      id: Date.now(),
      titulo: titulo,
      editorial: editorial,
      calificacion: Number(calificacion),
      precioFinal: precioCalculado,
      esEspecial: esEspecial
    }

    // AGREGAR AL ARREGLO PRINCIPAL
    setLista([...lista, nuevoComic])

    // LIMPIAR CAMPOS DEL FORMULARIO
    setTitulo('')
    setEditorial('Marvel')
    setCalificacion(1)
    setPrecio('')
    setEsEspecial(false)
  }

  // FUNCIÓN PARA CERRAR LA ALERTA DE ADVERTENCIA
  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  return (
    // CONTAINER: Contenedor principal de Material UI que centra el contenido
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Sistema de Inventario - ComicVerse
      </Typography>

      {/* COMPONENTE HIJO: FORMULARIO */}
      <FormularioComic 
        titulo={titulo} setTitulo={setTitulo}
        editorial={editorial} setEditorial={setEditorial}
        calificacion={calificacion} setCalificacion={setCalificacion}
        precio={precio} setPrecio={setPrecio}
        esEspecial={esEspecial} setEsEspecial={setEsEspecial}
        handleSubmit={handleSubmit}
      />

      {/* COMPONENTE HIJO: LISTADO */}
      <ListaComics lista={lista} />

      {/* ALERTA DE ADVERTENCIA (SNACKBAR): Exigido en pauta si falta algún dato */}
      <Snackbar 
        open={openAlert} 
        autoHideDuration={4000} 
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseAlert} severity="warning" variant="filled" sx={{ width: '100%' }}>
          {mensajeError}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default ComicContainer