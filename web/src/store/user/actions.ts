import { Credential, User } from "core/lib/entities";
import { SmapleService } from "core/lib/services";
import { SignInInteractor, SignUpInteractor } from "core/lib/useCases";
import { Dispatch } from "redux";

export const SIGN_IN_REQUEST = "USER/SIGN_IN_REQUEST" as const;
export const SIGN_IN_SUCCESS = "USER/SIGN_IN_SUCCESS" as const;
export const SIGN_IN_FAILURE = "USER/SIGN_IN_FAILURE" as const;

export const SIGN_UP_REQUEST = "USER/SIGN_UP_REQUEST" as const;
export const SIGN_UP_SUCCESS = "USER/SIGN_UP_SUCCESS" as const;
export const SIGN_UP_FAILURE = "USER/SIGN_UP_FAILURE" as const;

export const UPDATE_USER = "USER/UPDATE_USER" as const;

interface SignInRequest {
  type: typeof SIGN_IN_REQUEST;
}

interface SignInSuccess {
  type: typeof SIGN_IN_SUCCESS;
}

interface SignInFailure {
  type: typeof SIGN_IN_FAILURE;
  payload: { error: string };
}

interface SignUpRequest {
  type: typeof SIGN_UP_REQUEST;
}

interface SignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
}

interface SignUpFailure {
  type: typeof SIGN_UP_FAILURE;
  payload: { error: string };
}

interface UpdateUser {
  type: typeof UPDATE_USER;
  payload: { user: User };
}

export type UserActionType =
  | SignInRequest
  | SignInSuccess
  | SignInFailure
  | SignUpRequest
  | SignUpSuccess
  | SignUpFailure
  | UpdateUser;

const signInRequest = (): UserActionType => {
  return { type: SIGN_IN_REQUEST };
};
const signInSuccess = (): UserActionType => {
  return { type: SIGN_IN_SUCCESS };
};
const signInFailure = (error: string): UserActionType => {
  return { type: SIGN_UP_FAILURE, payload: { error } };
};

const signUpRequest = (): UserActionType => {
  return { type: SIGN_IN_REQUEST };
};
const signUpSuccess = (): UserActionType => {
  return { type: SIGN_IN_SUCCESS };
};
const signUpFailure = (error: string): UserActionType => {
  return { type: SIGN_UP_FAILURE, payload: { error } };
};

const updateUser = (user: User): UserActionType => {
  return {
    type: UPDATE_USER,
    payload: { user }
  };
};

export const signIn = (credential: Credential) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(signInRequest());
    try {
      const service = new SmapleService();
      const interactor = new SignInInteractor(service);

      const user = await interactor.signIn(credential);
      dispatch(signInSuccess());
      dispatch(updateUser(user));
    } catch (e) {
      dispatch(signInFailure(e));
    }
  };
};

export const signUp = (
  firstName: string,
  lastName: string,
  credential: Credential
) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(signUpRequest());
    try {
      const service = new SmapleService();
      const interactor = new SignUpInteractor(service);

      const user = await interactor.signUp(firstName, lastName, credential);
      dispatch(signUpSuccess());
      dispatch(updateUser(user));
    } catch (e) {
      dispatch(signUpFailure(e));
    }
  };
};
