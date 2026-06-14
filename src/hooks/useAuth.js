import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { authInstance } from "../config/firebase";

export const useAuth = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    /**
     * Signs in an existing user using their email and password.
     * 
     * @param {string} email - The user's registered email address.
     * @param {string} password - The user's account password.
     * @returns {Promise<import("firebase/auth").UserCredential>} A promise that resolves with the user credentials.
     * @throws {Error} Throws an error if the sign-in fails.
     */
    const login = async (email, password) => {
        try {
            return signInWithEmailAndPassword(authInstance, email, password)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Registers a new user account and initializes their profile with a display name.
     * 
     * @param {string} email - The email address for the new account.
     * @param {string} username - The display name to assign to the user's profile.
     * @param {string} password - The password for the new account.
     * @returns {Promise<void>} A promise that resolves when registration and profile update are complete.
     * @throws {Error} Throws an error if account creation or profile update fails.
     */
    const register = async (email, username, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
            const { user } = userCredential;
            await updateProfile(user, {
                displayName: username
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Signs out the currently authenticated user.
     * 
     * @returns {Promise<void>} A promise that resolves when the user has been signed out.
     * @throws {Error} Throws an error if the sign-out process fails.
     */
    const logout = async () => {
        try {
            await signOut(authInstance)
        } catch (error) {
            throw new Error(error);
        }
    }

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(authInstance, googleProvider)
        } catch (error) {
            throw new Error(error);
        }
    }

    const loginWithFacebook = async () => {
        try {
            const result = await signInWithPopup(authInstance, facebookProvider)
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        login,
        loginWithGoogle,
        loginWithFacebook,
        register,
        logout
    }
}