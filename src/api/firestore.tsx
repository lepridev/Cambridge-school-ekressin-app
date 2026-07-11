import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, setDoc, updateDoc } from "firebase/firestore";

export const firestoreCreateDocument = async (
  collectionName: string,
  documentID: string,
  document: object
) => {
  try {
    const documentRef = doc(db, collectionName, documentID);
    await setDoc(documentRef, document);
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

export const firestoreUpdateDocument = async (
  collectionName: string,
  documentID: string,
  document: object
) => {
  try {
    const documentRef = doc(db, collectionName, documentID);
    await updateDoc(documentRef, document);
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
