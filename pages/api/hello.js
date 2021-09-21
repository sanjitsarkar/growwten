// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Razorpay from 'razorpay'
export default function handler(req, res) {
    if (req.method === 'POST') {
    // Process a POST request

  } else {
    res.json("Payment")
    // Handle any other HTTP method
  }
}
