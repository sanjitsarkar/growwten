// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, getDoc } from "firebase/firestore";
import Razorpay from "razorpay";
import shortid from "shortid";
import { db } from "../../lib/firebase";
const razorpay = new Razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.KEY_SECRET,
});
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request

    const { target } = req.body;
    console.log("Target", target);
    const data = await getDoc(doc(db, "pricing", "youtube_subscription"));

    const options = {
      amount:
        (target * data.data().rate +
        ((target * data.data().rate * data.data().transactionFee) / 100)) * 100,
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: 1,
    };
    try {
      const response = await razorpay.orders.create(options);
      res.json({
        id: response.id,
        amount: response.amount,
        amountFee:target * data.data().rate,
        currency: response.currency,
      });
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  } else {
    res.json("Payment");
    // Handle any other HTTP method
  }
}
