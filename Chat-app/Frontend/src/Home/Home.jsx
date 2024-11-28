import LeftPart from "./Left/LeftPart";
import RightPart from "./Right/RightPart";
const Home = () => {
    return (
        <div className="w-full h-screen flex">
            <LeftPart />
            <RightPart />
        </div>
    );
};

export default Home;
