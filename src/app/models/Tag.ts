import {Suggestion} from "./Suggestion";

export interface Tag {
  Id?: number,
  Title: string,
  Restrictive: boolean,
  Suggestions?: Suggestion[],
  SuggestionIds?: number[],
}
