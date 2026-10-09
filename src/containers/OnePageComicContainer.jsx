import { useState } from 'react'
import { 
  Container, 
  Typography, 
  Box, 
  AppBar, 
  Toolbar, 
  Avatar, 
  Card, 
  CardContent, 
  CardMedia,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip, 
  Rating, 
  Snackbar, 
  Alert,
  Divider
} from '@mui/material'

import MenuBookIcon from '@mui/icons-material/MenuBook'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

import FormularioComic from '../components/FormularioComic'

function OnePageComicContainer() {
  const [titulo, setTitulo] = useState('')
  const [editorial, setEditorial] = useState('Marvel')
  const [calificacion, setCalificacion] = useState(1)
  const [precio, setPrecio] = useState('')
  const [esEspecial, setEsEspecial] = useState(false)

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

  const [openAlert, setOpenAlert] = useState(false)
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!titulo.trim() || !precio || Number(precio) <= 0 || !calificacion) {
      setMensajeError('Todos los campos son obligatorios. Revisa los datos.')
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
      
      {/* 1. BARRA DE MENÚ SUPERIOR */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <MenuBookIcon />
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            ComicVerse - Sistema de Gestión
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 2. CONTENEDOR PRINCIPAL */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
          <AutoAwesomeIcon color="primary" fontSize="large" />
          <Typography variant="h4" align="center" fontWeight="bold">
            Registro y Catálogo de Inventario
          </Typography>
        </Box>

        {/* 3. SECCIÓN DEL FORMULARIO */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: 'white' }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight="bold">
            Ingresar Nuevo Cómic
          </Typography>
          <FormularioComic 
            titulo={titulo} setTitulo={setTitulo}
            editorial={editorial} setEditorial={setEditorial}
            calificacion={calificacion} setCalificacion={setCalificacion}
            precio={precio} setPrecio={setPrecio}
            esEspecial={esEspecial} setEsEspecial={setEsEspecial}
            handleSubmit={handleSubmit}
          />
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* 4. SECCIÓN DE TARJETAS (CATÁLOGO EN FLEXBOX) */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Vista 1: Catálogo en Tarjetas (`Card`)
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 5 }}>
          {lista.map((comic) => (
            <Card key={comic.id} variant="outlined" sx={{ width: 280 }}>
              <CardMedia
                component="img"
                height="140"
                image={comic.imagen}
                alt={comic.titulo}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {comic.titulo}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  Editorial: {comic.editorial}
                </Typography>
                <Rating value={comic.calificacion} readOnly size="small" />
                <Box sx={{ my: 1 }}>
                  <Chip 
                    label={comic.esEspecial ? "Coleccionable" : "Estándar"} 
                    color={comic.esEspecial ? "secondary" : "default"} 
                    size="small"
                  />
                </Box>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  ${comic.precioFinal}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* 5. SECCIÓN DE TABLA (VISTA DE INVENTARIO) */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Vista 2: Tabla de Datos (`Table`)
        </Typography>

        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Portada</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Título</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Editorial</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Calificación</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Categoría</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Precio Final</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lista.map((comic) => (
                <TableRow key={comic.id} hover>
                  <TableCell>
                    <Avatar src={comic.imagen} alt={comic.titulo} variant="rounded" />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{comic.titulo}</TableCell>
                  <TableCell>{comic.editorial}</TableCell>
                  <TableCell>
                    <Rating value={comic.calificacion} readOnly size="small" />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={comic.esEspecial ? "Coleccionable" : "Estándar"} 
                      color={comic.esEspecial ? "secondary" : "default"} 
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    ${comic.precioFinal}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 6. ALERTA SNACKBAR */}
        <Snackbar 
          open={openAlert} 
          autoHideDuration={4000} 
          onClose={() => setOpenAlert(false)}
        >
          <Alert onClose={() => setOpenAlert(false)} severity="warning" variant="filled">
            {mensajeError}
          </Alert>
        </Snackbar>

      </Container>
    </Box>
  )
}

export default OnePageComicContainer