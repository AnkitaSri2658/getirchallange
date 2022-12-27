import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import { fetchData } from "./store/product-actions";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    <>
      
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
