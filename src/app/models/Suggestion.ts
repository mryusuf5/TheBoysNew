import {Creator} from "./Creator";

export interface Suggestion{
  id?: number,
  creatorId: string,
  title: string,
  description: string,
  creator?: Creator,
  imagePath?: SVGImageElement
}
