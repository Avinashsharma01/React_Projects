import Accordian from "./Project-1/Accordian";
import RandomColor from "./Project-2/RandomColor";
import StarRatting from "./Project-3/StarRatting";

const App = () => {
    return (
        <>
            <Accordian />
            <RandomColor />
            <StarRatting noOfStar={10} />
        </>
    );
};

export default App;
