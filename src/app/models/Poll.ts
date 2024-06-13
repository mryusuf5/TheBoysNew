import {Team} from "./Team";
import {Suggestion} from "./Suggestion";
import {Vote} from "./Vote";

export interface Poll {
  id?: number,
  endDate: Date,
  team?: Team,
  teamId?: number,
  suggestions?: Suggestion[],
  suggestionIds?: number[],
  votes?: Vote[],
}
