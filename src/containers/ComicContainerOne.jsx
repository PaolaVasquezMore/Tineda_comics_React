import { useState } from 'react'
import { Container, Typography, Box, Paper, Divider } from '@mui/material'

// Importación de todos los componentes modulares
import BarraNavegacion from '../components/BarraNavegacion'
import FormularioComic from '../components/FormularioComic'
import TarjetaComic from '../components/TarjetaComic'
import TablaComics from '../components/TablaComicsA'
import AlertaValidacion from '../components/AlertaValidacion'

function ComicContainerOne() {
  // Estados del Formulario
  const [titulo, setTitulo] = useState('')
  const [editorial, setEditorial] = useState('Marvel')
  const [calificacion, setCalificacion] = useState(1)
  const [precio, setPrecio] = useState('')
  const [esEspecial, setEsEspecial] = useState(false)

  // Estado de la Lista de Cómics
  const [lista, setLista] = useState([
    {
      id: 1,
      titulo: 'Saga Vol. 1',
      editorial: 'Indie',
      calificacion: 5,
      precioFinal: 24000,
      esEspecial: false,
      imagen: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300'
    }
  ])

  // Estado de Alertas
  const [openAlert, setOpenAlert] = useState(false)
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!titulo.trim() || !precio || Number(precio) <= 0 || !calificacion) {
      setMensajeError('Todos los campos son obligatorios. Por favor revisa los datos.')
      setOpenAlert(true)
      return
    }

    const precioBaseNum = Number(precio)
    const precioCalculado = editorial === 'Indie' ? precioBaseNum * 0.8 : precioBaseNum

    const nuevoComic = {
      id: Date.now(),
      titulo: titulo,
      editorial: editorial,
      calificacion: Number(calificacion),
      precioFinal: precioCalculado,
      esEspecial: esEspecial,
      imagen: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300'
    }

    setLista([...lista, nuevoComic])

    setTitulo('')
    setEditorial('Marvel')
    setCalificacion(1)
    setPrecio('')
    setEsEspecial(false)
  }

  return (
    <Box sx={{ flexGrow: 1, pb: 5 }}>
      {/* 1. Componente Barra de Navegación */}
      <BarraNavegacion />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 3 }}>
          Registro y Catálogo de Inventario
        </Typography>

        {/* 2. Componente Formulario en una tarjeta Paper */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: 'white' }}>
          <FormularioComic 
            titulo={titulo} setTitulo={setTitulo}
            editorial={editorial} setEditorial={setEditorial}
            calificacion={calificacion} setCalificacion={setCalificacion}
            precio={precio} setPrecio={setPrecio}
            esEspecial={esEspecial} setEsEspecial={setEsEspecial}
            handleSubmit={handleSubmit}
          />
        </Paper>

        {/* Componente Divider de MUI */}
        <Divider sx={{ my: 4 }} />

        {/* 3. Renderizado de Tarjetas (.map llamando a TarjetaComic) */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Vista en Tarjetas (`Card`)
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 5 }}>
          {lista.map((comic) => (
            <TarjetaComic key={comic.id} comic={comic} />
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* 4. Renderizado en Tabla */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Vista en Tabla (`Table`)
        </Typography>
        <TablaComics lista={lista} />

        {/* 5. Componente Alerta */}
        <AlertaValidacion 
          open={openAlert} 
          onClose={() => setOpenAlert(false)} 
          mensaje={mensajeError} 
        />
      </Container>
    </Box>
  )
}

export default ComicContainerOne