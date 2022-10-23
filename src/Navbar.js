import React , {useState , useEffect}from 'react';
import './Navbar.css';


function Navbar() {
    const [show , handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100 ){
                handleShow(true);
            }else handleShow(false);
        });
        // return ()=>{
        //     window.removeEventListener("scroll");
        // };
    },[]);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img
            className='nav__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" 
            alt="Netflix Logo" />
        
        <img
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/MonAvatar2022-06-06.png?20220809145957" 
            alt="Netflix Logo" />
        
        
    </div>
  )
}

export default Navbar;