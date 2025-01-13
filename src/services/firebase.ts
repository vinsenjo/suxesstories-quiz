import { collection, getDocs } from "firebase/firestore";
import { Question } from "../types/question";
import { db } from "../libs/firebase/init";

const getQuestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "questions"));
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Question, "id">),
    }));
    return items;
  } catch (error) {
    console.log(error);
  }
};

export { getQuestions };
