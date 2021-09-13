const OurMissionSection = () => {
  return (
    <div
      id="our-mission"
      className="bg-darkerBlue p-7 space-y-10 pb-16 md:p-10"
    >
      <h1 className="text-center text-2xl text-white font-bold">Our Mission</h1>
      <div className="card card-mission  bg-secondary rounded-md shadow-lg p-6 md:p-7 cursor-pointer transform transition  scale-95 duration-300 hover:scale-100 hover:shadow-2xl">
        <p className="text-white font-sm text-md md:text-lg leading-relaxed ">
          We have created a way for you lovely people to change your life
          financially, by making a group of 10 people with Zero investment of
          money. To modify your life without affecting your daily lifestyle.
          Growwien's company model formulates a sustainable passive income and
          opportunities to build the financial freedom of its members.
        </p>
      </div>
    </div>
  );
};

export default OurMissionSection;
