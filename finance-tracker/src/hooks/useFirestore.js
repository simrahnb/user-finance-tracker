import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let intialState = {
  document: null,
  isPending: false,
  error: null,
  succes: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  const [isCancelled, setIsCancelled] = useState(false); // for cleanup function

  // collection ref
  const ref = projectFirestore.collection(collection);

  // add a document
  const addDocument = (doc) => {};

  // delete a document
  const deleteDocument = (id) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
