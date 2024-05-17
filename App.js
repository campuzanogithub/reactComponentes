import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Aside from "./components/aside";
import Content from "./components/content";
function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container mt-5">
        <div className="row">
          <Aside />
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
