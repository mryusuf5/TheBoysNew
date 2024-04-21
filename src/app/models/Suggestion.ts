import {User} from "./User";
import {Tag} from "./Tag";
import {Poll} from "./Poll";
import {Vote} from "./Vote";

export interface Suggestion{
  Id?: number,
  Title: string,
  Description: string,
  ImagePath?: SVGImageElement
  Creator?: User,
  CreatorId?: number,
  Tags?: Tag[],
  Polls?: Poll[],
  Votes?: Vote[],
}

export interface SuggestionWithSimilarity {
  SuggestionId: number,
  Title: string
  Similarity: number,
}
