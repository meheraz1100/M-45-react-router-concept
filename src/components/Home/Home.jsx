import { Outlet, useNavigation, useLocation } from "react-router-dom"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <p><span className="loading loading-bars loading-lg"></span></p>:
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;