# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# 1. Clonar el repositorio a tu computador (reemplaza la URL)
git clone https://github.com/tu-usuario/tu-repositorio.git

# 2. Entrar a la carpeta que se acaba de descargar
cd tu-repositorio

# 3. CRUCIAL: Instalar las dependencias (node_modules no se sube a GitHub)
npm install

# 4. Si la plantilla no incluye Material UI, lo instalas rápido:
npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material

# 5. Iniciar el servidor local para empezar a programar
npm run dev

Para subir tus avances a GitHub mientras avanzas:
Bash
git add .
git commit -m "Solución de formulario y contenedor lista"
git push

1. El comando clave: Traer los cambios de GitHub a tu PC
Bash
git pull origin main
(Si tu rama se llama master en lugar de main, ejecuta git pull origin master).

¿Qué hace git pull?

Descarga y combina (merge) las modificaciones hechas en la web de GitHub (como la edición de tu README) con tu código local para que ambas versiones estén exactamente igualadas.

2. Si tienes cambios locales pendientes (Flujo completo seguro)
Si hiciste cambios en tu VS Code al mismo tiempo que editabas el README en la web, sigue estos 3 pasos para evitar conflictos:

Bash
# Paso 1: Guarda tus cambios locales actuales
git add .
git commit -m "Avances locales antes de actualizar README"


ara crear una aplicación de React moderna con Vite (que es el estándar que estás usando), el comando exacto en la terminal es:

Bash
npm create vite@latest nombre-de-tu-app -- --template react
El proceso completo paso a paso:
Ejecutas el comando de creación:
Reemplaza nombre-de-tu-app por el nombre que le quieras dar a tu carpeta (por ejemplo: mi-proyecto-comics).

Entras a la carpeta recién creada:

Bash
cd nombre-de-tu-app
Instalas las dependencias de React:

Bash
npm install
Instalas Material UI y sus íconos (si los vas a usar en el examen):

Bash
npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material
Levantas el servidor de desarrollo para empezar a programar:

Bash
npm run dev
Tip para el examen: Si ejecutas solo npm create vite@latest, la terminal te hará preguntas interactivas donde debes seleccionar React como Framework y JavaScript como Variant. Usar la bandera -- --template react al final se salta esa selección manual y la crea directo.

# Paso 2: Trae el README editado desde GitHub
git pull origin main

# Paso 3: Sube todo limpio y sincronizado a GitHub
git push origin main
