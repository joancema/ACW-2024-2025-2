import { ICiudadano, IPregunta, IVoto } from './interfaces';

export const ciudadanos: ICiudadano[] = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez'
    },
    {
        id: 2,
        nombre: 'Maria',
        apellido: 'Gomez'
    },
    {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Gonzalez'
    }
];
export const preguntas: IPregunta[] = [
    {
        id: 1,
        pregunta: '¿Esta de acuerdo con la reforma laboral?'
    },
    {
        id: 2,
        pregunta: '¿Esta de acuerdo con la reforma educativa?'
    },
    {
        id: 3,
        pregunta: '¿Esta de acuerdo con la reforma fiscal?'
    }
];
export const votos: IVoto[] = [
    {
        id: 1,
        ciudadano: { id: 1, nombre: 'Juan', apellido: 'Perez' },
        pregunta: { id: 1, pregunta: '¿Esta de acuerdo con la reforma laboral?' },
        voto: 'SI'
    },
    {
        id: 2,
        ciudadano: { id: 1, nombre: 'Juan', apellido: 'Perez' },
        pregunta: { id: 2, pregunta: '¿Esta de acuerdo con la reforma educativa?' },
        voto: 'NO'
    },
    {
        id: 3,
        ciudadano: { id: 2, nombre: 'Maria', apellido: 'Gomez' },
        pregunta: { id: 1, pregunta: '¿Esta de acuerdo con la reforma laboral?' },
        voto: 'NO'
    },
    {
        id: 4,
        ciudadano: ciudadanos[1],
        pregunta: preguntas[1],
        voto: 'SI'
    },
]