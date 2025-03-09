/* eslint-disable */

// Interface vs Type
interface Persona {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
  nombres: string[];
  id: string | number;
};

type PersonaType = {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
  nombres: string[];
  id: string | number;
};

type PersonaExtendida = PersonaType & {
  direccion: string;
};

enum Colores {
  Rojo = 'Rojo',
  Azul = 'Azul',
  Verde = 'Verde',
  Amarillo = 'Amarillo',
}


function general(): void {
    let nombre: string = 'Kevin';
    // nombre = 123;
    
    let edad: number = 25;
    let esEstudiante: boolean = true;
    let nombres: string[] = ["Juan", "María", "Carlos"];


    // Unions
    let id: string | number;
    id = 10;
    id = '10';

    const persona: PersonaType = {
        nombre: 'Kevin',
        edad: 25,
        esEstudiante: true,
        nombres: ["Juan", "María", "Carlos"],
        id: '10'
    };

    console.log(Colores.Rojo);

    /* 
      Genéricos
      Los genéricos son una forma de reutilizar código en TypeScript.
      Permite crear componentes que no están ligados a un tipo específico.
    */
    function obtenerPropiedad<T, K extends keyof T>(objeto: T, llave: K): T[K] {
      return objeto[llave];
    }

    const nombrePersona = obtenerPropiedad(persona, 'nombre');
    console.log(nombrePersona);
}

general();