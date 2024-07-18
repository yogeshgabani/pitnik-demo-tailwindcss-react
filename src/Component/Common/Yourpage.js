import { Tabs } from "flowbite-react";
import { CiBellOn, CiHeart, CiUser } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { TfiVideoCamera } from "react-icons/tfi";
import accimg from '../../Assets/Images/friend-avatar9.jpg';

import user_one from '../../Assets/Images/userlist-1.jpg';
import user_two from '../../Assets/Images/userlist-2.jpg';
import user_three from '../../Assets/Images/userlist-3.jpg';
import user_four from '../../Assets/Images/userlist-4.jpg';
import user_five from '../../Assets/Images/userlist-5.jpg';
import user_six from '../../Assets/Images/userlist-6.jpg';
import user_seven from '../../Assets/Images/userlist-7.jpg';
import { FaEye } from "react-icons/fa";

export default function Yourpage() {
    return (
        <>
         <div className="widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <h4 className="border-b-[1px] border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] mb-5 w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]	">Profile</h4>
                            <div className='px-5 pb-[10px]'>
                                <div className='flex'>
                                    <div className='me-5'>
                                        <img className='rounded-full border-[1px] border-[#00000033] border-solid' src={accimg} alt="" />
                                        <span className='text-[#fa6342] text-[10px]'>@Monica12</span>
                                    </div>
                                    <div className='w-full'>
                                        <a className='text-14px] font-medium relative after:absolute after:content-[""] after:h-[1px] after:w-full after:left-0 after:bg-[#fa6342] after:bottom-[-5px] after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible after:opacity-0 hover:after:visible hover:after:opacity-100 hover:after:bottom-[0px] hover:text-[#fa6342]' href="#">Monica lee</a>
                                        <span className='text-[12px] flex items-center'><FaRegMessage className='me-2' />Messages</span>
                                        <span className='text-[12px] flex items-center'><CiBellOn className='me-2' />Notifications</span>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <ul className='py-[7px] flex justify-between items-center border-y-[1px] border-y-[#e6ecf5] border-solid'>
                                        <li className='flex flex-col items-center'><HiOutlinePencilSquare className='inline-block text-[18px] hover:text-[#fa6342] cursor-pointer' /><span className='text-[12px] inline-block'>Publish</span></li>
                                        <li className='flex flex-col items-center'><FiCamera className='inline-block text-[18px] hover:text-[#fa6342] cursor-pointer' /><span className='text-[12px] inline-block'>Photo</span></li>
                                        <li className='flex flex-col items-center'><TfiVideoCamera className='inline-block text-[18px] hover:text-[#fa6342] cursor-pointer' /><span className='text-[12px] inline-block'>Live</span></li>
                                        <li className='flex flex-col items-center'><CiUser className='inline-block text-[18px] hover:text-[#fa6342] cursor-pointer' /><span className='text-[12px] inline-block'>Invite</span></li>
                                    </ul>
                                </div>
                                <div className='my-5'>
                                    <Tabs className='tab-follower' aria-label="Default tabs" variant="default">
                                        <Tabs.Item active title="Likes" >
                                            <div className=''>
                                                <span className='text-[20px] font-normal flex justify-center items-center'><CiHeart className='me-1' />884</span>
                                            </div>
                                            <div className='text-center'>
                                                <a className='text-[#fa6342] text-[13px] hover:underline' href="#">22 new Likes this week</a>
                                            </div>
                                            <div className="flex justify-center mt-3 -space-x-2 overflow-hidden">
                                                <img alt="" src={user_one} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_two} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_three} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_four} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_five} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_six} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_seven} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            </div>
                                        </Tabs.Item>
                                        <Tabs.Item title="Views" >
                                            <div className=''>
                                                <span className='text-[20px] font-normal flex justify-center items-center'><FaEye className='me-1' />440k</span>
                                            </div>
                                            <div className='text-center'>
                                                <a className='text-[#fa6342] text-[13px] hover:underline' href="#">440 new views this week</a>
                                            </div>
                                            <div className="flex justify-center mt-3 -space-x-2 overflow-hidden">
                                                <img alt="" src={user_one} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_two} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_three} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_four} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_five} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_six} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                                <img alt="" src={user_seven} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            </div>
                                        </Tabs.Item>
                                    </Tabs>
                                </div>
                            </div>

                        </div>
        </>
    )
}