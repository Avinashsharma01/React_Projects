import Logout from "./Logout"
import Search from "./Search"
import Users from "./Users"
function LeftPart() {
  return (
    <div className="w-[25%] bg-slate-700 min-h-screen text-gray-400">
        <Search/>
        <Users/>
        <Logout/>
    </div>
  )
}

export default LeftPart