// Importamos los elementos visuales necesarios para armar el catálogo en cuadrícula
import { Grid, Card, CardContent, Typography, Rating, Chip, Box } from '@mui/material'

// Recibimos "lista", que es el arreglo con todos los cómics guardados en el estado de App.jsx
function ListaComics({ lista }) {
  return (
    // Grid container crea la cuadrícula principal. spacing={2} le da separación entre tarjetas
    <Grid container spacing={2}>
      {/* Usamos .map() para recorrer cada cómic guardado en la lista y convertirlo en una Tarjeta */}
      {lista.map((comic) => (
        // REGLA DE ORO EN REACT: El elemento que se repite en el .map debe llevar key={id_único}
        // xs={12} abarca todo el ancho en celulares; sm={6} usa la mitad del ancho (2 columnas) en pantallas medianas
        <Grid item xs={12} sm={6} key={comic.id}>
          <Card variant="outlined">
            <CardContent>
              {/* Título del Cómic */}
              <Typography variant="h6" component="div">
                {comic.titulo}
              </Typography>
              
              {/* Editorial */}
              <Typography color="text.secondary" gutterBottom>
                Editorial: {comic.editorial}
              </Typography>

              {/* Estrellas en modo Solo Lectura */}
              {/* readOnly impide que la persona modifique el puntaje desde la tarjeta */}
              <Box sx={{ my: 1 }}>
                <Rating value={comic.calificacion} readOnly />
              </Box>

              {/* Etiqueta (Chip) de Categoría */}
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', my: 1 }}>
                <Chip 
                  label={comic.esEspecial ? "Coleccionable" : "Estándar"} 
                  color={comic.esEspecial ? "secondary" : "default"} 
                  size="small"
                />
              </Box>

              {/* Muestra el Precio Final Guardado */}
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                ${comic.precioFinal}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ListaComics