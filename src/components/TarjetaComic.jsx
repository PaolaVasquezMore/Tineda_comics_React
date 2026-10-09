// Componente para renderizar UNA tarjeta de cómic individual con imagen
import { Card, CardContent, CardMedia, Typography, Rating, Chip, Box } from '@mui/material'

function TarjetaComic({ comic }) {
  return (
    <Card variant="outlined" sx={{ width: 280, height: '100%' }}>
      {/* CardMedia muestra la imagen o portada */}
      <CardMedia
        component="img"
        height="140"
        image={comic.imagen || 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300'}
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
  )
}

export default TarjetaComic