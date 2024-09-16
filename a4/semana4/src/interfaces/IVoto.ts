import { ICiudadano } from "./ICiudadano";
import { IPregunta } from "./IPregunta";

export interface IVoto {
    id: number;
    ciudadano:  ICiudadano ;
    pregunta: IPregunta;
    voto: string;
}