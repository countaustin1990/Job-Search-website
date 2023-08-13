import { BiTimeFive } from 'react-icons/bi'



 const Job = () => {
    return(
        <div>

            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'/>Web Development

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive/>Now
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'/>Canada

                    <p className='text-[13px] text-[#95959] pt-[20px] border-t-[20px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer. We have an open gate opened to talented people willing to give us a helping hand.
                    </p>

                    
                </div>
            </div> 
        </div>


<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    )
 }

 export default Job