import { auth } from "@/firebase/clientApp";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { signOut } from "firebase/auth";
export const googleSignIn = () => {
	const provider = new GoogleAuthProvider();
	signInWithRedirect(auth, provider);
};
export const handleLogout = () => {
	signOut(auth);
};
