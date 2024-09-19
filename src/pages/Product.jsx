import { useEffect, useState } from "react";
import AppCards from "../components/Cards";

function AppProduct() {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const [itemNotFound, setitemNotFound] = useState(false);

  useEffect(() => {
    const getApiData = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProduct(data.products)
            setLoader(false)
            
          })
          .catch((err) => {
            console.log(err)
            setLoader(false)
          setitemNotFound(true)
        });
    }
    getApiData();
  }, [])
  return <AppCards productsArr={product} loader={loader} notFound={itemNotFound} />;
}
export default AppProduct;
