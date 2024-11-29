import Main from "./componants/Main/Main";
import Sidebar from "./componants/Sidebar/Sidebar";

function App() {
    return (
        <div className="w-full h-screen flex overflow-y-auto">
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
