import sideimg_one from '../../Assets/Images/side-friend1.jpg';
import sideimg_two from '../../Assets/Images/side-friend2.jpg';
import sideimg_three from '../../Assets/Images/side-friend3.jpg';
import sideimg_four from '../../Assets/Images/side-friend4.jpg';
import sideimg_five from '../../Assets/Images/side-friend5.jpg';
import sideimg_six from '../../Assets/Images/side-friend6.jpg';
import sideimg_seven from '../../Assets/Images/side-friend7.jpg';
import sideimg_eight from '../../Assets/Images/side-friend8.jpg';
import sideimg_nine from '../../Assets/Images/side-friend9.jpg';
import sideimg_ten from '../../Assets/Images/side-friend10.jpg';
import { IoMdClose, IoMdSend } from 'react-icons/io';
import { TfiMoreAlt } from 'react-icons/tfi';
import { useState } from 'react';

export default function SidebarRight() {

    const [show, setshow] = useState(null);
    const showchat = (index) => {
        if (show === index) {
            setshow(null);
        } else {
            setshow(index);
        }
    }
    const hidechat = () => {
        setshow(false)
    }

 


    return (
        <>
            <div className="sidebar-right hidden lg:block bg-white h-screen fixed top-[55px] w-[70px] end-0 py-7 z-[11]">
                <div className='relative pb-[65px]'>
                    <div className='text-center overflow-y-auto h-screen '>
                        
                        <ul className='inline-block side-right-list '>
                            <li className='mb-5' onClick={() => showchat(0)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_one} alt="" />
                                    <span className='success absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(1)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_two} alt="" />
                                    <span className='bg-[#bebebe] warning absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(2)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_three} alt="" />
                                    <span className='bg-[#bebebe] success absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(3)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_four} alt="" />
                                    <span className='bg-[#bebebe] absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(4)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_five} alt="" />
                                    <span className='bg-[#bebebe] success absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(5)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_six} alt="" />
                                    <span className='bg-[#bebebe] success absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(6)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_seven} alt="" />
                                    <span className='bg-[#bebebe] absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(7)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_eight} alt="" />
                                    <span className='bg-[#bebebe] success absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(8)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_nine} alt="" />
                                    <span className='bg-[#bebebe] warning absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(9)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_ten} alt="" />
                                    <span className='bg-[#bebebe] warning absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                            <li className='mb-5' onClick={() => showchat(10)}>
                                <div className='inline-block w-full relative'>
                                    <img className='rounded-full transition-all duration-200 delay-0 ease-linear' src={sideimg_eight} alt="" />
                                    <span className='bg-[#bebebe] success absolute w-[10px] h-[10px] rounded-full bottom-0 right-0 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={show === 0 ? 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box show' : 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box'}>
                    <div className='heading relative flex items-center text-white bg-[#7750f8] px-[10px] py-[15px] w-full'>
                        <span className='success absolute w-[10px] h-[10px] rounded-full top-2/4 -translate-y-2/4 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                        <h6 className='pl-5 text-[16px] font-medium'>Bucky Barnes</h6>
                        <div className='flex items-center  ms-auto'>
                            <div className='group relative'>
                                <TfiMoreAlt className="text-[20px] group-hover:cursor-pointer" />
                                <ul className='absolute opacity-0 invisible bg-white rounded-[3px] text-black p-[10px] end-0 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible'>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Block Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Unblock Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Conversation</li>
                                </ul>
                            </div>
                            <IoMdClose className='ml-3 text-[20px] cursor-pointer' onClick={hidechat} />
                        </div>
                    </div>
                    <div className='p-4'>
                        <ul>
                            <li className='flex mb-5'>
                                <div className='min-w-[28px]'>
                                    <img className='rounded-full' src={sideimg_one} alt="" />
                                </div>
                                <div className='ml-2'>
                                    <span className='bg-[#f0f4f9] inline-block rounded-[7px] p-3 text-[13px] text-[#333'>
                                        HI, Jack i have faced a problem with your software. are you available now, when i install this i have to received an error.
                                    </span>
                                    <span className='text-[#999] inline-block text-[11px] '>
                                        Today at 2:12pm
                                    </span>
                                </div>
                            </li>
                            <li className='flex flex-row-reverse justify-end mb-5'>
                                <div className='min-w-[28px] '>
                                    <img className='rounded-full' src={sideimg_five} alt="" />
                                </div>
                                <div className='me-2 '>
                                    <span className='bg-[#caef8e8c] inline-block rounded-[7px] p-3 text-[13px] text-[#333]'>
                                        Hi tina, Please let me know your purchase code, and show me the screnshot of error.
                                    </span>
                                    <span className='text-[#999] inline-block text-[11px] '>
                                        Today at 2:14pm
                                    </span>
                                </div>
                            </li>
                            <li className='flex mb-5'>
                                <div className='min-w-[28px]'>
                                    <img className='rounded-full' src={sideimg_one} alt="" />
                                </div>
                                <div className='ml-2'>
                                    <span className='bg-[#f0f4f9] inline-block rounded-[7px] p-3 text-[13px] text-[#333'>
                                        Yes, sure please wait a while, i ll show you the complete error list. Thank you.
                                    </span>
                                    <span className='text-[#999] inline-block text-[11px] '>
                                        Today at 2:15pm
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div className='flex'>
                            <textarea className='text-[14px] h-12 leading-7 bg-[#f0f0f0] w-full p-[10px] border-1px border-solid border-[#eee]' placeholder='Enter to post...' />
                            <button className='p-2 ms-2 rounded-[10px] bg-[#4f2bf0] text-white flex justify-center items-center w-[80px]'><IoMdSend className='text-[20px]' /></button>
                        </div>
                    </div>
                </div>
                <div className={show === 1 ? 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box show' : 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box'}>
                    <div className='heading relative flex items-center text-white bg-[#7750f8] px-[10px] py-[15px] w-full'>
                        <span className='success absolute w-[10px] h-[10px] rounded-full top-2/4 -translate-y-2/4 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                        <h6 className='pl-5 text-[16px] font-medium'>Bucky Barnes</h6>
                        <div className='flex items-center  ms-auto'>
                            <div className='group relative'>
                                <TfiMoreAlt className="text-[20px] group-hover:cursor-pointer" />
                                <ul className='absolute opacity-0 invisible bg-white rounded-[3px] text-black p-[10px] end-0 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible'>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Block Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Unblock Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Conversation</li>
                                </ul>
                            </div>
                            <IoMdClose className='ml-3 text-[20px] cursor-pointer' onClick={hidechat} />
                        </div>
                    </div>
                </div>
                <div className={show === 2 ? 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box show' : 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box'}>
                    <div className='heading relative flex items-center text-white bg-[#7750f8] px-[10px] py-[15px] w-full'>
                        <span className='success absolute w-[10px] h-[10px] rounded-full top-2/4 -translate-y-2/4 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                        <h6 className='pl-5 text-[16px] font-medium'>Bucky Barnes</h6>
                        <div className='flex items-center  ms-auto'>
                            <div className='group relative'>
                                <TfiMoreAlt className="text-[20px] group-hover:cursor-pointer" />
                                <ul className='absolute opacity-0 invisible bg-white rounded-[3px] text-black p-[10px] end-0 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible'>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Block Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Unblock Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Conversation</li>
                                </ul>
                            </div>
                            <IoMdClose className='ml-3 text-[20px] cursor-pointer' onClick={hidechat} />
                        </div>
                    </div>
                </div>
                <div className={show === 3 ? 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box show' : 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box'}>
                    <div className='heading relative flex items-center text-white bg-[#7750f8] px-[10px] py-[15px] w-full'>
                        <span className='success absolute w-[10px] h-[10px] rounded-full top-2/4 -translate-y-2/4 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                        <h6 className='pl-5 text-[16px] font-medium'>Bucky Barnes</h6>
                        <div className='flex items-center  ms-auto'>
                            <div className='group relative'>
                                <TfiMoreAlt className="text-[20px] group-hover:cursor-pointer" />
                                <ul className='absolute opacity-0 invisible bg-white rounded-[3px] text-black p-[10px] end-0 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible'>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Block Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Unblock Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Conversation</li>
                                </ul>
                            </div>
                            <IoMdClose className='ml-3 text-[20px] cursor-pointer' onClick={hidechat} />
                        </div>
                    </div>
                </div>
                <div className={show === 4 ? 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box show' : 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box'}>
                    <div className='heading relative flex items-center text-white bg-[#7750f8] px-[10px] py-[15px] w-full'>
                        <span className='success absolute w-[10px] h-[10px] rounded-full top-2/4 -translate-y-2/4 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                        <h6 className='pl-5 text-[16px] font-medium'>Bucky Barnes</h6>
                        <div className='flex items-center  ms-auto'>
                            <div className='group relative'>
                                <TfiMoreAlt className="text-[20px] group-hover:cursor-pointer" />
                                <ul className='absolute opacity-0 invisible bg-white rounded-[3px] text-black p-[10px] end-0 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible'>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Block Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Unblock Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Conversation</li>
                                </ul>
                            </div>
                            <IoMdClose className='ml-3 text-[20px] cursor-pointer' onClick={hidechat} />
                        </div>
                    </div>
                </div>
                <div className={show === 5 ? 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box show' : 'bg-[#fbfbfb] w-[300px] transition-all duration-200 ease-linear delay-0 border-[1px] border-solid border[#e1e8ed] rounded-[3px] absolute bottom-[53px] end-[100%] chat-box'}>
                    <div className='heading relative flex items-center text-white bg-[#7750f8] px-[10px] py-[15px] w-full'>
                        <span className='success absolute w-[10px] h-[10px] rounded-full top-2/4 -translate-y-2/4 after:absolute after:content-[""] after:h-[2px] after:w-[6px] after:bg-white after:top-2/4 after:left-2/4 transform'></span>
                        <h6 className='pl-5 text-[16px] font-medium'>Bucky Barnes</h6>
                        <div className='flex items-center  ms-auto'>
                            <div className='group relative'>
                                <TfiMoreAlt className="text-[20px] group-hover:cursor-pointer" />
                                <ul className='absolute opacity-0 invisible bg-white rounded-[3px] text-black p-[10px] end-0 transition-all duration-200 ease-linear delay-0 group-hover:opacity-100 group-hover:visible'>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Block Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Unblock Chat</li>
                                    <li className='text-[11px] cursor-pointer hover:text-[#fa6342] leading-[24px]'>Conversation</li>
                                </ul>
                            </div>
                            <IoMdClose className='ml-3 text-[20px] cursor-pointer' onClick={hidechat} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}