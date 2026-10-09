// Componente reusable para la alerta Snackbar
import { Snackbar, Alert } from '@mui/material'

function AlertaValidacion({ open, onClose, mensaje }) {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={4000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="warning" variant="filled">
        {mensaje}
      </Alert>
    </Snackbar>
  )
}

export default AlertaValidacion