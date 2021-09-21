// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Razorpay from "razorpay";
import shortid from "shortid";
const razorpay = new Razorpay({
  key_id: "rzp_test_H8wSfzlHwPBLL8",
  key_secret: "qe9gPLhVrcRHbvd9P1wvnd8p",
});
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request

    const { target } = req.body;
    console.log("Target", target);
    const options = {
      amount: target * 0.6 * 100,
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: 1,
    };
    try {
      const response = await razorpay.orders.create(options);
      res.json({
        id: response.id,
        amount: response.amount,
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
