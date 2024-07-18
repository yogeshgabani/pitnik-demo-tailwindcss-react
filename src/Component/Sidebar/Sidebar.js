import { useState } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { CiHeart, CiLock, CiMicrophoneOn, CiPlay1, CiSettings, CiSquareQuestion } from "react-icons/ci";
import { FaForumbee, FaList, FaRegBell, FaRegUser } from "react-icons/fa";
import { GiBeveledStar, GiCursedStar } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuSliders } from "react-icons/lu";
import { MdArrowDropDown, MdKeyboardArrowDown } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { TfiMagnet } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";

export default function SidebarLeft() {

    const [menu, setmenu] = useState(false);

     // active left menu
     const [active, setActive] = useState(null);
     const handleClick = (index) => {
         if (active === index) {
             setActive(null);
         } else {
             setActive(index);
         }
     };

    return (
        <>
            <div className={menu ? 'bg-white h-screen fixed top-[55px] w-[70px] py-7 sidebar-left open' : 'sidebar-left  hidden lg:block bg-white h-screen fixed top-[55px] w-[70px] py-7'}>
                <div className="menu-left">
                    <ul className="sidebar-list">
                        <li className="inline-block w-full" onClick={() => setmenu(!menu)}>
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#30305b] after:left-2/4 after:top-[45%] " href="#">
                                <IoMdMenu className="text-[20px] text-white" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Menu</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <TfiMagnet className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Newsfeed page</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <FaForumbee className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Forum</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <FaRegUser className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Friends</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <GiCursedStar className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Favourite Pages</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <TiMessages className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Messages</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <FaRegBell className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Notifications</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <AiOutlineLineChart className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Account Stats</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <CiSquareQuestion className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Helps</span>
                            </a>
                        </li>
                        <li className="inline-block w-full">
                            <a className="group relative flex justify-center my-[20px]  after:content-[''] after:absolute after:w-[40px] after:h-[40px] after:rounded-full after:bg-[#edf2f6] after:left-2/4 after:top-[45%] hover:after:border-solid hover:after:border-[3px] hover:after:border-[#30305b40] hover:after:bg-[#adadfd66]" href="#">
                                <HiOutlineLightBulb className="font-[20px] text-[#535165]" />
                                <span class="absolute top-0 left-[70px] scale-0 w-max transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">FAQs</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='left-menu-full bg-white absolute top-0 px-[20px] py-[30px] h-screen w-[240px] overflow-y-auto pb-[60px]'>
                    <ul>
                        <li className=" border-b-[1px] relative border-solid border-b-[#0000001a]" onClick={() => setmenu(!menu)}>
                            <a className="text-[#fa6342] text-[14px] py-[10px] inline-block w-full hover:text-[#fa6342] " href="#"><IoMdClose className="inline-block mr-[10px]" />close menu</a>
                        </li>
                        <li className=" border-b-[1px] relative border-solid border-b-[#0000001a]" >
                            <a className="text-[#535165] flex items-center text-[14px] py-[10px] hover:text-[#fa6342]" href="#" onClick={() => handleClick(0)}><IoHomeOutline className="mr-[10px]" />Home Pages</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 0 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Home 1</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Home 2</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Company Landing</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pintrest</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Redpit</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Redpit Category</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Soundnik</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Soundnik Single</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitjob</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Shop</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Classified</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitpoint</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pittube</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Messenger</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]" >
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(1)}><CiMicrophoneOn className="mr-[10px] text-[18px]" />PodCast</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 1 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Podcast</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pittube All</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Podcast Personal</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]" >
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(2)}><CiPlay1 className="mr-[10px] text-[18px]" />Pittube</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 2 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pittube</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pittube Single</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Podcast Category</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pittube Channel</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pittube Search Result</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]" >
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(3)}><CiHeart className="mr-[10px] text-[18px]" />Pitpoint</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 3 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitpoint</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitpoint Detail</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitpoint List Style</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitpoint Without Banner</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitpoint Search</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]" >
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(4)}><PiGraduationCap className="mr-[10px] text-[18px]" />Pitjob</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 4 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitjob</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Pitjob Detail</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Job Search Page</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Social Post Detail</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]" >
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(5)}><FaList className="mr-[10px] text-[18px]" />Timeline</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 5 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Timeline</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">NewsFeed</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Library</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Library Detail</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Timeline Blog</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]">
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(6)}><CiHeart className="mr-[10px] text-[18px]" />Favourite Page</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 6 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Favourite</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Games</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Price Plan</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Event Calendar</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Events</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]">
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(7)}><FaForumbee className="mr-[10px] text-[18px]" />Foram</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 7 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Forum</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Forum Topic</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Forum Category</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]">
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(8)}><GiBeveledStar className="mr-[10px] text-[18px]" />Featured</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 8 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Messanger</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Notifications</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Budges</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Manage Page</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Shop Cart</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]">
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(9)}><LuSliders className="mr-[10px] text-[18px]" />Account setting</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 9 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Setting</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Privacy</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Support & Help</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Support Detail</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Support Search</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]">
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(10)}><CiLock className="mr-[10px] text-[18px]" />Authentication</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 10 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Login Page</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">User Registration</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Logout Page</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Coming Soon</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Error 500</a>
                                </li>
                            </ul>
                        </li>
                        <li className="border-b-[1px] relative border-solid border-b-[#0000001a]">
                            <a className="text-[#535165]  flex items-center text-[14px] py-[10px]  hover:text-[#fa6342] " href="#" onClick={() => handleClick(11)}><CiSettings className="mr-[10px] text-[18px]" />Tools</a>
                            <MdArrowDropDown className="absolute end-0 top-[8px] text-[28px] text-[#c4c4c4]" />
                            <ul className={active === 11 ? "pl-7" : "hidden pl-7"}>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Typography</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Sliders</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Google Maps</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Widgets</a>
                                </li>
                                <li className="border-b-[1px] border-b-[##0000001a] border-solid">
                                    <a className="inline-block w-full text-[13px] font-medium relative text-[#797979] py-[10px] pl-4 transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342] hover:pl-[18px] after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#9292b2] after:left-0 after:top-2/4 after:-translate-y-2/4 hover:after:bg-[#fa6342]" href="#">Popups</a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                </div>

            </div>
        </>
    )
}