import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDBk5Goc2iaBcB0Dv0GkS16x_b5mS_i_W4",
  authDomain: "vanslife-5eb9f.firebaseapp.com",
  projectId: "vanslife-5eb9f",
  storageBucket: "vanslife-5eb9f.appspot.com",
  messagingSenderId: "807092995602",
  appId: "1:807092995602:web:cbb20e138015a0a994facb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

// Rfactor fetching functions

export async function fetchVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
}

export async function fetchVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  const data = {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };

  return data;
}

export async function fetchHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
}

export async function fetchHostVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  const data = {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };

  return data;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  // Parse the valid response and return the data
  return data;
}
