import {User} from "./User";
import {Tag} from "./Tag";
import {Poll} from "./Poll";
import {Vote} from "./Vote";

export interface Suggestion{
  id?: number,
  title: string,
  description: string,
  imagePath?: SVGImageElement
  creator?: User,
  creatorId?: number,
  tags?: Tag[],
  polls?: Poll[],
  votes?: Vote[],
  width?: number
}

export interface SuggestionWithSimilarity {
  suggestionId: number,
  title: string
  similarity: number,
}
