import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
    return(
        <div className='SearchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form action=''>
                <div className='firstDiv flex justified-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className='flex gap-2 items-center'>
                       <div className="flex gap-2 items-center">
                            <AiOutlineSearch className='text-[25px] icon'/>
                        </div> 
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search