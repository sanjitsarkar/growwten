// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {
//   deleteDoc,
//   doc,
//   getDoc,
//   increment,
//   setDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "../../lib/firebase";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     // Process a POST request

//     const { id, type, action, taskId } = req.body;
//     const data = await getDoc(doc(db, "pricing", "youtube_subscription"));

//     try {
//       if (action === "decrement") {
//         await deleteDoc(doc(db, `users/${id}/tasks`, taskId));
//         await updateDoc(doc(db, "tasks", taskId), {
//           completed: increment(-1),
//         });
//       } else {
//         await setDoc(doc(db, `users/${id}/tasks`, taskId), {
//           status: true,
//         });
//         await updateDoc(doc(db, "tasks", taskId), {
//           completed: increment(1),
//         });
//       }
//       const earning =
//         action === "increment"
//           ? increment(Number(data.data().amountDistributionPerUser))
//           : increment(-Number(data.data().amountDistributionPerUser));
//       await updateDoc(
//         doc(db, "wallets", id, {
//           selfEarning: earning,
//         })
//       );

//       res.json({ status: "done" });
//     } catch (e) {
//       console.log(e);
//       res.json(e);
//     }
//   } else {
//     res.json("Payment");
//     // Handle any other HTTP method
//   }
// }
