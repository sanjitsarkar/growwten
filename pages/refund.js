import Footer from "../components/Footer";
import Header from "../components/Header";

const Refund = () => {
  return (
    <>
      <Header />
      <main className="mt-20 p-10 leading-relaxed ">
        <h1 className="text-xl font-semibold text-textDark mb-2">
          Refunds/Cancellations
        </h1>
        <p className="font-normal text-gray-900 text-opacity-95">
          The company, GrowwTen, deals with Advertising, marketing and Social
          Media Promotions. Due to the nature of Service offered, the clause of
          <i> ‘Physical Product Return’</i> doesn’t apply.
          <br />
          <br />
          Every effort is made to reasonably explain about the services that are
          offered on our platform (www.growwten.com).
          <br />
          <br />
          We provide 100% Genuine service at minimum cost to our client and
          healthy relationships with them.
          <br />
          <br />
          However, in the rare instance, you are still not satisfied and wish to
          proceed with a refund. <br /> <br />A customer can ask for the refund
          only within 15 days of the purchase. <br /> <br /> No Refund will be
          given to the customer after 15 days of purchase under any
          circumstances. <br /> <br />A payment gateway fee @ 2% of the paid
          amount will be deducted from the amount to be refunded. Refund Request
          email must be sent to growwten@gmail.com within 15 days of the
          purchase.
          <br /> <br />
          Our team will immediately get in touch with you within 24 hours of
          receiving your mail or messages. <br /> <br />
          You must submit or provide the proof of unsatisfied Service/Services.
          Your refunds will be processed within 5-7 days of having received such
          information.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-2">
            {" "}
            Mode of Payment{" "}
          </h2>{" "}
          Refunds will be processed to the same account which you have used
          during the purchase.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Refund;
