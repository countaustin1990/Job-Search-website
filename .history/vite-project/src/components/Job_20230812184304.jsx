import { BiTimeFive } from 'react-icons/bi'

 const Job = () => {
    return(
        <div>

            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[20] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'/>Web Development

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive/>Now
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'/>Canada
                </div>
            </div> 
        </div>
    )
 }

 export default Job