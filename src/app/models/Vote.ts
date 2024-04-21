import {User} from "./User";
import {Suggestion} from "./Suggestion";
import {Poll} from "./Poll";

export interface Vote {
  Id?: number,
  User?: User,
  UserId?: number,
  Suggestion?: Suggestion,
  SuggestionId?: number,
  Poll?: Poll,
  PollId?: number,
}

export interface VotesWithCount {
  Votes: Vote[],
  VotesPerSuggestion: [number, number],
}
