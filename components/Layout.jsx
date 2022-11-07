import About from "./About";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <About /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
