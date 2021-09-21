import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="mt-20 p-10 leading-relaxed ">
        <h1 className="text-xl font-semibold text-textDark mb-1">
          About & Service
        </h1>
        <p className="font-normal text-gray-900 text-opacity-95">
          Concept of Our Company is in the name itself i.e, GrowwTen= Grow +
          10.It indicates that If you want to grow with us than just make a
          group of 10 people (Grow with 10 people). <br />
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            Growwten
          </h2>
          GrownTen is basically engagement of ten people to make a joint family
          of 1000 people. Grown Ten's dream is to be grow along with ten peoples
          as partnership not leadership.
          <h2 className="text-lg font-medium text-textDark mt-4 mb-1">
            {" "}
            Mission
          </h2>{" "}
          We have created a way for you lovely people to change your life
          financially, by making group of 10 people with Zero investment of
          money. To modify your life without affecting your daily life style.
          Growwien's company model formulate a sustainable passive income and
          opportunities to build financially freedom of it's member. Service
          Grown Ten's goal is is to providing 100% Geniune service at minimum
          cost to customer and healthy financial support to it's member.
          Growwten company provides-
          <br />
          <div className="mt-2 italic font-medium">
            * YouTube subscriber.
            <br /> *Instagram follower. <br /> *Facebook page follower. <br /> *
            Telegram subscriber. <br /> * Thumbnail designing. <br /> *YouTube
            channel opening <br />
          </div>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
