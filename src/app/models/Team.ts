import {User} from "./User";
import {Poll} from "./Poll";

export interface Team {
  id: string,
  poll?: Poll,
  users: User[]
}
