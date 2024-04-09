import {Creator} from "./Creator";

export interface Suggestion{
  id?: number,
  creatorId: number,
  title: string,
  description: string,
  creator?: Creator,
  imagePath?: SVGImageElement
}
