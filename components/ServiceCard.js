const ServiceCard = ({ title, icon }) => {
  return (
    <div className="flex gap-2 shadow-2xl bg-purple-50 p-2 items-center text-white rounded-md w-full md:w-max">
      <img className="w-16" src={icon} alt={title} srSet="" />
      <h1 className="text-md text-textDark">{title}</h1>
    </div>
  );
};

export default ServiceCard;
