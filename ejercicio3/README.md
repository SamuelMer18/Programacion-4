## Instalación de React Router DOM

Para agregar React Router DOM a tu proyecto de React, sigue los siguientes pasos:

### Paso 1: Instalar React Router DOM

Para instalar React Router DOM, abre la terminal y navega a la carpeta raíz de tu proyecto de React. Luego, ejecuta el siguiente comando:

```
npm install react-router-dom
```

Este comando instalará React Router DOM y sus dependencias en tu proyecto de React.

### Paso 2: Importar React Router DOM

Después de instalar React Router DOM, debes importarlo en tu proyecto de React. Para hacerlo, agrega el siguiente código en el archivo donde quieras utilizar React Router DOM:

```javascript
import { BrowserRouter, Route, Switch } from "react-router-dom";
```

Este código importará los componentes de React Router DOM que necesitas para crear rutas en tu aplicación.

### Paso 3: Crear rutas en tu aplicación

Para crear rutas en tu aplicación de React, debes utilizar el componente `BrowserRouter` de React Router DOM. Este componente debe envolver todos los componentes que utilizarán rutas en tu aplicación.

```javascript
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
</BrowserRouter>
```

En este ejemplo, se crean tres rutas utilizando los componentes `Route`. La ruta `/` se carga cuando se visita la página principal de la aplicación, la ruta `/about` se carga cuando se visita la página "Acerca de" y la ruta `/contact` se carga cuando se visita la página "Contacto".

### Paso 4: Navegar entre rutas

Para navegar entre rutas en tu aplicación de React, puedes utilizar el componente `Link` de React Router DOM. Este componente debe envolver los elementos que actúan como enlaces en tu aplicación.

```javascript
<Link to="/">Inicio</Link>
<Link to="/about">Acerca de</Link>
<Link to="/contact">Contacto</Link>
```

En este ejemplo, se crean tres enlaces utilizando el componente `Link`. Al hacer clic en cada enlace, la aplicación navegará a la ruta correspondiente.
