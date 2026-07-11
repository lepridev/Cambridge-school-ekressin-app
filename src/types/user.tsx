import { Timestamp } from "firebase/firestore";

export interface UserInterface {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
  phoneNumber: string;
  photoURL: string;
  userDocument?: UserDocument;
}

export interface UserDocument {
  onboardingIsCompleted: any;
  uid: string;
  email: string;
  how_did_hear: string;
  creation_date: Timestamp;
  pseudo: string;
  specialite: string;
  biographie: string;
}
