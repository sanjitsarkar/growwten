import Link from "next/link";

const Card = ({
  children,
  to = "/",
  reversed,
  title,
  desc,
  bgColor = "bg-white",
  textColor = "text-darkBlue",
}) => {
  return (
    <Link href={to}>
      <div
        className={`card relative md:flex-1 p-7 space-y-2 ${bgColor} shadow-lg rounded-md cursor-pointer transform scale-95 transition duration-300 hover:scale-100 hover:shadow-2xl`}
      >
        {children}

        <h1 className={`text-xl  ${textColor}  font-semibold text-center`}>
          {title}
        </h1>
        <p className="text-md text-textDark leading-relaxed ">{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
