import Categories from "./components/categories";
import Courserecommended from "./components/courserecommended";
import Footer from "./components/footer";
import Imagesection from "./components/imagesection";
import Navbar from "./components/navbar";
import Popular from "./components/popular";
import Topicsrecommended from "./components/topicsrecommended";

function App() {
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Imagesection></Imagesection>
            <Courserecommended></Courserecommended>
            <Topicsrecommended></Topicsrecommended>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}
export default App