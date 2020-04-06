export class RecepieModel {
  public name: string;
  public imagePath: string;
  public description: string;

  constructor(name: string, desc: string, path: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = path;
  }
}
