import {User} from "./User";
import {Suggestion} from "./Suggestion";
import {Poll} from "./Poll";

export interface Vote {
  id?: number,
  creator?: User,
  userId?: number,
  suggestion?: Suggestion,
  suggestionId?: number,
  poll?: Poll,
  pollId?: number,
}

export interface VotesWithCount {
  Votes: Vote[],
  VotesPerSuggestion: [number, number],
}
