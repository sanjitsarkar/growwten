// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { deleteDoc, doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
// import { db } from "../../lib/firebase";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     // Process a POST request

//     const { id, type, totalAmount, isReferral } = req.body;
//     const data = await getDoc(doc(db, "pricing", "youtube_subscription"));

//     try {
//       if (isReferral === false) {
//         await setDoc(doc(db, "wallets", "GjEKpoUitjbmVfjmUE3hk1LELAE2"), {
//           referralEarning: increment(
//             (totalAmount *
//               data.data().totalReferralDistributionPercentage *
//               2) /
//               100
//           ),
//         });
//         res.json({ status: "done" });
//       }
//       await updateDoc(doc(db, "wallets", id), {
//         referralEarning: increment(
//           (totalAmount * data.data().referralPercentage) / 100
//         ),
//       });
//       const result = await getDoc(doc(db, "users", id));
//       if (result.data().teamNo === 1) {
//         await updateDoc(doc(db, "wallets", result.data().referralCode), {
//           referralEarning: increment(
//             (totalAmount * data.data().totalReferralDistributionPercentage) /
//               100
//           ),
//         });
//       } else if (result.data().teamNo === 2) {
//         await updateDoc(doc(db, "wallets", result.data().referralCode), {
//           referralEarning: increment(
//             (totalAmount * data.data().totalReferralDistributionPercentage) /
//               2 /
//               100
//           ),
//         });
//         const result1 = await getDoc(
//           doc(db, "users", result.data().referralCode)
//         );

//         await updateDoc(
//           doc(db, "wallets", result1.data().referralCode.data().referralCode),
//           {
//             referralEarning: increment(
//               (totalAmount * data.data().totalReferralDistributionPercentage) /
//                 2 /
//                 100
//             ),
//           }
//         );
//       } else if (result.data().teamNo === 3) {
//         await updateDoc(doc(db, "wallets", result.data().referralCode), {
//           referralEarning: increment(
//             (totalAmount * data.data().totalReferralDistributionPercentage) /
//               2 /
//               100
//           ),
//         });
//         const result1 = await getDoc(
//           doc(db, "users", result.data().referralCode)
//         );
//         await updateDoc(doc(db, "wallets", result1.data().referralCode), {
//           referralEarning: increment(
//             (totalAmount * data.data().totalReferralDistributionPercentage) /
//               4 /
//               100
//           ),
//         });
//         const result2 = await getDoc(
//           doc(db, "users", result1.data().referralCode)
//         );
//         await updateDoc(doc(db, "wallets", result2.data().referralCode), {
//           referralEarning: increment(
//             (totalAmount * data.data().totalReferralDistributionPercentage) /
//               4 /
//               100
//           ),
//         });
//       }

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
