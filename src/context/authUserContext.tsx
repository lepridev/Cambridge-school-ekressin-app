import UserFirebaseAuth from "@/hooks/user-firebase-auth";
import { UserDocument, UserInterface } from "@/types/user";
import { createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const initial: UserInterface = {
  uid: "",
  email: "",
  displayName: "",
  emailVerified: false,
  phoneNumber: "",
  photoURL: "",
  userDocument: {} as UserDocument,
};

const authUserContext = createContext({
  authUser: initial,
  authUserIsLoading: false,
});

export function AuthUserProvider({ children }: Props) {
  const auth = UserFirebaseAuth();
  return (
    <authUserContext.Provider
      value={{
        authUser: auth.authUser,
        authUserIsLoading: auth.authUserIsLoading,
      }}
    >
      {children}
    </authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
