// Componente para mostrar los cómics en formato Tabla con Avatares
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Chip, Rating, Avatar 
} from '@mui/material'

function TablaComicsA({ lista }) {
  return (
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
              {/* Avatar usado como miniatura dentro de la celda */}
              <TableCell>
                <Avatar 
                  src={comic.imagen || 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300'} 
                  alt={comic.titulo} 
                  variant="rounded" 
                />
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
  )
}

export default TablaComicsA