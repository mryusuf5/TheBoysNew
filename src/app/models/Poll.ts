import {Team} from "./Team";
import {Suggestion} from "./Suggestion";
import {Vote} from "./Vote";

export interface Poll {
  Id?: number,
  EndDate: Date,
  Team?: Team,
  TeamId?: number,
  Suggestions?: Suggestion[],
  SuggestionIds?: number[],
  Votes?: Vote[],
}
