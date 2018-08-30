import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camPipe',
})
export class CamPipePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let newStr;
    switch (value) {
      case 'FHAZ': newStr = 'Front Hazard Avoidance Camera'; break;
      case 'RHAZ': newStr = 'Rear Hazard Avoidance Camera'; break;
      case 'NAVCAM': newStr = 'Navigation Camera'; break;
      case 'PANCAM': newStr = 'Panoramic Camera'; break;
      case 'MINITES': newStr = 'Miniature Thermal Emission Spectrometer (Mini-TES)'; break;
      case 'MAST': newStr = 'Mast Camera'; break;
      case 'CHEMCAM': newStr = 'Chemistry and Camera Complex'; break;
      case 'MAHLI': newStr = 'Mars Hand Lens Imager'; break;
      case 'MARDI': newStr = 'Mars Descent Imager'; break;
      default: newStr = value; break;
    }
    return newStr;
  }

}
