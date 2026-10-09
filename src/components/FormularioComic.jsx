// 1. Importamos todos los componentes que necesitamos de Material UI
import { 
  Box, 
  TextField, 
  Button, 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Rating, 
  Typography, 
  Switch, 
  Chip 
} from '@mui/material'

// 2. Definimos la función recibiendo las variables y funciones desde el componente Padre (App.jsx) vía "props"
function FormularioComic({ 
  titulo, setTitulo, 
  editorial, setEditorial, 
  calificacion, setCalificacion, 
  precio, setPrecio, 
  esEspecial, setEsEspecial, 
  handleSubmit 
}) {

  // LÓGICA REACTIVA / EN TIEMPO REAL:
  // Calculamos el precio en tiempo real. Si es 'Indie', le restamos un 20% (multiplicando por 0.8)
  const precioFinal = editorial === 'Indie' ? precio * 0.8 : precio

  return (
    // Box con component="form" actúa como una etiqueta <form>.
    // onSubmit activa la función handleSubmit al hacer clic en el botón de tipo "submit".
    // sx define los estilos de Material UI: flexbox en columna con espacio (gap) de 2 entre elementos.
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
      
      {/* 1. Campo de texto para el Título */}
      {/* value={titulo} conecta el campo con la variable de React */}
      {/* onChange captura cada letra escrita con e.target.value y la guarda en el estado */}
      <TextField 
        label="Título del Cómic" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        fullWidth 
      />

      {/* 2. Grupo de Opciones Únicas (RadioGroup para Editorial) */}
      <FormControl>
        <FormLabel>Editorial</FormLabel>
        {/* row hace que los radio buttons se muestren horizontalmente */}
        <RadioGroup row value={editorial} onChange={(e) => setEditorial(e.target.value)}>
          <FormControlLabel value="Marvel" control={<Radio />} label="Marvel" />
          <FormControlLabel value="DC" control={<Radio />} label="DC" />
          <FormControlLabel value="Indie" control={<Radio />} label="Indie (20% Desc.)" />
        </RadioGroup>
      </FormControl>

      {/* 3. Componente de Estrellas (Rating) */}
      <Box>
        <Typography component="legend">Calificación</Typography>
        {/* Number(calificacion) asegura que las estrellas reciban un valor numérico */}
        {/* newValue captura el número de estrellas marcadas por el usuario */}
        <Rating 
          value={Number(calificacion)} 
          onChange={(e, newValue) => setCalificacion(newValue)} 
        />
      </Box>

      {/* 4. Campo de texto Numérico para el Precio */}
      {/* type="number" asegura que el teclado solo ingrese números */}
      <TextField 
        label="Precio Base ($)" 
        type="number" 
        value={precio} 
        onChange={(e) => setPrecio(e.target.value)} 
        fullWidth 
      />

      {/* 5. Interruptor On/Off (Switch para Edición Especial) */}
      {/* OJO: Los Switch usan "checked" en lugar de "value", y e.target.checked para verdadero/falso */}
      <FormControlLabel 
        control={
          <Switch 
            checked={esEspecial} 
            onChange={(e) => setEsEspecial(e.target.checked)} 
          />
        } 
        label="¿Edición Especial?" 
      />

      {/* 6. Muestra Reactiva (Cálculo en vivo antes de guardar) */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
        {/* Chip cambia de texto y color según el estado del Switch (Operador Ternario) */}
        <Chip 
          label={esEspecial ? "Coleccionable" : "Estándar"} 
          color={esEspecial ? "secondary" : "default"} 
        />
        {/* Muestra el cálculo dinámico del precio final */}
        <Typography variant="subtitle1" fontWeight="bold">
          Precio Final Calculado: ${precioFinal || 0}
        </Typography>
      </Box>

      {/* Botón de envío del formulario */}
      <Button variant="contained" type="submit" size="large">
        Agregar al Inventario
      </Button>
    </Box>
  )
}

export default FormularioComic