import { AiFillMessage, AiOutlineQuestionCircle } from "react-icons/ai";
import { FaEye, FaGlobe, FaHeart, FaShareAlt, FaThumbtack } from "react-icons/fa";

import user_one from '../../Assets/Images/userlist-1.jpg';
import user_two from '../../Assets/Images/userlist-2.jpg';
import user_three from '../../Assets/Images/userlist-3.jpg';
import user_four from '../../Assets/Images/userlist-4.jpg';
import user_five from '../../Assets/Images/userlist-5.jpg';
import { LuMoreHorizontal } from "react-icons/lu";
import nearly_1 from '../../Assets/Images/nearly1.jpg';
import { IoFlagSharp } from "react-icons/io5";
import { TfiThumbDown, TfiThumbUp } from "react-icons/tfi";
import userposter from '../../Assets/Images/user-post.jpg';


export default function Newspost({imagepost}) {
    return (
        <>
        <div className='mt-4 border-[1px] p-5 border-solid border-[#ede9e9] bg-white rounded-[6px]'>
                            <div className='flex items-center'>
                                <img className='rounded-full w-10' src={nearly_1} alt="" />
                                <div className='ms-4'>
                                    <h6 className='text-[13px] font-medium'><a className='text-[#fa6342] text-[14px]' href="#">Jack Carter</a> Share <a className='text-[#fa6342] text-[14px]' href="#">Link</a></h6>
                                    <span className='text-[#999] text-[12px] flex '><FaGlobe className='me-2' /> Published: January,5 2010 19:PM</span>
                                </div>
                                <div className='ms-auto me-[10px] group relative transition-all duration-200  ease-linear delay-0 cursor-pointer after:absolute after:content-[""] after:w-[33px] after:h-[33px]  after:bg-[#eee] after:top-2/4 after:left-2/4 after:rounded-full after:-translate-x-2/4 after:-translate-y-2/4 after:scale-0 hover:after:scale-100 hover:after:-translate-x-2/4 hover:after:-translate-y-2/4'>
                                    <LuMoreHorizontal className='text-[#999] text-[20px] absolute top-[-10px] left-[-10px] z-[1] ' />
                                    <ul style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, .1)' }} className='w-[175px] bg-white p-4 transition-all duration-200 ease-linear delay-0 absolute invisible opacity-0 top-[-10px] z-[1] right-0  group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:top-[100%] group-hover:right-[-1px]'>
                                        <li className='text-[12px] flex mb-2 items-center transition-all duration-200 text-[#535165] ease-linear delay-0 hover:text-[#fa6342]'>
                                            <AiOutlineQuestionCircle className='me-2 text-[18px]' />Edit Post
                                        </li>
                                        <li className='text-[12px] flex mb-2 items-center transition-all duration-200 text-[#535165] ease-linear delay-0 hover:text-[#fa6342]'>
                                            <AiOutlineQuestionCircle className='me-2 text-[18px]' />Delete Post
                                        </li>
                                        <li className='text-[12px] flex mb-2 items-center transition-all duration-200 text-[#535165] ease-linear delay-0 hover:text-[#fa6342]'>
                                            <IoFlagSharp className='me-2 text-[18px]' />Report Post
                                        </li>
                                        <li className='text-[12px] flex mb-2 items-center transition-all duration-200 text-[#535165] ease-linear delay-0 hover:text-[#fa6342]'>
                                            <AiOutlineQuestionCircle className='me-2 text-[18px]' />Boost This Post
                                        </li>
                                        <li className='text-[12px] flex mb-2 items-center transition-all duration-200 text-[#535165] ease-linear delay-0 hover:text-[#fa6342]'>
                                            <AiOutlineQuestionCircle className='me-2 text-[18px]' />Schedule Post
                                        </li>
                                        <li className='text-[12px] flex mb-2 items-center transition-all duration-200 text-[#535165] ease-linear delay-0 hover:text-[#fa6342]'>
                                            <AiOutlineQuestionCircle className='me-2 text-[18px]' />Select as featured
                                        </li>
                                        <li className='text-[12px] flex mb-2 items-center transition-all duration-200 text-[#535165] ease-linear delay-0 hover:text-[#fa6342]'>
                                            <AiOutlineQuestionCircle className='me-2 text-[18px]' />Turn off Notifications
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-4 '>
                                <div className='group gap-[1px] relative mb-2'>
                                    <div className=''>
                                        <img src={imagepost} alt="" />
                                    </div>
                                    <ul className='flex items-center gap-3 absolute bottom-[-12px] left-2/4 -translate-x-2/4'>
                                        <li style={{ boxShadow: '0 10px 20px rgba(0,0,0,.3)' }} className='bg-[#7750f8] flex justify-center items-center h-[35px] w-[35px] transition-all duration-200 ease-linear delay-100 rounded-full invisible opacity-0 scale-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100'>
                                            <FaThumbtack className='text-white ' />
                                        </li>
                                        <li style={{ boxShadow: '0 10px 20px rgba(0,0,0,.3)' }} className='bg-[#3ca9fc] flex justify-center items-center h-[35px] w-[35px] transition-all duration-200  ease-linear delay-200 rounded-full invisible opacity-0 scale-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100'>
                                            <TfiThumbUp className='text-white' />
                                        </li>
                                        <li style={{ boxShadow: '0 10px 20px rgba(0,0,0,.3)' }} className='bg-[#e44a3c] flex justify-center items-center h-[35px] w-[35px] transition-all duration-200  ease-linear delay-300 rounded-full invisible opacity-0 scale-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100'>
                                            <TfiThumbDown className='text-white' />
                                        </li>
                                    </ul>
                                </div>
                                <p class="text-[14px] my-6 tracking-[-0.1px] leading-[26px] mb-4 font-normal text-[#727895]">Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                                <div className='border-t-[1px] border-t-[#ede9e9] border-solid flex sm:flex-nowrap flex-wrap items-center'>
                                    <ul className='mt-3'>
                                        <li className='text-[#535165] relative inline-block me-10'>
                                            <FaEye />
                                            <span className='text-[11px] absolute -top-[10px] left-4'>1.2k</span>
                                        </li>
                                        <li className='group text-[#535165] heart relative inline-block me-10'>
                                            <FaHeart className='heart-icon' />
                                            <span className='text-[11px] absolute -top-[10px] left-4'>2k</span>
                                        </li>
                                        <li className='text-[#535165] relative inline-block me-10'>
                                            <AiFillMessage />
                                            <span className='text-[11px] absolute -top-[10px] left-4'>52</span>
                                        </li>
                                        <li className='text-[#535165] relative inline-block me-10'>
                                            <FaShareAlt />
                                            <span className='text-[11px] absolute -top-[10px] left-4'>20</span>
                                        </li>
                                    </ul>
                                    <div className='sm:ms-auto m-0'>
                                        <div className="mt-3 -space-x-2 overflow-hidden">
                                            <img alt="" src={user_one} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            <img alt="" src={user_two} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            <img alt="" src={user_three} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            <img alt="" src={user_four} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            <img alt="" src={user_five} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                        </div>
                                        <span className='text-[11px]'><strong>You</strong>, <b>Sarah</b><a className='text-[#fa6342]' href="#">24+ more</a> liked</span>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}