import {Team} from "./Team";
import {Suggestion} from "./Suggestion";
import {Vote} from "./Vote";

export interface User {
  Id: string,
  Points?: number,
  Team?: Team,
  TeamId?: number,
  Suggestions?: Suggestion[],
  Votes?: Vote[],
  Picture?: string,
  Name?: string,
}
