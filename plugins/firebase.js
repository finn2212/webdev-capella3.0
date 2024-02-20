import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "../firebaseConfig"; // Adjust the path as needed

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize Firebase with the firebaseConfig object
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  // Provide the storage instance globally
  nuxtApp.provide("firebaseStorage", storage);
});
