/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer/>
        </div>
    );
}

export default Layout;
