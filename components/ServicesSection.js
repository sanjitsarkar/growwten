import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div id="services" className="bg-tertiary p-7 space-y-10 pb-16 md:p-10">
      <h1 className="text-center text-2xl text-white font-bold">
        Our Services
      </h1>
      <div className="card card-services bg-white fancy rounded-md shadow-lg p-6  md:p-7 cursor-pointer transform transition  scale-95 duration-300 hover:scale-100 hover:shadow-2xl">
        <p className="text-textDark font-md text-md md:text-lg leading-relaxed ">
          Grown Ten's goal is to provide 100% Genuine service at minimum cost to
          customers and healthy financial support to its member. Growwten
          company provides
        </p>
        <div className="flex flex-wrap gap-4 mt-7 ">
          <ServiceCard
            title="YouTube subscriber"
            icon="https://img.icons8.com/cute-clipart/2x/youtube-play.png"
          />
          <ServiceCard
            title="Instagram follower"
            icon="https://img.icons8.com/cute-clipart/2x/instagram-new.png"
          />
          <ServiceCard
            title="Facebook page follower"
            icon="https://img.icons8.com/cute-clipart/2x/facebook-new.png"
          />
          <ServiceCard
            title="Telegram subscriber"
            icon="https://img.icons8.com/cute-clipart/2x/telegram-app.png"
          />
          <ServiceCard
            title="Thumbnail designing"
            icon="https://img.icons8.com/cute-clipart/2x/image-gallery.png"
          />
          <ServiceCard
            title="YouTube channel opening "
            icon="https://img.icons8.com/cute-clipart/2x/youtube.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
