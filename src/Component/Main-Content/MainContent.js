import { FaCirclePlay, FaEye, FaGlobe, FaHeart, FaRegMessage, FaReply, FaThumbtack } from 'react-icons/fa6';
import accimg from '../../Assets/Images/friend-avatar8.jpg';
import { CiBellOn, CiHeart, CiImageOn, CiUser } from 'react-icons/ci';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { FiCamera } from 'react-icons/fi';
import { TfiMicrophone, TfiThumbDown, TfiThumbUp, TfiVideoCamera } from 'react-icons/tfi';
import { Tabs } from "flowbite-react";
import user_one from '../../Assets/Images/userlist-1.jpg';
import user_two from '../../Assets/Images/userlist-2.jpg';
import user_three from '../../Assets/Images/userlist-3.jpg';
import user_four from '../../Assets/Images/userlist-4.jpg';
import user_five from '../../Assets/Images/userlist-5.jpg';
import user_six from '../../Assets/Images/userlist-6.jpg';
import user_seven from '../../Assets/Images/userlist-7.jpg';
import badge_one from '../../Assets/Images/badge1.png';
import badge_two from '../../Assets/Images/badge2.png';
import badge_three from '../../Assets/Images/badge3.png';
import badge_four from '../../Assets/Images/badge8.png';
import badge_five from '../../Assets/Images/badge10.png';
import badge_six from '../../Assets/Images/badge20.png';
import badge_seven from '../../Assets/Images/badge21.png';
import badge_eight from '../../Assets/Images/year10.png';
import { Fragment, useState } from 'react';
import story_one from '../../Assets/Images/story-1.jpg';
import story_two from '../../Assets/Images/story-2.jpg';
import story_three from '../../Assets/Images/story-3.jpg';
import story_four from '../../Assets/Images/story-4.jpg';
import thumb_one from '../../Assets/Images/thumb-2.jpg';
import thumb_two from '../../Assets/Images/thumb-3.jpg';
import thumb_three from '../../Assets/Images/thumb-4.jpg';
import recent_1 from '../../Assets/Images/recentlink-1.jpg';
import recent_2 from '../../Assets/Images/recentlink-2.jpg';
import recent_3 from '../../Assets/Images/recentlink-3.jpg';
import song_1 from '../../Assets/Images/song-chanl1.jpg';
import song_2 from '../../Assets/Images/song-chanl2.jpg';
import song_3 from '../../Assets/Images/song-chanl3.jpg';
import song_4 from '../../Assets/Images/song-chanl4.jpg';
import song_5 from '../../Assets/Images/song-chanl5.jpg';
import video_1 from '../../Assets/Images/last-vid1.jpg';
import video_2 from '../../Assets/Images/last-vid2.jpg';
import nearly_1 from '../../Assets/Images/nearly1.jpg';
import album1 from '../../Assets/Images/album1.jpg';
import album2 from '../../Assets/Images/album2.jpg';
import album3 from '../../Assets/Images/album4.jpg';
import album4 from '../../Assets/Images/album5.jpg';
import album5 from '../../Assets/Images/album6.jpg';
import smile from '../../Assets/Images/smiley.png';
import clock from '../../Assets/Images/clock.png';
import avtar1 from '../../Assets/Images/friend-avatar.jpg';
import avtar2 from '../../Assets/Images/friend-avatar2.jpg';
import avtar3 from '../../Assets/Images/friend-avatar3.jpg';
import avtar4 from '../../Assets/Images/friend-avatar4.jpg';
import avtar5 from '../../Assets/Images/friend-avatar5.jpg';
import avtar6 from '../../Assets/Images/friend-avatar6.jpg';
import avtar7 from '../../Assets/Images/friend-avatar7.jpg';
import avtar8 from '../../Assets/Images/friend-avatar8.jpg';
import avtar9 from '../../Assets/Images/friend-avatar9.jpg';
import avtar10 from '../../Assets/Images/friend-avatar10.jpg';
import avtar11 from '../../Assets/Images/friend-avatar11.jpg';
import avtar12 from '../../Assets/Images/friend-avatar12.jpg';
import avtar13 from '../../Assets/Images/friend-avatar13.jpg';
import avtar14 from '../../Assets/Images/friend-avatar14.jpg';
import jobbanner from '../../Assets/Images/baner-widgetbg2.jpg';
import jobicon from '../../Assets/Images/job-icon.png';
import birthday from '../../Assets/Images/sug-page-5.jpg';
import birth from '../../Assets/Images/dob2.png';
import cake from '../../Assets/Images/dob-cake.gif';
import add from '../../Assets/Images/ad-widget.gif';
import create from '../../Assets/Images/post-createbg.jpg';
import logo from '../../Assets/Images/logo2.png';
import userposter from '../../Assets/Images/user-post.jpg';
import sponser from '../../Assets/Images/sponsors.gif';



import { GoPlus } from 'react-icons/go';
import { Dialog, Transition } from '@headlessui/react';
import { IoClose, IoFlagSharp } from 'react-icons/io5';
import { LuGift, LuMoreHorizontal } from 'react-icons/lu';
import { AiFillMessage, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import Createpost from '../Common/Createpost';
import Newspost from '../Common/Newspost';
import Footers from '../Common/Footers';

export default function MainContent() {

    // drawer open
    const [open, setOpen] = useState(false)




    return (
        <>
            <div className="container main-bar mx-auto xl:px-[100px] lg:px-[60px] px-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-4 gap-0 lg:pt-[80px] pt-5 sm:px-0 px-[20px]">
                    <div className='main-content'>
                        {/* profile */}
                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
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
                                        <Tabs.Item active title="Followers" >
                                            <div className=''>
                                                <span className='text-[20px] font-normal flex justify-center items-center'><CiHeart className='me-1' />120k</span>
                                            </div>
                                            <div className='text-center'>
                                                <a className='text-[#fa6342] text-[13px] hover:underline' href="#">22 new Folowers this week</a>
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
                                        <Tabs.Item title="Following" >
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

                        {/* Nearby places */}
                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className="border-b-[1px]  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                <h4>Nearby places</h4>
                            </div>
                            <div className='p-4 maps'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52808140.217054464!2d-161.46429918210544!3d36.114127922519884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1720600462019!5m2!1sen!2sin" width="100%" height="200" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        {/* latest video */}
                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className="border-b-[1px]  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                <h4>Latest Videos</h4>
                            </div>
                            <div className='p-4'>
                                <div className='group relative mb-4  after:absolute after:content-[""] after:bg-[#00000066] cursor-pointer after:top-0 after:left-0 after:w-full after:h-full after:rounded-[10px]' onClick={setOpen}>
                                    <a className='' href="https://www.youtube.com/watch?v=UXnxgRyGzJQ"><img className='w-full object-cover rounded-[10px]' src={video_1} alt="" /></a>
                                    <FaCirclePlay className='border-[2px] rounded-full border-white border-solid text-[50px] text-[#fa6342] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:scale-105' />
                                    <p className='absolute text-[14px] text-white text-center w-[80%] left-2/4 top-[10px] z-[1] opacity-0 invisible whitespace-nowrap transition-all duration-200 ease-linear delay-0 -translate-x-2/4 text-ellipsis group-hover:opacity-100 group-hover:visible group-hover:top-[20px]'>Beautiful red truck free style stunts</p>
                                    <em className='absolute text-white end-[15px] bottom-[5px] text-[12px] z-[1]'>2:25</em>
                                </div>
                                <div className='group relative  after:absolute after:content-[""] after:bg-[#00000066] cursor-pointer after:top-0 after:left-0 after:w-full after:h-full after:rounded-[10px]' onClick={setOpen}>
                                    <a className='' href="https://www.youtube.com/watch?v=PDluztBSaBc"><img className='w-full object-cover rounded-[10px]' src={video_2} alt="" /></a>
                                    <FaCirclePlay className='border-[2px] rounded-full border-white border-solid text-[50px] text-[#fa6342] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:scale-105' />
                                    <p className='absolute text-[14px] text-white text-center w-[80%] left-2/4 top-[10px] z-[1] opacity-0 invisible whitespace-nowrap transition-all duration-200 ease-linear delay-0 -translate-x-2/4 text-ellipsis group-hover:opacity-100 group-hover:visible group-hover:top-[20px]'>Travel to south africa forest</p>
                                    <em className='absolute text-white end-[15px] bottom-[5px] text-[12px] z-[1]'>4:30</em>
                                </div>
                            </div>
                        </div>

                        {/* birthday */}
                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className='p-2 bg-[#7750f8] flex items-center'>
                                <img className='rounded-full' src={birthday} alt="" />
                                <h3 className='font-medium ms-1 text-[14px] text-white'>22nd Birthday</h3>
                                <div className='flex flex-col ms-auto items-center text-white'>
                                    <span className='text-[24px] leading-[20px] italic'>19</span>
                                    <span className='text-[12px]'>September</span>
                                </div>
                            </div>
                            <div className='overflow-hidden h-[250px]'>
                                <div className='bg-no-repeat bg-cover bg-center w-full opacity-75 h-full  scale-[1.2]' style={{ backgroundImage: `url(${birth})` }}>
                                    <img className='max-w-[150px] pt-9 m-auto ' src={cake} alt="" />
                                    <h5 className='text-center xl:text-[20px] text-[14px] font-medium text-[#535165] leading-[20px]'>
                                        <a className='text-[#fa6342]' href="">Lucy Carbel</a> valentine's <br />birthday
                                    </h5>
                                    <p className='text-center leading-[16px] xl:text-[14px] text-[12px] text-[#727895] pt-1'>leave a message with your best <br /> wishes on his profile.</p>
                                </div>
                            </div>
                        </div>

                        {/* advertisement */}
                        <div className='mt-4 widget'>
                            <h3 className='text-[13px] font-normal'>Advertisment</h3>
                            <img src={add} alt="" />
                        </div>

                        {/* recent activity */}
                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
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
                        <div className="mt-4 widget border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
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
                        {/* Create Post */}
                        <div className='mt-4'>
                            <Createpost />
                        </div>

                        {/* Reels */}
                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className="border-b-[1px] flex items-center  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                <h4>Reels</h4>
                                <a className='ms-auto text-[#fa6342] text-[12px] hover:text-[#0056b3]' href="#">View All</a>
                            </div>
                            <div className='p-4 grid gap-2 grid-cols-4'>
                                <div className='relative'>
                                    <div className='group relative w-full rounded-[10px] bg-red-500 cursor-pointer after:absolute after:content-[""] after:top-0 after:left-0 after:bg-[#00000033] after:rounded-[10px] after:h-full after:w-full after:z-0 hover:after:z-[-1]'>
                                        <div className='rounded-[10px] relative overflow-hidden'>
                                            <img className='transition-all duration-200 object-cover ease-linear delay-0 w-full rounded-[10px] group-hover:scale-105' src={story_one} alt="" />
                                            <span className='absolute text-black font-medium text-[12px] w-full text-center bottom-[-25px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[5px]'>Add Your Story</span>
                                        </div>
                                    </div>
                                    <div className='group absolute top-[15px] left-[15px]'>
                                        <GoPlus className='text-[20px]' />
                                        <span class="absolute bottom-5 left-[-20px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-[10px] text-white group-hover:scale-100">Add your story</span>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className='group relative w-full rounded-[10px] bg-red-500 cursor-pointer after:absolute after:content-[""] after:top-0 after:left-0 after:bg-[#00000033] after:rounded-[10px] after:h-full after:w-full after:z-0 hover:after:z-[-1]'>
                                        <div className='rounded-[10px] relative overflow-hidden'>
                                            <img className='transition-all duration-200 object-cover ease-linear delay-0 w-full rounded-[10px] group-hover:scale-105' src={story_two} alt="" />
                                            <span className='absolute text-black font-medium text-[12px] w-full text-center bottom-[-25px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[5px]'>Add Your Story</span>
                                        </div>
                                    </div>
                                    <div className='group absolute top-[15px] left-[15px]'>
                                        <img alt="" src={thumb_one} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                        <span class="absolute bottom-9 left-[-10px] text-[10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-white group-hover:scale-100">Adam James</span>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className='group relative w-full rounded-[10px] bg-red-500 cursor-pointer after:absolute after:content-[""] after:top-0 after:left-0 after:bg-[#00000033] after:rounded-[10px] after:h-full after:w-full after:z-0 hover:after:z-[-1]'>
                                        <div className='rounded-[10px] relative overflow-hidden'>
                                            <img className='transition-all duration-200 object-cover ease-linear delay-0 w-full rounded-[10px] group-hover:scale-105' src={story_three} alt="" />
                                            <span className='absolute text-black font-medium text-[12px] w-full text-center bottom-[-25px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[5px]'>Add Your Story</span>
                                        </div>
                                    </div>
                                    <div className='group absolute top-[15px] left-[15px]'>
                                        <img alt="" src={thumb_two} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                        <span class="absolute bottom-9 left-[-10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-[10px] text-white group-hover:scale-100">Emily Grey</span>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className='group relative w-full rounded-[10px] bg-red-500 cursor-pointer after:absolute after:content-[""] after:top-0 after:left-0 after:bg-[#00000033] after:rounded-[10px] after:h-full after:w-full after:z-0 hover:after:z-[-1]'>
                                        <div className='rounded-[10px] relative overflow-hidden'>
                                            <img className='transition-all duration-200 object-cover ease-linear delay-0 w-full rounded-[10px] group-hover:scale-105' src={story_four} alt="" />
                                            <span className='absolute text-black font-medium text-[12px] w-full text-center bottom-[-25px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[5px]'>Add Your Story</span>
                                        </div>
                                    </div>
                                    <div className='group absolute top-[15px] left-[15px]'>
                                        <img alt="" src={thumb_three} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                        <span class="absolute bottom-9 left-[-10px] scale-0 w-max transition-all rounded bg-gray-800 p-1 text-[10px] text-white group-hover:scale-100">John Deo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* news feed */}
                        <div className="mt-4 border-[1px] p-5 border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className='flex items-center'>
                                <img className='rounded-full w-10' src={nearly_1} alt="" />
                                <div className='ms-4'>
                                    <h6 className='text-[13px] font-medium'><a className='text-[#fa6342] text-[14px]' href="#">Jack Carter</a> Post Album</h6>
                                    <span className='text-[#999] text-[12px] flex '><FaGlobe className='me-2' /> published: September,15 2020 19:PM </span>
                                </div>
                                <div className='ms-auto me-[10px] group relative transition-all duration-200  ease-linear delay-0 cursor-pointer after:absolute after:content-[""] after:w-[33px] after:h-[33px]  after:bg-[#eee] after:top-2/4 after:left-2/4 after:rounded-full after:-translate-x-2/4 after:-translate-y-2/4 after:scale-0 hover:after:scale-100 hover:after:-translate-x-2/4 hover:after:-translate-y-2/4'>
                                    <LuMoreHorizontal className='text-[#999] text-[20px] absolute top-[-10px] left-[-10px] z-[1] ' />
                                    <ul style={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, .1)' }} className='w-[175px] bg-white p-4 transition-all duration-200 ease-linear delay-0 absolute invisible opacity-0 top-[-10px] z-[1]  right-0  group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:top-[100%] group-hover:right-[-1px]'>
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
                            <div className='mt-4'>
                                <p className='text-[14px] tracking-[-0.1px] leading-[26px] mb-4 font-normal text-[#727895]'>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                                <div className='group flex gap-[1px] relative mb-2'>
                                    <div className='flex w-full flex-col gap-[1px]'>
                                        <img src={album1} alt="" />
                                        <img src={album2} alt="" />
                                    </div>
                                    <div className='flex w-full flex-col gap-[1px]'>
                                        <img src={album5} alt="" />
                                        <img src={album4} alt="" />
                                        <div className='relative w-full after:absolute after:content-[""] after:bg-[#fa6342cc] after:top-0 after:left-0 after:w-full after:opacity-70 after:h-full'>
                                            <img className='w-full' src={album3} alt="" />
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[30px] font-medium text-white z-[2]'>+15</span>
                                        </div>
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
                                <div>
                                    <ul className='mt-4'>
                                        <li className='flex gap-3 mb-5'>
                                            <img alt="" src={user_one} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            <div className='border-b-[1px] border-solid border-b-[#ede9e9] pb-2'>
                                                <h4 className='text-[14px] font-medium me-2 inline-block'>
                                                    <a className='hover:text-[#fa6342]' href="#">Jason Borne</a>
                                                </h4>
                                                <p className='inline text-[13px] leading-[20px]'>We Are Working For The Dance And Sing Songs. This Video Is Very Awesome For The Youngster. Please Vote This Video And Like Our Channel</p>
                                                <p className='text-[12px] me-[10px] flex items-center mt-1 text-[#727895]'>1 year ago<FaReply className='me-4 ms-3 text-[14px]' /><span className='flex items-center hover:text-[#fa6342]'><FaHeart className='text-[14px] me-1' />20</span></p>
                                            </div>
                                        </li>
                                        <li className='flex gap-3 mb-5'>
                                            <img alt="" src={user_two} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            <div className='border-b-[1px] border-solid border-b-[#ede9e9] pb-2'>
                                                <h4 className='text-[14px] font-medium me-2 inline-block'>
                                                    <a className='hover:text-[#fa6342]' href="#">Sophia</a>
                                                </h4>
                                                <p className='inline text-[13px] leading-[20px]'>We Are Working For The Dance And Sing Songs. This Video Is Very Awesome For The Youngster.<img className='w-6 h-6 inline' src={smile} alt="smiley" /></p>
                                                <p className='text-[12px] me-[10px] flex items-center text-[#727895] mt-1'>1 year ago<FaReply className='me-4 ms-3 text-[14px]' /><span className='flex items-center hover:text-[#fa6342]'><FaHeart className='text-[14px] me-1' />20</span></p>
                                            </div>
                                        </li>
                                        <li className='mb-5'>
                                            <a className='text-[#fa6342] text-[12px] font-medium ms-auto table relative after:transition-all after:duration-200 after:ease-linear after:delay-0 after:absolute after:h-[1px] after:w-full after:bg-[#fa6342] after:-bottom-[5px] after:left-0 after:invisible after:opacity-0 hover:after:opacity-100 hover:after:visible hover:after:bottom-[2px]' href="#">more comments+</a>
                                        </li>
                                        <li className='flex'>
                                            <img alt="" src={user_one} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                                            <div className='ms-4 w-full relative'>
                                                <textarea className='bg-[#edf2f6]  rounded-[5px] text-[13px] h-[80px] leading-4 resize-none border-none p-[10px] w-full' placeholder="Post your comment" name="" id="" />
                                                <div className='flex items-center absolute right-3 top-2/4 -translate-y-2/4'>
                                                    <div className='relative '>
                                                        <CiImageOn className='text-[20px] me-3' />
                                                        <input type="file" className='opacity-0 w-[17px] h-[17px] absolute top-0' />
                                                    </div>
                                                    <span className='em-expressionless'></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* news feed-2 */}
                        <div>
                            <Newspost imagepost={userposter} />
                        </div>

                        {/* news feed-3 */}
                        <div>
                            <Newspost imagepost={sponser} />
                        </div>
                    </div>

                    <div>
                        {/* user badges */}
                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
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

                        {/* top tranding */}
                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className="border-b-[1px]  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                <h4>Top Trending</h4>
                            </div>
                            <div className='p-4'>
                                <Tabs className='tab-follower top-trending' aria-label="Default tabs" variant="default">
                                    <Tabs.Item active title="Trending" >
                                        <div className='pt-2'>
                                            <ul>
                                                <li className='xl:flex lg:block sm:flex items-center'>
                                                    <div className=''>
                                                        <img className='max-w-full ' src={recent_1} alt="" />
                                                    </div>
                                                    <div className='xl:ms-4 lg:ms-0 sm:ms-4'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#">moira's fade reaches much farther than you think.</a></h6>
                                                        <span className='text-[11px] font-light'>2 weeks ago</span>
                                                    </div>
                                                </li>
                                                <li className='xl:flex lg:block sm:flex items-center'>
                                                    <div className=''>
                                                        <img className='max-w-full ' src={recent_2} alt="" />
                                                    </div>
                                                    <div className='xl:ms-4 lg:ms-0 sm:ms-4 w-full'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#">daniel asks if we want him to do the voice of doomfist</a></h6>
                                                        <span className='text-[11px] font-light'>3 months ago</span>
                                                    </div>
                                                </li>
                                                <li className='xl:flex lg:block sm:flex items-center'>
                                                    <div className=''>
                                                        <img className='max-w-full ' src={recent_3} alt="" />
                                                    </div>
                                                    <div className='xl:ms-4 lg:ms-0 sm:ms-4 w-full'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#">the pitnik overwatch scandals.</a></h6>
                                                        <span className='text-[11px] font-light'>1 day before</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tabs.Item>
                                    <Tabs.Item title="Hot" >
                                        <div>
                                            <ul>
                                                <li className='flex items-center pb-2'>
                                                    <div>
                                                        <img className='rounded-[5px]' src={song_1} alt="" />
                                                    </div>
                                                    <div className='ms-4 w-full'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#">6 Kiss (Feat. JuiceWrld & YNW Melly)</a></h6>
                                                        <span className='text-[12px] cursor-pointer hover:text-[#fa6342] hover:underline'>by Yung Bans</span>
                                                    </div>
                                                </li>
                                                <li className='flex items-center pb-2'>
                                                    <div>
                                                        <img className='rounded-[5px]' src={song_2} alt="" />
                                                    </div>
                                                    <div className='ms-4 w-full'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#">A love letter to you for</a></h6>
                                                        <span className='text-[12px] cursor-pointer hover:text-[#fa6342] hover:underline'>By Trippie Redd</span>
                                                    </div>
                                                </li>
                                                <li className='flex items-center pb-2'>
                                                    <div>
                                                        <img className='rounded-[5px]' src={song_3} alt="" />
                                                    </div>
                                                    <div className='ms-4 w-full'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#"> Strings feat. Gunna Official</a></h6>
                                                        <span className='text-[12px] cursor-pointer hover:text-[#fa6342] hover:underline'>By Iann Dior</span>
                                                    </div>
                                                </li>
                                                <li className='flex items-center pb-2'>
                                                    <div>
                                                        <img className='rounded-[5px]' src={song_4} alt="" />
                                                    </div>
                                                    <div className='ms-4 w-full'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#">Partna in Crime</a></h6>
                                                        <span className='text-[12px] cursor-pointer hover:text-[#fa6342] hover:underline'>By Lil Tecca</span>
                                                    </div>
                                                </li>
                                                <li className='flex items-center pb-2'>
                                                    <div>
                                                        <img className='rounded-[5px]' src={song_5} alt="" />
                                                    </div>
                                                    <div className='ms-4 w-full'>
                                                        <h6 className='text-[#535165] text-[13px] font-medium cursor-pointer'><a className='hover:text-[#fa6342]' href="#">Majin Mafia official song</a></h6>
                                                        <span className='text-[12px] cursor-pointer hover:text-[#fa6342] hover:underline'>By Fetty Wap</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tabs.Item>
                                </Tabs>
                            </div>
                        </div>

                        {/* explor events */}
                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className="border-b-[1px] flex items-center  border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                <h4>Explor Events</h4>
                                <a className='ms-auto text-[#fa6342] text-[12px] hover:text-[#0056b3]' href="#">View All</a>
                            </div>
                            <div className='m-4 bg-[#7750f8] relative py-[15px] px-[10px] overflow-hidden rounded-[5px] text-center'>
                                <LuGift className='text-white text-[40px] m-auto mb-[10px] ' />
                                <h5 className='text-[16px] leading-[1.2] font-medium text-white'>Ocean Motel good night event in columbia</h5>
                                <img className='absolute top-[10px] -right-[30px] opacity-30' src={clock} alt="" />
                            </div>
                            <div className='m-4 bg-[#3ca9fc] relative py-[15px] px-[10px] overflow-hidden rounded-[5px] text-center'>
                                <TfiMicrophone className='text-white text-[40px] m-auto mb-[10px] ' />
                                <h5 className='text-[16px] leading-[1.2] font-medium text-white'>2016 The 3rd International Conference</h5>
                                <img className='absolute top-[10px] -right-[30px] opacity-30' src={clock} alt="" />
                            </div>
                        </div>

                        {/* favourite this page */}
                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className="border-b-[1px] border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                <h4>Faved This Page</h4>
                            </div>
                            <div className='p-5'>
                                <ul className='grid grid-cols-5 gap-3'>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar1} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Sophie</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar2} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>John</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar3} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Amy</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar4} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Maria</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar4} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Lucie</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar6} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Sanjana</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar7} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>jack</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar8} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Lucie</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar9} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Sarah</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar10} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Tomy</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar11} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Adam</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar12} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Sadie</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar13} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Vikas</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            <img src={avtar14} className='rounded-full' alt="" />
                                        </a>
                                        <span className='absolute bg-black text-white p-[2px] rounded-[5px] font-medium text-[12px] text-center bottom-[5px] invisible opacity-0 -translate-y-1/2 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-[35px]'>Musa</span>
                                    </li>
                                    <li className='group relative'>
                                        <a className='relative bg-[#3ca9fc] text-[12px] text-white flex justify-center items-center w-[46px] rounded-full h-[46px] text-center after:absolute after:content-[""] after:bg-[#fa6342b3] after:rounded-full after:top-0 after:left-0 after:w-full after:h-full after:scale-0 after:transition-all after:duration-200 after:ease-linear after:delay-0 after:invisible  group-hover:after:visible group-hover:after:scale-100' href="#">
                                            +20K
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* post new job */}
                        <div className='mt-4 text-center bg-black w-full relative after:absolute after:content-[""] after:bg-[#9e72fa] after:opacity-[0.95] after:z-[1] after:top-0 after:left-0 after:w-full after:h-full'>
                            <img src={jobbanner} className='relative bg-no-repeat object-cover bg-cover bg-center top-0 left-0 w-full' alt="" />
                            <div className='absolute p-4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 text-center w-full'>
                                <img className='max-w-[80px] m-auto' src={jobicon} alt="" />
                                <span className='text-[23px] font-medium mt-[10px]'>Post a new job</span>
                                <p className='text-13px] leading-[20px] text-[#eee]'>Create a new job post for hire a new talented from the pitnik</p>
                                <button style={{ boxShadow: '4px 7px 12px 0 rgba(250, 99, 66, .2)' }} className='bg-[#fa6342] mt-3 text-white rounded-[30px] py-[10px] px-[26px] transition-all duration-200 ease-linear delay-0 hover:bg-[#888da8]'>Post Job</button>
                            </div>

                        </div>

                        {/* #tags */}
                        <div className="mt-4 border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                            <div className="border-b-[1px] border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]">
                                <h4>#Tags:</h4>
                            </div>
                            <div className='p-4'>
                                <a className='border-[1px] inline-block me-1 border-solid border-[#dcdcdc] text-[11px] py-[2px] px-2 transition-all duration-200 ease-linear delay-0 mb-[5px] rounded-[15px] hover:text-white hover:bg-[#fa6342] hover:border-[#fa6342]]' href="">News</a>
                                <a className='border-[1px] inline-block me-1 border-solid border-[#dcdcdc] text-[11px] py-[2px] px-2 transition-all duration-200 ease-linear delay-0 mb-[5px] rounded-[15px] hover:text-white hover:bg-[#fa6342] hover:border-[#fa6342]]' href="">Gaming</a>
                                <a className='border-[1px] inline-block me-1 border-solid border-[#dcdcdc] text-[11px] py-[2px] px-2 transition-all duration-200 ease-linear delay-0 mb-[5px] rounded-[15px] hover:text-white hover:bg-[#fa6342] hover:border-[#fa6342]]' href="">Sports</a>
                                <a className='border-[1px] inline-block me-1 border-solid border-[#dcdcdc] text-[11px] py-[2px] px-2 transition-all duration-200 ease-linear delay-0 mb-[5px] rounded-[15px] hover:text-white hover:bg-[#fa6342] hover:border-[#fa6342]]' href="">Health</a>
                                <a className='border-[1px] inline-block me-1 border-solid border-[#dcdcdc] text-[11px] py-[2px] px-2 transition-all duration-200 ease-linear delay-0 mb-[5px] rounded-[15px] hover:text-white hover:bg-[#fa6342] hover:border-[#fa6342]]' href="">Website</a>
                                <a className='border-[1px] inline-block me-1 border-solid border-[#dcdcdc] text-[11px] py-[2px] px-2 transition-all duration-200 ease-linear delay-0 mb-[5px] rounded-[15px] hover:text-white hover:bg-[#fa6342] hover:border-[#fa6342]]' href="">Love</a>
                                <a className='border-[1px] inline-block me-1 border-solid border-[#dcdcdc] text-[11px] py-[2px] px-2 transition-all duration-200 ease-linear delay-0 mb-[5px] rounded-[15px] hover:text-white hover:bg-[#fa6342] hover:border-[#fa6342]]' href="">Fashion</a>
                            </div>
                        </div>

                        {/* piknik create */}
                        <div className='mt-4 flex items-center border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]'>
                            <div className='relative w-[70px] before:absolute before:w-[70px] before:content-[""] before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-black before:opacity-[0.6]'>
                                <img src={create} alt="" />
                                <span style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }} className='uppercase text-white text-[24px] font-bold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>create</span>
                            </div>
                            <div className='ms-4 w-[67%]'>
                                <img src={logo} className='m-auto' alt="" />
                                <p className='text-[13px] text-[#535165] leading-[23px] my-4'>The Best Post on Pitnik for you, Pulled from the most active communities on Pitnik. Check here to see the most shared, upvoted, and commented content on the internet.</p>
                                <button style={{ boxShadow: '4px 7px 12px 0 rgba(250, 99, 66, .2)' }} className='border-[#fa6342] text-[#fa6342] text-[13px] font-medium border-[1px] border-solid rounded-[5px] py-[10px] px-[26px] bg-transparent transition-all duration-200 ease-linear delay-0 w-full hover:bg-[#fa6342] hover:text-white'>Create Post</button>
                            </div>
                        </div>

                        {/* footer */}
                        <div className='mt-4'>
                            <Footers />
                        </div>

                    </div>
                </div>
            </div >

            <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed bottom-0 top-0 right-0 flex max-w-full pl-10">
                                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                    <Dialog.Panel className="pointer-events-auto relative w-[850px]">
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
                                            {/* <div className="mb-[15px]">
                                                                <Dialog.Title className="text-base font-medium text-[18px] leading-6">
                                                                    General Setting
                                                                </Dialog.Title>
                                                            </div> */}
                                            <div>

                                                <iframe
                                                    width="853"
                                                    height="480"
                                                    src='https://youtu.be/UXnxgRyGzJQ'
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded youtube"
                                                />
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}