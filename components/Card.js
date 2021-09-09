const Card = ({children,reversed,title,desc}) => {
    return (
       
        <div className="card relative md:flex-1 p-7 space-y-2 bg-white  shadow-lg rounded-md cursor-pointer transform scale-95 transition duration-300 hover:scale-100 hover:shadow-2xl">
            {children}
            
            <h1 className="text-xl text-darkBlue font-semibold text-center">{title}</h1>
            <p className="text-md text-textDark leading-relaxed ">{desc}</p>
        </div>
         
    );
}

export default Card;