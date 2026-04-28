# Mi Primer App - Gestor de Tareas

Aplicación móvil desarrollada en **Ionic y Angular** para la gestión y organización de tareas personales. Esta es una aplicación creada como proyecto de aprendizaje en clases de Programación.

## 📋 Características

- ✅ **Crear tareas** con título, descripción, prioridad y categoría
- 📅 **Gestión de fechas** - fecha de creación y fecha límite de entrega
- 🏷️ **Estados de tareas** - Pendiente, En progreso, Completada
- ⭐ **Prioridades** - Alta, Media, Baja
- 💾 **Almacenamiento local** - Las tareas se guardan en el dispositivo usando Capacitor Preferences
- 📱 **Interfaz responsiva** - Optimizada para dispositivos móviles y tablets
- 🗂️ **Organización por categorías** - Clasifica tus tareas

## 🛠️ Tecnologías Utilizadas

- **Angular 20** - Framework de desarrollo
- **Ionic 8** - Framework para aplicaciones móviles
- **TypeScript** - Lenguaje de programación
- **Capacitor** - Para acceso a características del dispositivo
- **RxJS** - Programación reactiva
- **SCSS** - Estilos

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** (versión 18 o superior)
- **npm** (gestor de paquetes)
- **Ionic CLI** (opcional pero recomendado)

```bash
npm install -g @ionic/cli
npm install -g @angular/cli
```

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/isaac0621/Proyecto-de-Programacion.git
cd miPrimerApp
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── models/
│   │   └── task.model.ts          # Modelo e interfaz de Tareas
│   ├── services/
│   │   └── task.services.ts       # Servicio de gestión de tareas
│   ├── tab1/                      # Pestaña 1 - Mis Tareas
│   ├── tab2/                      # Pestaña 2 - Categorías
│   ├── tab3/                      # Pestaña 3 - Configuración
│   ├── tabs/                      # Componente principal de navegación
│   ├── explore-container/         # Componente explorador
│   ├── app.component.ts           # Componente raíz
│   └── app.routes.ts              # Definición de rutas
├── assets/                        # Recursos estáticos
├── environments/                  # Configuración por entorno
├── theme/                         # Temas y variables SCSS
└── index.html                     # Archivo HTML principal
```

## 📝 Modelo de Datos

### Interfaz Task

```typescript
interface Task {
  id: string;                    // ID único (UUID)
  titulo: string;               // Título de la tarea
  descripcion: string;          // Descripción detallada
  fechaCreación: string;        // Fecha de creación (ISO string)
  fechaLimite: string;          // Fecha límite de entrega
  estado: TaskStatus;           // Pendiente | En progreso | Completada
  prioridad: TaskPriority;      // alta | media | baja
  categoria: string;            // Categoría de la tarea
  completada: boolean;          // Indicador de completitud
}
```

## 🎯 Componentes Principales

### TaskService
Servicio responsable de:
- Obtener todas las tareas
- Crear nuevas tareas
- Actualizar tareas existentes
- Eliminar tareas
- Persistir datos en almacenamiento local

### Tab1 - Mis Tareas
Vista principal donde puedes:
- Ver todas tus tareas
- Filtrar por estado o prioridad
- Marcar tareas como completadas
- Editar o eliminar tareas

### Tab2 - Categorías
Sección para organizar tareas por categorías

### Tab3 - Configuración
Opciones de configuración de la aplicación

## 🧪 Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```

Para realizar pruebas con cobertura:

```bash
npm test -- --code-coverage
```

## 🔨 Compilación

Para compilar el proyecto para producción:

```bash
npm run build
```

## 📱 Despliegue en Dispositivo

Con Capacitor puedes desplegar en Android e iOS:

```bash
# Para Android
ionic build
npx cap add android
npx cap run android

# Para iOS
ionic build
npx cap add ios
npx cap run ios
```

## 🐛 Problemas Comunes

### No se cargan las tareas guardadas
- Limpia el cache del navegador
- Verifica que Preferences esté inicializado correctamente

### Cambios no se reflejan en la UI
- Asegúrate de que estás usando observables o triggering change detection

## 📚 Recursos Útiles

- [Documentación de Ionic](https://ionicframework.com/docs)
- [Documentación de Angular](https://angular.io/docs)
- [Capacitor Documentation](https://capacitorjs.com/)

## 👨‍💻 Autor

Desarrollado por **isaac0621** como proyecto de aprendizaje en clases de Programación.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

⭐ Si te gusta este proyecto, no dudes en darle una estrella en GitHub

