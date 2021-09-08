const Card = ({children,reversed,title,desc}) => {
    return (
       
        <div className="relative md:flex-1 p-7 space-y-2 bg-white  shadow-lg rounded-md z-90">
            {children}
            
            <h1 className="text-xl text-darkBlue font-semibold text-center">{title}</h1>
            <p className="text-md text-textDark leading-relaxed ">{desc}</p>
        </div>
         
    );
}

export default Card;