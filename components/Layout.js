import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Header } from "./Header";
function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Navbar />
            <Footer />
        </>
    )
}
export { Layout }