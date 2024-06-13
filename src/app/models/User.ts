import {Team} from "./Team";
import {Suggestion} from "./Suggestion";
import {Vote} from "./Vote";

export interface User {
  id: string,
  points?: number,
  team?: Team,
  teamId?: number,
  suggestions?: Suggestion[],
  votes?: Vote[],
  picture?: string,
  name?: string,
}
