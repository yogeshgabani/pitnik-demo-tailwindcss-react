import { FaRegChartBar, FaStar, FaTwitter, FaUserPlus } from 'react-icons/fa';
import { PiCameraFill } from 'react-icons/pi';
import { FiClipboard, FiMessageCircle } from 'react-icons/fi';
import { FaSliders, FaUserXmark } from 'react-icons/fa6';
import '../../Pages/Timeline/timeline.css';
import React, { useEffect } from 'react';
import profileimg from '../../Assets/Images/profile-image.jpg';
import author from '../../Assets/Images/author.jpg';
import { MdMoreHoriz } from 'react-icons/md';

import avtar1 from '../../Assets/Images/friend-avatar.jpg';
import avtar2 from '../../Assets/Images/friend-avatar2.jpg';
import avtar3 from '../../Assets/Images/friend-avatar3.jpg';
import avtar4 from '../../Assets/Images/friend-avatar4.jpg';
import avtar5 from '../../Assets/Images/friend-avatar5.jpg';
import badge_one from '../../Assets/Images/badge1.png';
import badge_two from '../../Assets/Images/badge2.png';
import badge_three from '../../Assets/Images/badge3.png';
import badge_four from '../../Assets/Images/badge8.png';
import badge_five from '../../Assets/Images/badge10.png';
import badge_six from '../../Assets/Images/badge20.png';
import badge_seven from '../../Assets/Images/badge21.png';
import badge_eight from '../../Assets/Images/year10.png';
import add from '../../Assets/Images/ad-widget.gif';
import { RiShareForward2Fill } from 'react-icons/ri';
import { CiBellOn, CiDesktopMouse2, CiImageOn, CiPower, CiUser } from 'react-icons/ci';
import { HiOutlineVideoCamera } from 'react-icons/hi2';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { LuFiles, LuMoreHorizontal } from 'react-icons/lu';
import Createpost from '../../Component/Common/Createpost';
import Newspost from '../../Component/Common/Newspost';
import userposter from '../../Assets/Images/user-post.jpg';
import sponser from '../../Assets/Images/sponsors.gif';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Yourpage from '../../Component/Common/Yourpage';
import Footers from '../../Component/Common/Footers';
import book from '../../Assets/Images/book-icon.png';
import { IoSearchOutline } from 'react-icons/io5';
import friends from '../../Jsonfile/friends';
import project from '../../Jsonfile/suggest';


export default function Timeline() {
    

    const [showModal, setShowModal] = React.useState(false);
    console.log(friends)
    console.log(project)

    // tabs
    const [openTab, setOpenTab] = React.useState(1);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <>
            <div className='pt-[80px]'>
                <div className="container mx-auto xl:px-[100px] lg:px-[60px] px-0">
                    <div className='relative profile-img'>
                        <img src={profileimg} className='rounded-t-[5px]' alt="" />
                        <div className='flex items-center gap-1 absolute right-[20px] top-[20px]'>
                            <FaStar className='text-[#ffa500]' />
                            <FaStar className='text-[#ffa500]' />
                            <FaStar className='text-[#ffa500]' />
                            <FaStar className='text-[#ffa500]' />
                            <FaStar className='text-[#c9c9c9]' />
                            <span className='text-white text-[15px]'>4.7/5</span>
                        </div>
                        <div className='bg-[#00000080] camera-icon flex items-center justify-center rounded-full h-10 w-10 transition-all duration-200 ease-linear delay-0 scale-0 opacity-0 absolute top-[10px] left-[10px] '>
                            <PiCameraFill className='text-white text-[18px]' />
                        </div>
                        <ul className='bg-[#ffffff66] rounded-l-[7px] py-[7px] px-[14px] flex items-center absolute md:opacity-100 opacity-0 bottom-[20px] right-0'>
                            <li className='me-1 bg-[#fa6342] h-10 w-10 rounded-full flex justify-center items-center'>
                                <a className="group relative flex justify-center   " href="#">
                                    <FaUserPlus className='text-white' />
                                    <span class="absolute top-[-35px] left-[-20px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100 ">Add Friend</span>
                                </a>
                            </li>
                            <li className='me-1  bg-[#7750f8] h-10 w-10 rounded-full flex justify-center items-center hover:bg-[#fa6342]'>
                                <a className="group relative flex justify-center   " href="#">
                                    <FaStar className='text-white' />
                                    <span class="absolute top-[-35px] left-[-10px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100 ">Follow</span>
                                </a>
                            </li>
                            <li className='me-1  bg-[#3ca9fc] h-10 w-10 rounded-full flex justify-center items-center hover:bg-[#fa6342]' >
                                <a className="group relative flex justify-center   " href="#">
                                    <FiMessageCircle className='text-white' onClick={() => setShowModal(true)} />
                                    <span class="absolute top-[-35px] left-[-20px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">Send Message</span>
                                </a>

                            </li>
                            <li className='me-1 relative group  bg-[#857ec3] h-10 w-10 rounded-full flex justify-center items-center cursor-pointer'>
                                <a className=" relative flex justify-center   " href="#">
                                    <FaSliders className='text-white' />
                                </a>
                                <ul className='w-[150px] text-[#858aa5] bg-white rounded-[4px] absolute transition-all duration-200  ease-linear top-[40px] right-0 delay-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'>
                                    <li className=''>
                                        <a className='text-[12px] px-4 py-2  transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Update Profile Photo</a>
                                    </li>
                                    <li className=''>
                                        <a className='text-[12px] px-4 py-2 transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Update Header Photo</a>
                                    </li>
                                    <li className=''>
                                        <a className='text-[12px] px-4 py-2 transition-all w-full flex duration-200 ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Account Settings</a>
                                    </li>
                                    <li className=''>
                                        <a className='text-[12px] px-4 py-2 transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Find Support</a>
                                    </li>
                                    <li className=''>
                                        <a className='text-[12px] px-4 py-2 transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Report Profile</a>
                                    </li>
                                    <li className=''>
                                        <a className='text-[12px] px-4 py-2 transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Block Profile</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className='absolute 2xl:bottom-5 2xl:left-5 2xl:-translate-x-0 2xl:-translate-y-0  lg:bottom-5 lg:left-5 lg:-translate-x-0 lg:-translate-y-0 md:-translate-x-0 md:-translate-y-0 md:bottom-5 md:left-5 sm:top-2/4 sm:left-2/4 sm:-translate-x-2/4 sm:-translate-y-2/4 left-[20px] top-2/4 '>
                            <div className='relative inline-block group'>
                                <img className='border-[3px] border-solid border-white md:max-w-[155px] md:max-h-[155px] max-h-[80px] max-w-[80px] rounded-full' src={author} alt="" />
                                <div className='bg-[#ffffffb3] border-[1px] border-solid border-[#b3b3b3] flex items-center justify-center rounded-full h-10 w-10 transition-all duration-200 ease-linear delay-0 scale-0 opacity-0 absolute bottom-3 right-0 group-hover:scale-100 group-hover:opacity-100'>
                                    <PiCameraFill className='text-[#222] text-[18px]' />
                                    <input type="file" className='absolute top-0 left-0 opacity-0' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white py-4 pb-0 mb-7 flex md:justify-between justify-center items-center lg:flex-nowrap flex-wrap md:gap-3 gap-0 px-3'>
                        <div className='text-center '>
                            <h4 className='text-[#333] text-[20px] font-medium'>Jack Carter</h4>
                            <p className='text-[12px] text-[#474962]'>Ontario, CA</p>
                        </div>
                        <div className=''>
                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-[10px] flex-row" role="tablist">
                                <li className=" flex-auto text-center">
                                    <a className={"text-[14px] font-medium px-5 py-3  block relative " +
                                        (openTab === 1
                                            ? "text-[#fa6342] arrow-down"
                                            : "text-[#474962]")}
                                        onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#link1" role="tablist">
                                        Timeline
                                    </a>
                                </li>
                                <li className="flex-auto text-center">
                                    <a className={"text-[14px] font-medium px-5 py-3  block relative " +
                                        (openTab === 2
                                            ? "text-[#fa6342] arrow-down"
                                            : "text-[#474962]")}
                                        onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#link1" role="tablist">
                                        About
                                    </a>
                                </li>
                                <li className=" flex-auto text-center">
                                    <a className={"text-[14px] font-medium px-5 py-3  block relative " +
                                        (openTab === 3
                                            ? "text-[#fa6342] arrow-down"
                                            : "text-[#474962]")}
                                        onClick={e => { e.preventDefault(); setOpenTab(3); }} data-toggle="tab" href="#link1" role="tablist">
                                        Friends
                                    </a>
                                </li>
                                <li className=" flex-auto text-center">
                                    <a className={"text-[14px] font-medium px-5 py-3  block relative " +
                                        (openTab === 4
                                            ? "text-[#fa6342] arrow-down"
                                            : "text-[#474962]")}
                                        onClick={e => { e.preventDefault(); setOpenTab(4); }} data-toggle="tab" href="#link1" role="tablist">
                                        Photos
                                    </a>
                                </li>
                                <li className="flex-auto text-center">
                                    <a className={"text-[14px] font-medium px-5 py-3  block relative " +
                                        (openTab === 5
                                            ? "text-[#fa6342] arrow-down"
                                            : "text-[#474962]")}
                                        onClick={e => { e.preventDefault(); setOpenTab(5); }} data-toggle="tab" href="#link1" role="tablist">
                                        Videos
                                    </a>
                                </li>
                                <li className="flex-auto flex justify-center items-center group relative">
                                    <a className="text-[20px] font-medium bg-[#adadfd66] flex justify-center items-center rounded-full w-[35px] h-[35px] cursor-pointer group-hover:bg-[#adadfd33]">
                                        <MdMoreHoriz />
                                    </a>
                                    <ul style={{ boxShadow: '0 10px 20px rgba(0,0,0,.1)' }} className='bg-white rounded-[5px] w-[150px] absolute top-[80px] left-2/4 transition-all duration-200 ease-linear delay-0 invisible -translate-x-2/4 -translate-y-2/4 scale-0 group-hover:visible group-hover:scale-100'>
                                        <li className='text-[13px] py-[10px] px-[12px] transition-all duration-200 ease-linear delay-0 hover:bg-[#f1f1f1] hover:text-[$505050]'>Profile Groups</li>
                                        <li className='text-[13px] py-[10px] px-[12px] transition-all duration-200 ease-linear delay-0 hover:bg-[#f1f1f1] hover:text-[$505050]'>Profile Analytics</li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <div className='px-3 '>
                            <ul className='flex items-center  justify-between gap-2'>
                                <li className='text-center'>
                                    <h5 className='text-[#535165] font-medium text-[14px]'>Posts</h5>
                                    <span className='text-[#fa6342] text-[14px] '>101</span>
                                </li>
                                <li className='text-center'>
                                    <h5 className='text-[#535165] font-medium text-[14px]'>Followers</h5>
                                    <span className='text-[#fa6342] text-[14px] '>1.3K</span>
                                </li>
                                <li className='text-center'>
                                    <h5 className='text-[#535165] font-medium text-[14px]'>Folowing</h5>
                                    <span className='text-[#fa6342] text-[14px] '>22</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className='grid grid-cols-1 lg:grid-cols-4 md:gap-4 gap-0 sm:px-0 px-[20px]'>
                                    <div className='main-content'>
                                        {/* user badges */}
                                        <div className="widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className="border-b-[1px] flex items-center  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] mb-5 w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                                <h4>User Badges</h4>
                                                <a className='ms-auto text-[#fa6342] text-[12px] hover:text-[#0056b3]' href="#">View All</a>
                                            </div>
                                            <div className='xl:p-8 p-2'>
                                                <ul>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_two} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">male user</span>
                                                        </a>
                                                    </li>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_eight} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">10 year old user</span>
                                                        </a>
                                                    </li>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_one} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">page admin</span>
                                                        </a>
                                                    </li>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_four} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">100 referal</span>
                                                        </a>
                                                    </li>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_seven} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">trading post</span>
                                                        </a>
                                                    </li>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_three} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">1000+ subscriber</span>
                                                        </a>
                                                    </li>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_five} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">pitnik winner</span>
                                                        </a>
                                                    </li>
                                                    <li className='w-10 me-1 inline-block mb-2'>
                                                        <a className="group relative flex justify-center   " href="#">
                                                            <img className='max-w-full' src={badge_six} alt="" />
                                                            <span class="absolute top-[-25px] left-[0px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">500+ followers</span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        {/* weather photo */}
                                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className='weather-img relative'>
                                                <div className='icon sun-shower'>
                                                    <div className='cloud'></div>
                                                    <div className='sun'>
                                                        <div className='rays'></div>
                                                    </div>
                                                    <div className='rain'></div>
                                                </div>
                                                <div className='relative px-10'>
                                                    <div className='absolute z-10'>
                                                        <span className='text-white text-[31px] relative after:absolute after:border-[2px] after:border-solid after:border-white after:rounded-full after:h-[10px] after:w-[10px] after:top-[2px]'>25</span>
                                                        <h3 className='text-white text-[20px] leading-[15px]'>Cloudy Skyes</h3>
                                                        <span className='text-[13px] text-white'>Sicklervilte, New Jersey</span>
                                                    </div>
                                                    <div className='text-white text-center bg-[#fa6342] rounded-l-[10px] p-[14px] absolute top-0 right-0 z-[2]'>
                                                        <span className='text-[14px]'>MAY</span>
                                                        <p className='text-[20px] font-bold leading-[13px]'>21</p>
                                                    </div>
                                                </div>
                                                <div className='my-5 absolute bottom-0 w-full z-[1]'>
                                                    <ul className='bg-[#ffffff4d] p-[10px] flex items-center justify-between gap-2'>
                                                        <li>
                                                            <span className='text-[10px] text-white'>Sun</span>
                                                            <p className='text-[10px] text-white'>40°</p>
                                                        </li>
                                                        <li>
                                                            <span className='text-[10px] text-white'>Mon</span>
                                                            <p className='text-[10px] text-white'>10°</p>
                                                        </li>
                                                        <li>
                                                            <span className='text-[10px] text-white'>Tue</span>
                                                            <p className='text-[10px] text-white'>20°</p>
                                                        </li>
                                                        <li>
                                                            <span className='text-[10px] text-white'>Wed</span>
                                                            <p className='text-[10px] text-white'>34°</p>
                                                        </li>
                                                        <li>
                                                            <span className='text-[10px] text-white'>Thu</span>
                                                            <p className='text-[10px] text-white'>22°</p>
                                                        </li>
                                                        <li>
                                                            <span className='text-[10px] text-white'>Fri</span>
                                                            <p className='text-[10px] text-white'>26°</p>
                                                        </li>
                                                        <li>
                                                            <span className='text-[10px] text-white'>Sat</span>
                                                            <p className='text-[10px] text-white'>30°</p>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        {/* twitter feed */}
                                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className="border-b-[1px] flex items-center  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] mb-5 w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                                <h4>Twitter feed</h4>
                                            </div>
                                            <div className='px-5 h-[395px] overflow-hidden overflow-y-auto'>
                                                <ul className=''>
                                                    <li className='mb-[14px]'>
                                                        <div className='flex'>
                                                            <FaTwitter className="text-[#38bff1] me-2 mt-[3px]" />
                                                            <div>
                                                                <h4 className='text-[#545454] text-[14px] font-medium capitalize'>jhon william</h4>
                                                                <p className='text-[#999] text-[12px] '>@jhonwilliam</p>
                                                            </div>
                                                        </div>
                                                        <p className='text-[13px] text-[#727895] leading-[22px] mt-2'>
                                                            tomorrow with the company we were working and 5 child run away from the working place. <span className='text-[#fa6342] text-[12px]'>#daydream5k</span>
                                                        </p>
                                                        <p className='text-#727272] text-[11px]'>2 hours ago</p>
                                                    </li>
                                                    <li className='mb-[14px]'>
                                                        <div className='flex'>
                                                            <FaTwitter className="text-[#38bff1] me-2 mt-[3px]" />
                                                            <div>
                                                                <h4 className='text-[#545454] text-[14px] font-medium capitalize'>Kelly Watson</h4>
                                                                <p className='text-[#999] text-[12px] '>@kelly</p>
                                                            </div>
                                                        </div>
                                                        <p className='text-[13px] text-[#727895] leading-[22px] mt-2'>
                                                            tomorrow with the company we were working and 5 child run away from the working place. <span className='text-[#fa6342] text-[12px]'>#daydream5k</span>
                                                        </p>
                                                        <p className='text-#727272] text-[11px]'>2 hours ago</p>
                                                    </li>
                                                    <li className='mb-[14px]'>
                                                        <div className='flex'>
                                                            <FaTwitter className="text-[#38bff1] me-2 mt-[3px]" />
                                                            <div>
                                                                <h4 className='text-[#545454] text-[14px] font-medium capitalize'> Jony Bravo</h4>
                                                                <p className='text-[#999] text-[12px] '>@jonibravo</p>
                                                            </div>
                                                        </div>
                                                        <p className='text-[13px] text-[#727895] leading-[22px] mt-2'>
                                                            tomorrow with the company we were working and 5 child run away from the working place. <span className='text-[#fa6342] text-[12px]'>#daydream5k</span>
                                                        </p>
                                                        <p className='text-#727272] text-[11px]'>2 hours ago</p>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        {/* advertisement */}
                                        <div className='mt-4 widget widget'>
                                            <h3 className='text-[13px] font-normal'>Advertisment</h3>
                                            <img src={add} alt="" />
                                        </div>

                                        {/* shortcut menu */}
                                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className="border-b-[1px] flex items-center  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] mb-5 w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                                <h4>Shortcuts</h4>
                                            </div>
                                            <div className='px-5'>
                                                <ul>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <FiClipboard className='text-[18px] me-3' />
                                                        News Feed
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <CiDesktopMouse2 className='text-[18px] me-3' />
                                                        Inbox
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <LuFiles className='text-[18px] me-3' />
                                                        My Pages
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <CiUser className='text-[18px] me-3' />
                                                        Friends
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <CiImageOn className='text-[18px] me-3' />
                                                        Images
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <HiOutlineVideoCamera className='text-[18px] me-3' />
                                                        Videos
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <TfiCommentsSmiley className='text-[18px] me-3' />
                                                        Messages
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <CiBellOn className='text-[18px] me-3' />
                                                        Notifications
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <RiShareForward2Fill className='text-[18px] me-3' />
                                                        People Nearby
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <FaRegChartBar className='text-[18px] me-3' />
                                                        Insights
                                                    </li>
                                                    <li className='text-[13px] mb-[14px] font-normal flex items-center text-[#474962] hover:text-[#fa6342] cursor-pointer'>
                                                        <CiPower className='text-[18px] me-3' />
                                                        Logout
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* recent activity */}
                                        <div className="mt-4 widget widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className="border-b-[1px]  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                                <h4>Recent Activity</h4>
                                            </div>
                                            <div className='p-4'>
                                                <ul>
                                                    <li className='leading-[1] border-l-[2px] border-l-[#fa6342] border-solid ps-2 mb-4'>
                                                        <p className='text-[12px] text-[#999]'>10 hours Ago</p>
                                                        <span className='text-[13px] font-medium'><a href="" className='hover:text-[#fa6342]'>Commented on Video posted </a></span>
                                                        <h6 className='text-[15px] leading-[1.2]'>by <a className='text-[#fa6342]' href="">black demon.</a></h6>
                                                    </li>
                                                    <li className='leading-[1] border-l-[2px] border-l-[#fa6342] border-solid ps-2 mb-4'>
                                                        <p className='text-[12px] text-[#999]'>30 hours Ago</p>
                                                        <span className='text-[13px] font-medium'><a href="" className='hover:text-[#fa6342]'>Posted your status. “Hello guys, how are you?”</a></span>
                                                        {/* <h6 className='text-[15px] leading-[1.2]'>by <a className='text-[#fa6342]' href="">black demon.</a></h6> */}
                                                    </li>
                                                    <li className='leading-[1] border-l-[2px] border-l-[#fa6342] border-solid ps-2 mb-4'>
                                                        <p className='text-[12px] text-[#999]'>2 Years Ago</p>
                                                        <span className='text-[13px] font-medium'><a href="" className='hover:text-[#fa6342]'>Share a video on her timeline.</a></span>
                                                        <h6 className='text-[15px] leading-[1.2]'>"<a className='text-[#fa6342]' href="">you are so funny mr.been.</a>"</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* who,s following */}
                                        <div className="mt-4 widget widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className="border-b-[1px]  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                                <h4>Who's Followinig</h4>
                                            </div>
                                            <div className='p-4'>
                                                <ul>
                                                    <li className='flex items-center mb-2'>
                                                        <img className='w-[40px] h-[40px] rounded-full' src={avtar1} alt="" />
                                                        <a className='text-[#535165] text-[13px] ms-[15px] font-medium hover:text-[#fa6342]' href="">Kelly Bill</a>
                                                        <a className='text-[#fa6342] text-[12px] font-medium ms-auto table relative after:transition-all after:duration-200 after:ease-linear after:delay-0 after:absolute after:h-[1px] after:w-full after:bg-[#fa6342] after:-bottom-[5px] after:left-0 after:invisible after:opacity-0 hover:after:opacity-100 hover:after:visible hover:after:bottom-[2px]' href="#">Add Friend</a>
                                                    </li>
                                                    <li className='flex items-center mb-2'>
                                                        <img className='w-[40px] h-[40px] rounded-full' src={avtar2} alt="" />
                                                        <a className='text-[#535165] text-[13px] ms-[15px] font-medium hover:text-[#fa6342]' href="">Issabel</a>
                                                        <a className='text-[#fa6342] text-[12px] font-medium ms-auto table relative after:transition-all after:duration-200 after:ease-linear after:delay-0 after:absolute after:h-[1px] after:w-full after:bg-[#fa6342] after:-bottom-[5px] after:left-0 after:invisible after:opacity-0 hover:after:opacity-100 hover:after:visible hover:after:bottom-[2px]' href="#">Add Friend</a>
                                                    </li>
                                                    <li className='flex items-center mb-2'>
                                                        <img className='w-[40px] h-[40px] rounded-full' src={avtar3} alt="" />
                                                        <a className='text-[#535165] text-[13px] ms-[15px] font-medium hover:text-[#fa6342]' href="">Andrew</a>
                                                        <a className='text-[#fa6342] text-[12px] font-medium ms-auto table relative after:transition-all after:duration-200 after:ease-linear after:delay-0 after:absolute after:h-[1px] after:w-full after:bg-[#fa6342] after:-bottom-[5px] after:left-0 after:invisible after:opacity-0 hover:after:opacity-100 hover:after:visible hover:after:bottom-[2px]' href="#">Add Friend</a>
                                                    </li>
                                                    <li className='flex items-center mb-2'>
                                                        <img className='w-[40px] h-[40px] rounded-full' src={avtar4} alt="" />
                                                        <a className='text-[#535165] text-[13px] ms-[15px] font-medium hover:text-[#fa6342]' href="">Sophia</a>
                                                        <a className='text-[#fa6342] text-[12px] font-medium ms-auto table relative after:transition-all after:duration-200 after:ease-linear after:delay-0 after:absolute after:h-[1px] after:w-full after:bg-[#fa6342] after:-bottom-[5px] after:left-0 after:invisible after:opacity-0 hover:after:opacity-100 hover:after:visible hover:after:bottom-[2px]' href="#">Add Friend</a>
                                                    </li>
                                                    <li className='flex items-center mb-2'>
                                                        <img className='w-[40px] h-[40px] rounded-full' src={avtar5} alt="" />
                                                        <a className='text-[#535165] text-[13px] ms-[15px] font-medium hover:text-[#fa6342]' href="">Allen</a>
                                                        <a className='text-[#fa6342] text-[12px] font-medium ms-auto table relative after:transition-all after:duration-200 after:ease-linear after:delay-0 after:absolute after:h-[1px] after:w-full after:bg-[#fa6342] after:-bottom-[5px] after:left-0 after:invisible after:opacity-0 hover:after:opacity-100 hover:after:visible hover:after:bottom-[2px]' href="#">Add Friend</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-span-2'>
                                        {/* create post */}
                                        <div>
                                            <Createpost />
                                        </div>

                                        {/* suggest friends */}
                                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className="border-b-[1px] flex items-center  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] mb-5 w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                                <h4>Suggests Friend's</h4>
                                                <a className='ms-auto text-[#fa6342] text-[12px] hover:text-[#0056b3]' href="#">View All</a>
                                            </div>
                                            <div className="slider-container mb-10">
                                                <Slider {...settings}>
                                                    {
                                                        project.map((ind) => {
                                                            console.log(ind)
                                                            console.log(ind.image)
                                                            return (
                                                                <>

                                                                    <div className='bg-[#f2f7fb] m-[10px] border-[1px] border-solid border-[#ede9e9] rounded-[3px] '>
                                                                        <img src={ind.image} alt="" />
                                                                        <div className='text-center p-2'>
                                                                            <h3 className='text-[#474962]  text-[14px] font-medium transition-all duration-200 ease-linear delay-0 hover:text-[#fa6342]'>{ind.title}</h3>
                                                                            <span className='text-[11px] '>{ind.friend}</span>
                                                                            <div className='flex justify-center items-center mt-1'>
                                                                                <button className='py-[5px] bg-[#3ca9fc] px-[10px] rounded-[3px] me-4  transition-all  duration-200 ease-linear delay-0 hover:bg-[#fa6342]'><FaUserPlus className='text-white m-auto' /></button>
                                                                                <button className='py-[5px] bg-[#a8adcd] px-[10px] rounded-[3px]  transition-all  duration-200 ease-linear delay-0 hover:bg-[#fa6342]'><FaUserXmark className='text-white bg-' /></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </>
                                                            )
                                                        })
                                                    }
                                                </Slider>
                                            </div>
                                        </div>

                                        <div>
                                            <Newspost imagepost={userposter} />
                                        </div>
                                        <div>
                                            <Newspost imagepost={sponser} />
                                        </div>
                                        <div>
                                            <Newspost />
                                        </div>
                                    </div>

                                    <div>
                                        {/* your page */}
                                        <div>
                                            <Yourpage />
                                        </div>

                                        {/* profile info */}
                                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                            <div className="border-b-[1px] flex items-center  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] mb-5 w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                                <h4>Profile Intro</h4>
                                            </div>
                                            <div className='p-5 pt-0'>
                                                <ul>
                                                    <li className='border-b-[1px] pb-[10px] border-solid border-b-[#eaeaea] mb-[14px]'>
                                                        <h4 className='text-[14px] font-medium mb-[5px] '>About</h4>
                                                        <p className='text-[12px] text-[#727895] leading-[22px] '>Hi, i am jhon kates, i am 32 years old and worked as a web developer in microsoft</p>
                                                    </li>
                                                    <li className='border-b-[1px] pb-[10px] border-solid border-b-[#eaeaea] mb-[14px]'>
                                                        <h4 className='text-[14px] font-medium mb-[5px] '>Fav Tv Show</h4>
                                                        <p className='text-[12px] text-[#727895] leading-[22px] '>Sacred Games, Spartcus Blood, Games of Theron</p>
                                                    </li>
                                                    <li className='border-b-[1px] pb-[10px] border-solid border-b-[#eaeaea] mb-[14px]'>
                                                        <h4 className='text-[14px] font-medium mb-[5px] '>Favourit Music</h4>
                                                        <p className='text-[12px] text-[#727895] leading-[22px] '>Justin Biber, Shakira, Nati Natasah</p>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        {/* page */}
                                        <div className='relative w-full mt-4'>
                                            <div className='relative p-5 after:absolute after:content-[""] after:bg-[#9e72fa] after:top-0 after:left-0 after:w-full after:h-full after:opacity-75'>
                                                <div className='banner-bg absolute top-0 left-0'></div>
                                                <div className='relative z-[1] flex justify-between items-center'>
                                                    <img src={book} alt="" />
                                                    <LuMoreHorizontal className='text-[20px] text-white' />
                                                </div>
                                                <div className='mt-4 relative z-[1] text-center'>
                                                    <p className='text-[23px] font-normal text-white'>CREATE YOUR OWN FAVOURIT PAGE.</p>
                                                    <span className='text-[13px] text-white'>like them all</span>
                                                    <button className='text-black mt-7 py-[8px] w-full text-center bg-white transition-all duration-200 delay-0 ease-linear hover:text-white hover:bg-[#fa6342]'>Start Now!</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* footer */}
                                        <div className='mt-4'>
                                            <Footers />
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <div className='mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px] p-4'>
                                    about
                                </div>
                            </div>


                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div className="mt-4 p-5 border-[1px] border-solid flex justify-between items-center border-[#ede9e9] bg-white rounded-[6px]">
                                    <h4 className='text-[16px] font-medium flex gap-2'>
                                        Friends/Followers <span className='bg-[#7750f8] text-white text-[12px] block text-center leading-[25px] rounded-full w-6 h-6'>44</span>
                                    </h4>
                                    <div className='flex items-center gap-3'>
                                        <div className='relative'>
                                            <input className='border-[1px] border-solid border-[#dedede] rounded-[4px] w-full' type="text" placeholder='Search friend' />
                                            <IoSearchOutline className='absolute right-3 top-3' />
                                        </div>
                                        <div className='me-1 relative group  bg-[#857ec3] h-10 w-10 rounded-full flex justify-center items-center cursor-pointer'>
                                            <a className=" relative flex justify-center   " href="#">
                                                <LuMoreHorizontal className='text-white' />
                                            </a>
                                            <ul className='w-[150px] text-[#858aa5] bg-white rounded-[4px] absolute transition-all duration-200  ease-linear top-[40px] right-0 delay-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'>
                                                <li className=''>
                                                    <a className='text-[12px] px-4 py-2  transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Show friends public</a>
                                                </li>
                                                <li className=''>
                                                    <a className='text-[12px] px-4 py-2 transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Show friend private</a>
                                                </li>
                                                <li className=''>
                                                    <a className='text-[12px] px-4 py-2 transition-all w-full flex duration-200 ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Mute notification</a>
                                                </li>

                                            </ul>
                                        </div>


                                    </div>

                                </div>
                                <div className="mt-4 p-5 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:col-span-2 col-span-1 gap-4'>
                                        {
                                            friends.map((data, key) => {
                                                console.log(data)
                                                return (
                                                    <>
                                                        <div className='bg-white border-[1px] border-solid border-[#ede9e9] rounded-[4px] mb-5'>
                                                            <div className='relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000033]'>
                                                                <img className='rounded-[4px] jhkjuh' src={data.photocover} alt="" />
                                                                <span className='text-[12px] text-white font-medium absolute bottom-3 right-3 z-[1]'>Followers: {data.follower}</span>
                                                            </div>
                                                            <div className='pt-0 p-[15px] relative'>
                                                                <img className='border-[2px] relative z-[1] border-solid border-white rounded-full -top-10' src={data.profile} alt="" />
                                                                <div className='absolute top-4 right-6'>
                                                                    <h4 className='text-[15px] text-[#313345] font-medium transition-all duration-200 cursor-pointer ease-linear delay-0 hover:text-[#fa6342]'>{data.name}</h4>
                                                                    <p className='text-[12px]'>{data.city}</p>
                                                                </div>
                                                                <ul className='mb-5'>
                                                                    <li className='text-[13px] w-full flex py-1'>
                                                                        <span className='text-[13px] font-medium w-[65px]'>Friends: </span>{data.friend}
                                                                    </li>
                                                                    <li className='text-[13px] w-full flex py-1'>
                                                                        <span className='text-[13px] font-medium w-[65px]'>Videos: </span>{data.Videos}
                                                                    </li>
                                                                    <li className='text-[13px] w-full flex py-1'>
                                                                        <span className='text-[13px] font-medium w-[65px]'>Photos: </span>{data.Photos}
                                                                    </li>
                                                                    <li className='text-[13px] w-full flex py-1'>
                                                                        <span className='text-[13px] font-medium w-[65px]'>Post: </span>{data.Post}
                                                                    </li>
                                                                    <li className='text-[13px] w-full flex py-1'>
                                                                        <span className='text-[13px] font-medium w-[65px]'>Since: </span>{data.Since}
                                                                    </li>
                                                                </ul>
                                                                <div className='flex justify-between items-center'>
                                                                    <button className='text-[#fa6342] text-[12px] font-medium' onClick={() => setShowModal(true)} >message</button>
                                                                    <div className='me-1 relative group h-10 w-10 rounded-full flex justify-center items-center cursor-pointer'>
                                                                        <a className=" relative flex justify-center   " href="#">
                                                                            <LuMoreHorizontal className='' />
                                                                        </a>
                                                                        <ul style={{ boxShadow: '0 5px 12px rgba(0,0,0,.2)' }} className='w-[150px] text-[#858aa5] bg-white rounded-[4px] absolute transition-all duration-200  ease-linear top-[-90px] right-0 delay-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'>
                                                                            <li className=''>
                                                                                <a className='text-[12px] px-4 py-2  transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Show friends public</a>
                                                                            </li>
                                                                            <li className=''>
                                                                                <a className='text-[12px] px-4 py-2 transition-all duration-200 w-full flex ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Show friend private</a>
                                                                            </li>
                                                                            <li className=''>
                                                                                <a className='text-[12px] px-4 py-2 transition-all w-full flex duration-200 ease-linear delay-0 hover:text-[#505050] hover:bg-[#f1f1f1] hover:font-medium' href="#">Mute notification</a>
                                                                            </li>

                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>

                                </div>
                            </div>

                            <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                                <div className='mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px] p-4'>
                                    Photos
                                </div>
                            </div>

                            <div className={openTab === 5 ? "block" : "hidden"} id="link2">
                                <div className='mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px] p-4'>
                                    Videos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative my-6 mx-auto w-[400px]">
                                {/*content*/}
                                <div className="border-0 rounded-t-lg shadow-lg relative flex p-5 flex-col w-full bg-white outline-none focus:outline-none border-b-[5px] border-solid border-b-[#fa6342]">
                                    {/*header*/}
                                    <div className="flex items-center justify-between pb-[10px] border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-[14px] font-medium">
                                            Send Message
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0  float-right leading-none outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className=" text-[#474962]  h-6 w-6 text-[30px] hover:text-[#fa6342]">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative flex-auto mt-4">
                                        <input className='bg-[#edf2f6] mb-[10px] rounded-[4px] p-[14px] text-[#535165] border-[1px] border-solid border-[#e4e4e4] w-full focus:border-0 focus:border-none' type="text" name="" id="" placeholder='Sophia' />
                                        <textarea className='mb-4 bg-[#edf2f6] rounded-[4px] p-[14px] text-[#535165] resize-none border-[1px] border-solid border-[#e4e4e4] w-full focus:border-0 focus:border-none' name="" placeholder='Write Message' id=""></textarea>
                                        <button
                                            className="bg-[#fa6342] text-white float-right text-[13px] px-[15px] py-[8px] rounded-[30px] outline-none focus:outline-none ease-linear transition-all duration-150 hover:bg-[#888da8]"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null

                }
            </div >
        </>
    )
}