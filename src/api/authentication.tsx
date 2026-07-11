import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return { data: (await userCredential).user };
  } catch (error) {
    const fireBaseError = error as FirebaseError;
    return {
      error: {
        code: fireBaseError.code,
        message: fireBaseError.message,
      },
    };
  }
};

export const firebaseSignInUser = async (email: string, password: string) => {
  try {
    const userCredential = signInWithEmailAndPassword(auth, email, password);

    return { data: (await userCredential).user };
  } catch (error) {
    const fireBaseError = error as FirebaseError;
    return {
      error: {
        code: fireBaseError.code,
        message: fireBaseError.message,
      },
    };
  }
};

export const firebaseRecovery = (email: string) => {
  try {
    sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const fireBaseError = error as FirebaseError;
    return {
      error: {
        code: fireBaseError.code,
        message: fireBaseError.message,
      },
    };
  }
};

export const firebaseSignout = async () => {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};
