// 1. Importamos los componentes de Tabla de Material UI y los Íconos
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip, 
  Rating, 
  IconButton,
  Typography
} from '@mui/material'

// Importación de Íconos de MUI (si la pauta o interfaz pide botones con ícono)
import DeleteIcon from '@mui/icons-material/Delete'
import MenuBookIcon from '@mui/icons-material/MenuBook'

// 2. Recibimos la "lista" desde el contenedor padre vía PROPS
function TablaComics({ lista }) {

  // Si la lista está vacía, mostramos un mensaje centrado
  if (lista.length === 0) {
    return (
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mt: 4 }}>
        No hay cómics registrados en el inventario.
      </Typography>
    )
  }

  return (
    // Paper crea la tarjeta/hoja blanca elevada con sombra para envolver la tabla
    <TableContainer component={Paper} elevation={3} sx={{ mt: 3 }}>
      <Table sx={{ minWidth: 650 }}>
        
        {/* ENCABEZADO DE LA TABLA (Títulos de cada columna) */}
        <TableHead sx={{ backgroundColor: '#1976d2' }}> {/* Color azul de MUI */}
          <TableRow>
            {/* TableCell representa cada celda/columna */}
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Título</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Editorial</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Calificación</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Categoría</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Precio Final</TableCell>
          </TableRow>
        </TableHead>

        {/* CUERPO DE LA TABLA (Recorremos el arreglo con .map) */}
        <TableBody>
          {lista.map((comic) => (
            // REGLA CLAVE: El <TableRow> es el contenedor repetitivo, debe llevar key={comic.id}
            <TableRow key={comic.id} hover>
              
              {/* Columna 1: Título con ícono a la izquierda */}
              <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MenuBookIcon color="action" />
                {comic.titulo}
              </TableCell>

              {/* Columna 2: Editorial */}
              <TableCell>{comic.editorial}</TableCell>

              {/* Columna 3: Rating con estrellas en Solo Lectura */}
              <TableCell>
                <Rating value={comic.calificacion} readOnly size="small" />
              </TableCell>

              {/* Columna 4: Chip de categoría (Condicional si es especial o estándar) */}
              <TableCell>
                <Chip 
                  label={comic.esEspecial ? "Coleccionable" : "Estándar"} 
                  color={comic.esEspecial ? "secondary" : "default"} 
                  size="small"
                />
              </TableCell>

              {/* Columna 5: Precio (Alineado a la derecha) */}
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                ${comic.precioFinal}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default TablaComics