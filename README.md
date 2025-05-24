### Herramientas a tener en cuenta para despliegue

Debemos instalar algunos plugins de webpacks para que sea más facil la construcción del proyecto

```bash
npm install --save-dev html-webpack-plugin copy-webpack-plugin
```

En nuestro proyecto tenemos un archivo de configuración de webpack, el cual nos permite construir el proyecto. Este archivo se encuentra en la raíz del proyecto y se llama `webpack.config.js`. En este archivo debemos agregar los siguientes plugins:

```javascript
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/assets', to: 'assets' }
            ]
        }),
    ]
```

### Construcción del proyecto
Para construir el proyecto debemos ejecutar el siguiente comando:

```bash
npm run build
```

### Uso de firebase para despliegue

Debemos tener instalado firebase-tools, si no lo tenemos instalado lo instalamos de la siguiente manera:

```bash
npm install -g firebase-tools
```

### Despliegue de la aplicación
Para desplegar la aplicación debemos tener una cuenta de firebase y crear un proyecto en firebase. Una vez creado el proyecto debemos inicializar firebase en nuestro proyecto. Para ello ejecutamos el siguiente comando:


```bash
firebase login
```

```bash
firebase init
```

Esto nos preguntará por varias opciones, debemos seleccionar las siguientes:
- Hosting: Configure and deploy Firebase Hosting sites
- Use an existing project
- Seleccionamos el proyecto que hemos creado en firebase
- Public directory: dist
- Configure as a single-page app (rewrite all urls to /index.html): Yes
- Set up automatic builds and deploys with GitHub? Yes
- What do you want to use as your GitHub Action workflow file name? (press enter)
- File dist/index.html already exists. Overwrite? No