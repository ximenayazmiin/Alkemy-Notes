## Configurar el Frontend

### Instalar dependencias:

```bash
cd Alkemy-Notes
npm install

Configurar variables de entorno:
Configuración de puerto para peticiones del back:
API_BASE_URL
Nota: El único archivo que no se fue capaz de utilizar esta variable fue en tareas.js, dentro de este archivo se encuentra el método getTareas2(), el cual está utilizando de manera manual http://localhost:5000/.

Ejecutar la aplicación:
npm start dev
