export class Rover {
    id: number;
    name: string;
    datetype: string;
    cameras: string[];

}
export const rovers: Rover[] = [
    { id: 1, name: 'Curiosity', datetype: '', cameras: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'] },
    { id: 2, name: 'Oportunity', datetype: '', cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] },
    { id: 3, name: 'Spirit', datetype: '', cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] },
];
