import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/user";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function UserFirebaseAuth() {
  const [authUser, setAuthUser] = useState<UserInterface | User | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  const formatUser = (user: UserInterface) => {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
    };
  };
  const getUserDocument = (user: UserInterface) => {
    if (auth.currentUser) {
      const compactUser = user;
      const documentRef = doc(db, "users", auth.currentUser.uid);
      onSnapshot(documentRef, async (doc) => {
        if (doc.exists()) {
          compactUser.userDocument = doc.data() as UserDocument;
        }
      });
      console.log("compactUser", compactUser);
      setAuthUser(compactUser);
      // setAuthUser((prevAuthUser) => ({
      //   ...prevAuthUser,
      //   ...compactUser,
      // }));
      setAuthUserIsLoading(false);
    }
  };

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return;
    }

    setAuthUserIsLoading(true);
    const formattedUser = formatUser(authState);
    await getUserDocument(formattedUser);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsuscribe();
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
