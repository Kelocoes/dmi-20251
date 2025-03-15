Aquí encontrarás los pasos para crear el proyecto de project-demo el cual busca presentar una baseline de un proyecto de TypeScript.

## Pasos

1. Crea una carpeta para el proyecto y entra en ella.
    1.1 Ejecuta el comando `mkdir project-demo` para crear la carpeta. (También puede crearla manualmente).
    1.2 Ejecuta el comando `cd project-demo` para entrar en la carpeta.
2. Inicializa el proyecto de Node.js.
    2.1 Ejecuta el comando `npm init -y` para inicializar el proyecto.
3. Opcional: Crear un repositorio de git.
    3.1 Ejecuta el comando `git init` para inicializar un repositorio de git.
    3.2 Ejecuta el comando `git remote add origin <url>` para agregar un repositorio remoto.
    3.3 Ejecuta el comando `git add .` para agregar todos los archivos al stage.
    3.4 Ejecuta el comando `git commit -m "Initial commit"` para hacer el primer commit.
    3.5 Ejecuta el comando `git push -u origin master` para subir los cambios al repositorio remoto.
4. Instala TypeScript como dependencia de desarrollo.
    4.1 Ejecuta el comando `npm install typescript --save-dev` para instalar TypeScript.
    4.2 Ejecuta el comando `npx tsc --init` para generar el archivo de configuración de TypeScript.
5. Instala husky y eslint como dependencias de desarrollo.
    5.1 Ejecuta el comando `npm install husky eslint --save-dev` para instalar husky y eslint.
    5.2 Ejecuta el comando `npx eslint --init` para generar el archivo de configuración de eslint.
    5.3 Ejecuta el comando `npx husky init` para generar el archivo de configuración de husky.
6. Crea los siguientes archivos y carpetas:
    6.1 Crea una carpeta `src` para el código fuente.
    6.2 Crea un archivo `src/index.ts` con el siguiente contenido:
    ```typescript
    console.log("Hello, TypeScript!");
    ```
    6.3 En la carpeta .husky crea un archivo pre-commit con el siguiente contenido:
    ```bash
        #!/bin/sh
        npm run lint
    ```
    6.4 Modificar el archivo tsconfig.json para que el código se compile en la carpeta `dist`. Además de incluir todo lo del carpeta `src` y excluir la carpeta `node_modules`.
    ```json
    {
        "compilerOptions": {
            "target": "ESNext", // Cambiar a ESNext
            "module": "commonjs", // Cambiar a commonjs
            "strict": true, // Es recomendable activar el modo estricto
            "esModuleInterop": true, // Habilitar la interoperabilidad de módulos
            "skipLibCheck": true, // Omitir la comprobación de librerías
            "forceConsistentCasingInFileNames": true, // Forzar la consistencia en los nombres de archivo, útil para evitar errores en sistemas de archivos que no distinguen entre mayúsculas y minúsculas
            "outDir": "./dist" // Directorio de salida
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "dist"]
    }
    ```
    6.5 Crear el archivo .gitignore y agregar las siguientes líneas:
    ```
        node_modules
    ```
7. Modifica el archivo `package.json` para agregar los siguientes scripts:
```json
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=production",
    "start": "webpack serve --mode=development",
    "lint": "eslint src/ --ext .ts,.js --report-unused-disable-directives",
    "lint:fix": "eslint src/ --ext .ts,.js --report-unused-disable-directives --fix",
    "prepare": "husky"
    },
```
    7.1 Además de eso agrega el atributo `"type": "module"` en el archivo `package.json` para habilitar el uso de módulos ES6.
8. Instalar la dependencia de webpack-cli, webpack-dev-server y ts-loader
    ```bash
        npm install webpack webpack-cli webpack-dev-server ts-loader --save-dev
    ```
9. Crear el archivo `webpack.config.js` en la raíz del proyecto con el siguiente contenido:
    ```javascript
    import path from 'path';
    import { fileURLToPath } from 'url';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    export default {
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    };
    ```

10. Crea la carpeta public y dentro de ella crea un archivo index.html con el siguiente contenido:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Project Demo</title>
    </head>
    <body>
        <script type="module" src="/bundle.js"></script>
    </body>
    </html>
    ```
11. Escribe un console.log en el archivo `src/index.ts` para verificar que todo está funcionando correctamente.
    11.1 Ejecuta el comando `npm start` para iniciar el servidor de desarrollo.
    11.2 Accede a `http://localhost:8080` en tu navegador para ver el mensaje de log.
12. ¡Listo! Has creado un proyecto de TypeScript con linting y pre-commit hooks configurados.
Para cancelar la ejecución de la aplicación presiona `Ctrl + C` en la terminal.

## Pasos extra

1. Construcción de un compilado de producción.
    1.1 Ejecuta el comando `npm run build` para compilar el código en modo de producción.
    1.2 Verifica que se haya generado un archivo `bundle.js` en la carpeta `dist`.

2. Linting del código.
    2.1 Ejecuta el comando `npm run lint` para verificar que el código cumple con las reglas de linting.
    2.2 Ejecuta el comando `npm run lint:fix` para corregir automáticamente los errores de linting.

3. Ejecutar solo lo compilado:
    3.1 Ejecuta el comando `npm run build` para compilar el código en modo de producción.
    3.2 Copia la información que esté en la carpeta public como el index.html y otros assets.
    3.2.1 Si no funciona usar `npx webpack serve --mode=production` para ejecutar el servidor de producción.

4. Crear carpetas extra de plantilla: 
    4.1 Parate en la carpeta `src` usando cd src.
    4.2 Ejecuta el comando `mkdir components` para crear la carpeta de componentes.
        4.2.1 `mkdir components | mkdir assets | mkdir utils | mkdir services | mkdir pages | mkdir layouts | mkdir enums`

5. Configuraciones adicionales del archivo eslint (Opcionales)
    5.1 Modifica el archivo `eslint.config.mjs` para agregar reglas personalizadas.
    ```json
    "rules": {
        "max-len": ["error", { "code": 250 }],
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "all",
            "argsIgnorePattern": "^_"
            }
        ],
        "indent": ["error", 4],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "block-spacing": "error",
        "semi": ["error", "always"],
        "camelcase": "off",
        "quotes": ["error", "single"],
        "no-console": ["error", { "allow": ["info", "warn", "error"] }]
    }
    ```
