import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main className="mx-auto max-w-4xl px-6 pt-12">{children}</main>
            <Footer></Footer>
        </>
    );
};

export default Layout;
