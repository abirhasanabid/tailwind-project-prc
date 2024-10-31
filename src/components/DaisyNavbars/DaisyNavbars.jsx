import { useState } from "react";
import DaisyNavbar from "../DaisyNavbar/DaisyNavbar";
import { RiMenu2Line } from "react-icons/ri";
// import { RxCross1 } from "react-icons/rx";

const DaisyNavbars = () => {
    // fake data for navber 
    const navData = [
        {
            "id": 1,
            "label": "Home",
            "link": "/home"
        },
        {
            "id": 2,
            "label": "About",
            "link": "/about"
        },
        {
            "id": 3,
            "label": "Services",
            "link": "/services"
        },
        {
            "id": 4,
            "label": "Contact",
            "link": "/contact"
        },
        {
            "id": 5,
            "label": "Blog",
            "link": "/blog"
        }
    ];

    const [menuBtn, setMenuBtn] = useState(false);

    return (
        <nav className="">

            <div className="md:hidden text-3xl" onClick={() => setMenuBtn(!menuBtn)}>
                {
                    menuBtn === true ?  <RiMenu2Line ></RiMenu2Line> : <RiMenu2Line ></RiMenu2Line>
                }
            </div>
            <ul className={`md:flex gap-12 absolute md:static duration-500 font-semibold bg-orange-700 px-8 rounded-md text-white z-20 ${menuBtn ? 'top-8' : '-top-96'}`}>
                {
                    navData.map(data => <DaisyNavbar key={data.id} data={data}></DaisyNavbar>)
                }
            </ul>
        </nav>
    );
};

export default DaisyNavbars;