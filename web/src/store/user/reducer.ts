import { initialState, StateType } from "./state";
import { UserActionType } from "./actions";

export const reducer = (
  state = initialState,
  action: UserActionType
): StateType => {
  switch (action.type) {
    case "USER/SIGN_IN_REQUEST":
      return state;
    case "USER/SIGN_IN_SUCCESS":
      return state;
    case "USER/SIGN_IN_FAILURE":
      console.error(action.payload.error);
      return state;
    case "USER/SIGN_UP_REQUEST":
      return state;
    case "USER/SIGN_UP_SUCCESS":
      return state;
    case "USER/SIGN_UP_FAILURE":
      console.error(action.payload.error);
      return state;
    case "USER/UPDATE_USER":
      const { user } = action.payload;
      return { ...state, user };
    default:
      return state;
  }
};
