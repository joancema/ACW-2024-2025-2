import { ICiudadano, IPregunta, IVoto } from './interfaces';


export const ciudadanos: ICiudadano[] = [
    {
        id: 1,
        cedula: '1725416545',
        nombre: 'Juan',
        apellido: 'Perez'
    },
    {
        id: 2,
        cedula: '1725416546',
        nombre: 'Ana',
        apellido: 'Perez'
    },
    {
        id: 3,
        cedula: '1725416547',
        nombre: 'Pedro',
        apellido: 'Sanchez'
    }
];
export const preguntas: IPregunta[] = [
    {
        id: 1,
        pregunta: '¿Está de acuerdo con la reducción del IVA del 12% al 10%?'
    },
    {
        id: 2,
        pregunta: '¿Está de acuerdo con la reducción del IVA del 12% al 8%?'
    }
];
export const votos: IVoto[] = [
    {
        id: 1,
        ciudadano: { id: 1, cedula: '1725416545', nombre: 'Juan', apellido: 'Perez' },
        pregunta:  { id: 1, pregunta: '¿Está de acuerdo con la reducción del IVA del 12% al 10%?' } ,
        voto: 'SI'
    },
    {
        id: 2,
        ciudadano: ciudadanos[1],
        pregunta: preguntas[0],
        voto: 'NO'
    },
    {
        id: 3,
        ciudadano: ciudadanos[2],
        pregunta: preguntas[0],
        voto: 'NO'
    },
    {
        id: 4,
        ciudadano: ciudadanos[0],
        pregunta: preguntas[1],
        voto: 'SI'
    }
];