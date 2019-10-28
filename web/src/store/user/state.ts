import { User } from "core/lib/entities";

export interface StateType {
  readonly user: User | null;
}

export const initialState: StateType = {
  user: null
};
