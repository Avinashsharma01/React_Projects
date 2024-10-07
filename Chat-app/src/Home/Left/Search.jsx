
import { CiSearch } from "react-icons/ci";function Search() {
  return (
    <div>
        <form action="">
            <div className="px-5 py-4 flex" >
                <input type="text" className="w-[90%] h-[40px] rounded-md outline-none px-2"  placeholder="Search Here" />
                <button  >
                <CiSearch  className="text-3xl "/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Search