// Componente para la barra superior con título y Avatar
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material'

function BarraNavegacion() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        {/* Avatar con la inicial de la tienda */}
        <Avatar sx={{ bgcolor: 'secondary.main', fontWeight: 'bold' }}>
          C
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          ComicVerse - Sistema de Gestión
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default BarraNavegacion