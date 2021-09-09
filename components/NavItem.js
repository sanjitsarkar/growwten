const NavItem = ({active,_class,to,title,setActive}) => {
    const handleClick = (e) =>{
setActive(_class)
    }
    return (
        <a onClick={(e)=>handleClick(e)}  href={to}  className={`nav-item  ${active===_class && 'active'}`} >{title}</a>

    );
}

export default NavItem;