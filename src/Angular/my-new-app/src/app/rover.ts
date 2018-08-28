export class Rover {
    id: number;
    name: string;
    cameras: string[];

}
export const rovers: Rover[] = [
    { id: 1, name: 'Curiosity',  cameras: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM']},
    { id: 2, name: 'Oportunity', cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']},
    { id: 3, name: 'Spirit', cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']},
  ];
