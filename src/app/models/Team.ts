import {User} from "./User";
import {Poll} from "./Poll";

export interface Team {
  Id: string,
  Poll?: Poll,
  Users: User[]
}
