import Header from "./Header";
import Footer from "./Footer";
import "../../css/Layout.css"

export default function LayoutPrincipal(props) {
    return (
        <div className="containerGeneral">
            <Header/>
            <main className="main">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}