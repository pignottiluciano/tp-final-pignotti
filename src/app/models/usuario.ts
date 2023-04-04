export interface Usuario{
    id?: number;
    usuario: string;
    nombre?: string;
    apellido?: string;
    contrasena: string;
    esAdmin: boolean;
}