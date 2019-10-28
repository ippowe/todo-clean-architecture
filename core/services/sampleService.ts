import { SignUpService, SignInService } from "../useCases";
import { Credential, Email, User } from "../entities";

export class SmapleService implements SignInService, SignUpService {
  async signInWithCredential(credential: Credential): Promise<User> {
    return Promise.resolve(
      new User("Sample Service", "User", "sampleservice@email.com")
    );
  }

  async signUpUser(user: User, credential: Credential): Promise<User> {
    return Promise.resolve(user);
  }

  async verifyExistingEmail(email: Email): Promise<boolean> {
    return Promise.resolve(false);
  }
}
