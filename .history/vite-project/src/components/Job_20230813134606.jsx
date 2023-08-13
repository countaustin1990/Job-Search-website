import { BiTimeFive } from 'react-icons/bi'



 const Job = () => {
    return(
        <div>

            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <img src={logo1} alt='Company Logo' className='w-[10%]'/>
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    
                </div>
            </div> 
        </div>
    )
 }

 export default Job