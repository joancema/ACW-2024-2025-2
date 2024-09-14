import { IPregunta } from './IPregunta';
import { ICiudadano } from './ICiudadano';
export interface IVoto {
    id: number;
    ciudadano: ICiudadano;
    pregunta: IPregunta;
    voto: string;
}