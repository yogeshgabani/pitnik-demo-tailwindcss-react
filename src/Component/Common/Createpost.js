import { CiImageOn, CiInstagram, CiLocationOn, CiMusicNote1 } from "react-icons/ci";
import { TfiVideoCamera } from "react-icons/tfi";
import admin from '../../Assets/Images/admin.jpg';
import { useState } from "react";


export default function Createpost() {

    const [show, setshow] = useState(false);

    return (
        <>
            {/* Create Post */}
            <div className="border-[1px] border-solid border-[#ede9e9] bg-white rounded-[6px]">
                <h4 className="border-b-[1px] border-solid border-b-[#e6ecf5] text-[14px] font-medium py-[15px] px-[20px] mb-5 w-full relative after:absolute after:content-[''] after:bg-[#fa6342] after:w-[3px] after:h-[15px] after:left-0 after:top-2/4 after:translate-y-[-50%]	">Create Post</h4>
                <div className='p-5'>
                    <div className='flex'>
                        <img className='rounded-full min-w[45px] h-[45px] me-3' src={admin} alt="" />
                        <textarea className='border-none resize-none w-full' name="" rows={2} placeholder='Share some what you are thinking?' id=""></textarea>
                    </div>
                    <div className='mt-4'>
                        <ul className='flex sm:flex-nowrap flex-wrap items-center'>
                            <li className='' onClick={() => setshow(!show)}>
                                <CiLocationOn className='text-[20px] me-4' />
                            </li>
                            <li className='relative'>
                                <CiMusicNote1 className='text-[20px] me-4' />
                                <input type="file" className='opacity-0 w-[17px] h-[17px] absolute top-0' />
                            </li>
                            <li className='relative'>
                                <input type="file" className='opacity-0 w-[17px] h-[17px] absolute top-0' />
                                <CiImageOn className='text-[20px] me-4' />
                            </li>
                            <li className='relative'>
                                <input type="file" className='opacity-0 w-[17px] h-[17px] absolute top-0' />
                                <TfiVideoCamera className='text-[20px] me-4' />
                            </li>
                            <li className='relative'>
                                <input type="file" className='opacity-0 w-[17px] h-[17px] absolute top-0' />
                                <CiInstagram className='text-[20px] me-4' />
                            </li>
                            <li className='sm:ms-auto sm:m-0'>
                                <button className='bg-white border-[1px] border-solid border-[#000000] rounded-[30px] text-[12px] fw-medium transition-all duration-200 ease-linear delay-0 px-[12px] py-[5px] hover:bg-[#fa6342] hover:text-white hover:border-[#fa6342]'>Preview</button>
                            </li>
                        </ul>
                        <button className='text-center w-full mt-5 bg-[#23bbe2] rounded-[5px] text-white font-medium transition-all duration-200 ease-linear delay-0 text-[14px] p-[7px] hover:bg-[#fa6342]'>Post</button>

                        <div className={show ? 'mt-4 visible opacity-100 max-h-max transition-all duration-200 ease-linear delay-0' : 'invisible opacity-0 h-0 transition-all duration-200 ease-linear delay-0 mt-4'}>
                            <span className='text-[#fa6342] text-[13px] mb-[10px]'>Drag map point to selected area</span>
                            <div className='sm:flex block items-center justify-between'>
                                <div className='mt-3'>
                                    <label className='text-[#3ca9fc] me-2 inline-block' htmlFor="">Lat:- </label>
                                    <input className='border-none bg-gray-100 h-[25px]' type="text" />
                                </div>
                                <div className='mt-3'>
                                    <label className='text-[#3ca9fc] me-2 inline-block' htmlFor="">Long:- </label>
                                    <input className='border-none bg-gray-100 h-[25px]' type="text" />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709469937!2d72.73989534695303!3d21.159340298568623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1720528907984!5m2!1sen!2sin" width="100%" height="350" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}