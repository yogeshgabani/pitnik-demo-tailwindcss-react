import payment from '../../Assets/Images/credit-cards.png';

export default function Footer() {
    return (
        <>
            <div className='bg-[#e6ebef] mt-6'>
                <div className="container mx-auto flex sm:flex-nowrap flex-wrap gap-2 px-2 sm:justify-between justify-center items-center py-5">
                    <p className='text-[13px] font-normal'>© Pitnik 2020. All rights reserved.</p>
                    <img src={payment} alt="" />

                </div>
            </div>
        </>
    )
}