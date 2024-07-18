
import { IoCheckmark, IoClose, IoSearchOutline } from 'react-icons/io5';
import logoimg from '../../Assets/Images/logo2.png';
import { CiBellOn, CiFaceSmile, CiHeart, CiMicrophoneOn, CiMusicNote1, CiPlay1, CiPower, CiSettings, CiUser } from 'react-icons/ci';
import { FaThumbtack } from 'react-icons/fa';
import { LuSliders, LuUsers } from 'react-icons/lu';
import { FaRegMessage, FaSliders } from 'react-icons/fa6';
import accimg from '../../Assets/Images/admin.jpg';
import { RiDeleteBinLine } from 'react-icons/ri';

import thumbone from '../../Assets/Images/thumb-1.jpg';
import thumbtwo from '../../Assets/Images/thumb-2.jpg';
import thumbthree from '../../Assets/Images/thumb-3.jpg';
import thumbfour from '../../Assets/Images/thumb-4.jpg';
import thumbfive from '../../Assets/Images/thumb-5.jpg';
import birthdayimg from '../../Assets/Images/birthday.png';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { GrAttachment } from 'react-icons/gr';
import { TfiTarget } from 'react-icons/tfi';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { Dialog, Transition } from '@headlessui/react';
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import { PiSlidersBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';


export default function Header() {

    // active dropdown menu
    const [active, setActive] = useState(null);
    const dropdownMenuRef = useRef(null);
    const handleClick = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
            setActive(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };
    }, []);

    // drawer open
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className=' hidden lg:block'>
                <div className='bg-white h-[55px] px-4 py-2 flex items-center fixed w-full z-[14] ' style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.2)' }}>
                    <div className='w-[12%] me-3'>
                       <Link to ='/'> <a className='max-w-24' href="#">
                            <img className='max-w-full' src={logoimg} alt="" />
                        </a></Link>
                    </div>
                    <div className='flex items-center w-[60%]'>
                        <div className='relative w-[32%]'>
                            <input type="text" className='bg-[#edf2f6] text-[#535165] text-sm px-4 py-2 w-full rounded-lg focus-visible:outline-none' placeholder='Search people, Pages, #tags etc' />
                            <IoSearchOutline className='absolute top-[8px] end-4 text-[20px]' />
                        </div>
                        <div className='text-xs font-medium leading-[55px] px-7'>
                            NEWSFEED
                        </div>
                        <div className=''>
                            <ul className='flex'>
                                <li className='group inline-block bg-[#0066ff] p-2 rounded-lg mx-1 transition-all duration-200 ease-linear delay-0 hover:bg-[#0000001a] cursor-pointer '>
                                    <Link to='timeline'><CiFaceSmile className=' text-white text-[18px] group-hover:text-black' /></Link>
                                </li>
                                <li className='group inline-block bg-[#0000ff] p-2 rounded-lg mx-1 transition-all duration-200 ease-linear delay-0 hover:bg-[#0000001a] cursor-pointer'>
                                    <CiHeart className=' text-white text-[18px] group-hover:text-black' />
                                </li>
                                <li className='group inline-block bg-[#E60023] p-2 rounded-lg mx-1 transition-all duration-200 ease-linear delay-0 hover:bg-[#0000001a] cursor-pointer'>
                                    <FaThumbtack className=' text-white text-[18px] group-hover:text-black' />
                                </li>
                                <li className='group inline-block bg-[#E01E5a] p-2 rounded-lg mx-1 transition-all duration-200 ease-linear delay-0 hover:bg-[#0000001a] cursor-pointer'>
                                    <CiPlay1 className=' text-white text-[18px] group-hover:text-black' />
                                </li>
                                <li className='group inline-block bg-[#ff9533] p-2 rounded-lg mx-1 transition-all duration-200 ease-linear delay-0 hover:bg-[#0000001a] cursor-pointer'>
                                    <CiMusicNote1 className=' text-white text-[18px] group-hover:text-black' />
                                </li>
                                <li className='group inline-block bg-[#9e1a9e] p-2 rounded-lg mx-1 transition-all duration-200 ease-linear delay-0 hover:bg-[#0000001a] cursor-pointer'>
                                    <CiMicrophoneOn className=' text-white text-[18px] group-hover:text-black' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='' ref={dropdownMenuRef}>
                        <ul className='flex items-center m-auto'>
                            <li className={active === 0 ? 'active' : 'unactive'} onClick={() => handleClick(0)}>
                                <div className='inline-block p-2 mx-2 relative before:content-["5"] before:absolute before:bg-[#e44a3c] before:text-[9px] before:rounded-full before:text-center before:text-white before:w-[14px] before:h-[14px] before:leading-[15px] before:top-0 before:end-0'>
                                    <LuUsers className='  text-[18px] ' />
                                    <div className={active == 0 ? 'bg-white max-h-[340px] w-[350px] top-[44px] end-[-50px]  absolute dropdown active' : 'bg-white max-h-[340px] w-[350px] top-[44px] end-[-50px] dropdown absolute'}>
                                        <span className='text-[#474962] border-b-[1px] border-b-[#e6ecf5] border-solid text-[12px] font-medium py-[7px] px-[15px] flex items-center w-full'>5 New Requests <a href="#" className='font-normal text-[#48b9ff] transition-all ms-auto duration-200 ease-linear delay-0 hover:underline'>View all Requests</a></span>
                                        <ul className='drop-menu'>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <img alt="" src={thumbone} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium leading-[10px] hover:text-[#fa6342] cursor-pointer'>Loren</h6>
                                                        <span className='text-[12px] '><b>Amy</b> is mutule friend</span>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <div className='flex gap-2 items-center'>
                                                            <CiHeart className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                            <RiDeleteBinLine className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                        </div>
                                                        <p className='text-[11px] text-[#b1b1b1]'>yesterday</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <img alt="" src={thumbtwo} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium leading-[10px] hover:text-[#fa6342] cursor-pointer'>Tina Trump</h6>
                                                        <span className='text-[12px] '><b>Simson</b> is mutule friend</span>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <div className='flex gap-2 items-center'>
                                                            <CiHeart className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                            <RiDeleteBinLine className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                        </div>
                                                        <p className='text-[11px] text-[#b1b1b1]'>2 days ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <img alt="" src={thumbthree} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium leading-[10px] hover:text-[#fa6342] cursor-pointer'>Andrew</h6>
                                                        <span className='text-[12px] '><b>Bikra</b> is mutule friend</span>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <div className='flex gap-2 items-center'>
                                                            <CiHeart className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                            <RiDeleteBinLine className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                        </div>
                                                        <p className='text-[11px] text-[#b1b1b1]'>4 hours ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <img alt="" src={thumbfour} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium leading-[10px] hover:text-[#fa6342] cursor-pointer'>Dasha</h6>
                                                        <span className='text-[12px] '><b>Sarah</b> is mutule friend</span>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <div className='flex gap-2 items-center'>
                                                            <CiHeart className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                            <RiDeleteBinLine className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                        </div>
                                                        <p className='text-[11px] text-[#b1b1b1]'>9 hours ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <img alt="" src={thumbfive} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium leading-[10px] hover:text-[#fa6342] cursor-pointer'>Emily</h6>
                                                        <span className='text-[12px] '><b>Amy</b> is mutule friend</span>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <div className='flex gap-2 items-center'>
                                                            <CiHeart className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                            <RiDeleteBinLine className='text-[18px] hover:text-[#fa6342] cursor-pointer' />
                                                        </div>
                                                        <p className='text-[11px] text-[#b1b1b1]'>4 hours ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <a className='text-[#fa6342] text-[13px] px-[10px] py-[5px] text-center mb-[2px] bg-[#fafafa] w-full block' href="#">View All</a>
                                    </div>
                                </div>

                            </li>
                            <li className={active === 1 ? 'active' : 'unactive'} onClick={() => handleClick(1)}>
                                <div className=' inline-block p-2 mx-2 relative before:content-["7"] before:absolute before:bg-[#7750f8] before:text-[9px] before:rounded-full before:text-center before:text-white before:w-[14px] before:h-[14px] before:leading-[15px] before:top-0 before:end-0'>
                                    <CiBellOn className='  text-[18px] ' />
                                    <div className={active == 1 ? 'bg-white max-h-[340px] w-[350px] top-[44px] end-[-50px] overflow-x-hidden overflow-y-auto  absolute dropdown active' : 'bg-white overflow-x-hidden overflow-y-auto max-h-[340px] w-[350px] top-[44px] end-[-50px] dropdown absolute'}>
                                        <span className='text-[#474962] border-b-[1px] border-b-[#e6ecf5] border-solid text-[12px] font-medium py-[7px] px-[15px] flex items-center w-full'>4 New Notifications<a href="#" className='font-normal text-[#48b9ff] transition-all ms-auto duration-200 ease-linear delay-0 hover:underline'>Mark All as Read</a></span>
                                        <ul className='drop-menu'>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative'>
                                                        <img alt="" src={thumbone} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px] w-full relative'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Sarah Loren</h6>
                                                        <span className='text-[12px] max-w-[70%] inline-block overflow-x-hidden text-ellipsis whitespace-nowrap'>commented on your new profile status</span>
                                                        <i className='text-[11px] text-[#b1b1b1]  absolute top-[20px] right-[20px]'>2 min ago</i>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] flex  w-full border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='h-10 relative'>
                                                        <img alt="" src={thumbtwo} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px] w-full relative'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Jhon doe</h6>
                                                        <span className='text-[12px] max-w-[70%] inline-block overflow-x-hidden text-ellipsis whitespace-nowrap'>Nicholas Grissom just became friends. Write on his wall.</span>
                                                        <i className='text-[11px] text-[#b1b1b1] absolute top-[20px] right-[20px]'>4 hours ago</i>
                                                        <div className='flex'>
                                                            <p className='text-[#fa6342] text-[11px] w-[78%]'>Today is Marina Valentine’s Birthday! wish for celebrating</p>
                                                            <img className='w-10 h-10 rounded-full ' src={birthdayimg} alt="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className='p-[10px] flex  w-full border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='h-10 relative'>
                                                        <img alt="" src={thumbthree} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px] w-full relative'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Andrew</h6>
                                                        <span className='text-[12px] max-w-[70%] inline-block overflow-x-hidden text-ellipsis whitespace-nowrap'>commented on your photo.</span>
                                                        <i className='text-[11px] text-[#b1b1b1] float-right absolute top-[20px] right-[20px]'>Sunday</i>
                                                        <div className='flex'>
                                                            <p className='text-[#fa6342] text-[11px] w-[82%]'>"Celebrity looks Beautiful in that outfit! We should see each"</p>
                                                            <img className='w-10 h-10 ' src={accimg} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative'>
                                                        <img alt="" src={thumbfour} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px] w-full relative'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Tom cruse</h6>
                                                        <span className='text-[12px] max-w-[70%] inline-block overflow-x-hidden text-ellipsis whitespace-nowrap'>nvited you to attend to his event Goo in</span>
                                                        <i className='text-[11px] text-[#b1b1b1] absolute top-[20px] right-[20px]'>May 19</i>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative'>
                                                        <img alt="" src={thumbfive} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px] w-full relative'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Amy</h6>
                                                        <span className='text-[12px] max-w-[70%] inline-block overflow-x-hidden text-ellipsis whitespace-nowrap'>Andrew Changed his profile picture.</span>
                                                        <i className='text-[11px] text-[#b1b1b1] absolute top-[20px] right-[20px]'>Dec 18</i>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <a className='text-[#fa6342] text-[13px] px-[10px] py-[5px] text-center mb-[2px] bg-[#fafafa] w-full block' href="#">View All</a>
                                    </div>
                                </div>
                            </li>
                            <li className={active === 2 ? 'active' : 'unactive'} onClick={() => handleClick(2)}>
                                <div className=' inline-block p-2 mx-2 relative before:content-["9"] before:absolute before:bg-[#3ca9fc] before:text-[9px] before:rounded-full before:text-center before:text-white before:w-[14px] before:h-[14px] before:leading-[15px] before:top-0 before:end-0'>
                                    <FaRegMessage className='  text-[18px] ' />
                                    <div className={active == 2 ? 'bg-white max-h-[340px] w-[350px] top-[44px] end-[-50px]  absolute dropdown active' : 'bg-white max-h-[340px] w-[350px] top-[44px] end-[-50px] dropdown absolute'}>
                                        <span className='text-[#474962] border-b-[1px] border-b-[#e6ecf5] border-solid text-[12px] font-medium py-[7px] px-[15px] flex items-center w-full'>5 New Requests <a href="#" className='font-normal text-[#48b9ff] transition-all ms-auto duration-200 ease-linear delay-0 hover:underline'>View all Requests</a></span>
                                        <ul className='drop-menu'>
                                            <li>
                                                <div className='p-[10px] pe-[30px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative'>
                                                        <img alt="" src={thumbone} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>sarah Loren</h6>
                                                        <span className='text-[12px] flex items-center overflow-x-hidden text-ellipsis whitespace-nowrap'><IoCheckmark className='me-2 text-blue-700' />Hi, how r u dear ...?</span>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <p className='text-[11px] text-[#b1b1b1]'>2 mins ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px]  pe-[30px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative'>
                                                        <img alt="" src={thumbtwo} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Jhon doe</h6>
                                                        <span className='text-[12px]  flex items-center overflow-x-hidden text-ellipsis whitespace-nowrap'><IoCheckmark className='me-2 text-blue-700' /> is mutule friend</span>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <p className='text-[11px] text-[#b1b1b1]'>2 min ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] pe-[30px] flex items-center relative border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative' >
                                                        <img alt="" src={thumbthree} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Andrew</h6>
                                                        <span className='text-[12px]  flex items-center '><GrAttachment className='me-2 text-blue-700' /><p className='max-w-[40%] overflow-x-hidden text-ellipsis whitespace-nowrap'>Hi Jack's! It’s Diana, I just wanted to let you know that we have to reschedule..</p></span>
                                                    </div>

                                                    <p className='text-[11px] text-[#b1b1b1] absolute end-[30px] bottom-[10px]'>4 min ago</p>

                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] pe-[30px] flex items-center border-b-[1px] border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative' >
                                                        <img alt="" src={thumbfour} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0 bg-[#bebebe] rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Tom cruse</h6>
                                                        <span className='text-[12px] flex items-center'><IoCheckmark className='me-2 text-blue-700' />Great, I’ll see you tomorrow!.</span>
                                                    </div>
                                                    <div className='ms-auto'>

                                                        <p className='text-[11px] text-[#b1b1b1]'>9 min ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='p-[10px] pe-[30px] flex items-center border-b-[1px] relative border-solid border-b-[#e1e8ed]'>
                                                    <div className='inline-block relative' >
                                                        <img alt="" src={thumbfive} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                                        <span className='absolute bottom-0 end-0  bg-yellow-500 rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                                    </div>
                                                    <div className='ps-[10px]'>
                                                        <h6 className='text-[13px] font-medium hover:text-[#fa6342] cursor-pointer'>Emily</h6>
                                                        <span className='text-[12px] flex items-center'><GrAttachment className='me-2 text-blue-700' /><p className='max-w-[40%] overflow-x-hidden text-ellipsis whitespace-nowrap'>Sed ut perspiciatis unde omnis iste natus error sit</p></span>
                                                    </div>
                                                    <p className='text-[11px] text-[#b1b1b1] absolute end-[30px] bottom-[10px]'>2 min ago</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <a className='text-[#fa6342] text-[13px] px-[10px] py-[5px] text-center mb-[2px] bg-[#fafafa] w-full block' href="#">View All</a>
                                    </div>
                                </div>
                            </li>
                            <li className={active === 3 ? 'active' : 'unactive'} onClick={() => handleClick(3)}>
                                <div className='inline-block relative mx-2'>
                                    <img alt="" src={accimg} className="inline-block h-10 min-w-10 rounded-full ring-2 ring-white" />
                                    <span className='absolute bottom-0 end-0 bg-[#bebebe] success rounded-full h-[10px] w-[10px] after:content-[""] after:absolute after:w-[6px] after:h-[2px] after:bg-white after:top-2/4 after:left-2/4 transform' ></span>
                                </div>
                                <div className={active == 3 ? 'bg-white w-[200px] top-[50px] absolute dropdown active' : 'bg-white w-[200px] top-[50px] dropdown absolute'}>
                                    <span className='font-medium text-[12px] py-[6px] px-[15px] border-y-[1px] border-y-[#e6ecf5]'>
                                        Jack Carter
                                    </span>
                                    <ul className=''>
                                        <li className='hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full ps-[35px]' href="#">
                                                <span className='success absolute  h-[10px] w-[10px] left-[15px] top-[50%] transformy rounded-full after:absolute after:content[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>Online
                                            </a>
                                        </li>
                                        <li className='hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full ps-[35px]' href="#">
                                                <span className='bg-yellow-400 absolute  h-[10px] w-[10px] left-[15px] top-[50%] transformy rounded-full after:absolute after:content[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>Away
                                            </a>
                                        </li>
                                        <li className='hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full ps-[35px]' href="#">
                                                <span className='bg-[#a9a9a9] absolute  h-[10px] w-[10px] left-[15px] top-[50%] transformy rounded-full after:absolute after:content[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>Offline
                                            </a>
                                        </li>
                                        <span className='border-y-[1px] flex border-y-[#e6ecf5] text-[12px] font-medium py-[6px] px-[15px]'>
                                            User Setting
                                            <a className='ms-auto text-[#48b9ff] hover:underline' href="#">See All</a>
                                        </span>
                                        <li className='group hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full' href="#">
                                                <div className='flex items-center'>
                                                    <CiUser className='me-[18px] text-[#9a9fbf] text-[20px] group-hover:text-[#fa6342]' />View Profie
                                                </div>
                                            </a>
                                        </li>
                                        <li className='group hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full' href="#">
                                                <div className='flex items-center'>
                                                    <HiOutlinePencilSquare className='me-[18px] text-[#9a9fbf] text-[20px] group-hover:text-[#fa6342]' />Edit Profile
                                                </div>
                                            </a>
                                        </li>
                                        <li className='group hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full' href="#">
                                                <div className='flex items-center'>
                                                    <TfiTarget className='me-[18px] text-[#9a9fbf] text-[20px] group-hover:text-[#fa6342]' />Activity Log
                                                </div>
                                            </a>
                                        </li>
                                        <li className='group hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full' href="#">
                                                <div className='flex items-center'>
                                                    <CiSettings className='me-[18px] text-[#9a9fbf] text-[20px] group-hover:text-[#fa6342]' />Account Setting
                                                </div>
                                            </a>
                                        </li>
                                        <li className='hover:bg-[#f1f1f1]'>
                                            <a className='px-[15px] py-[10px] inline-block text-[13px] relative w-full' href="#">
                                                <div className='flex items-center text-[#fa6342]'>
                                                    <CiPower className='me-[18px] text-[#fa6342] text-[20px]' />Lou Out
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className='inline-block p-2 mx-2'>
                                    <LuSliders className=' text-[18px]' onClick={setOpen} />
                                </div>

                                <Transition.Root show={open} as={Fragment}>
                                    <Dialog className="relative z-10" onClose={setOpen}>
                                        <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>
                                        <div className="fixed inset-0 overflow-hidden">
                                            <div className="absolute inset-0 overflow-hidden">
                                                <div className="pointer-events-none fixed bottom-0 top-[55px] right-0 flex max-w-full pl-10">
                                                    <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                                        <Dialog.Panel className="pointer-events-auto relative w-[280px]">
                                                            <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                                    <button type="button" className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                                                                        <span className="absolute -inset-2.5" />
                                                                        <span className="sr-only">Close panel</span>
                                                                        <IoClose className="h-6 w-6" aria-hidden="true" />
                                                                    </button>
                                                                </div>
                                                            </Transition.Child>
                                                            <div className="flex h-full flex-col overflow-y-scroll bg-[#fefefe] px-[15px] py-[20px] shadow-xl">
                                                                <div className="mb-[15px]">
                                                                    <Dialog.Title className="text-base font-medium text-[18px] leading-6">
                                                                        General Setting
                                                                    </Dialog.Title>
                                                                </div>
                                                                <div className="relative">
                                                                    <div className='mb-5'>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>use night mode</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Notifications</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Notification Sound</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>My Profile</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Show Profile</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className='text-[18px] font-medium mb-4'>
                                                                        <h4>Account Setting</h4>
                                                                    </div>
                                                                    <div className='mb-5'>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Sub Users</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Personal Account</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Business Account</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Show Me Online</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Delete History</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                        <div className='flex justify-between items-center pb-2 mb-2 border-b-[1px] border-b-[#e1e8ed] border-solid'>
                                                                            <h6 className='text-[13px]'>Expose Author Name</h6>
                                                                            <label class="switch">
                                                                                <input type="checkbox" id="togBtn" />
                                                                                <div class="slider round"></div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Dialog.Panel>
                                                    </Transition.Child>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lg:hidden block bg-[#fa6342] sticky h-full w-full pb-3'>
                <div className='flex justify-between items-center py-2'>
                    <IoMdMenu className='text-white ms-[15px] text-[24px]' />
                    <img src={logoimg} alt="" />
                    <FaSliders className='text-white me-[15px] text-[20px]' />
                </div>
                <div className='px-2'>
                    <input className='w-full border-none rounded-[3px] h-[26px] text-[14px] focus:shadow-none' type="text" placeholder='search here' />
                </div>

            </div>
        </>
    )
}