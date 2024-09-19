import { Link } from "react-router-dom";
import AppSpinner from "./Spinner";
import AppNotFound from "../pages/NotFound";

function AppCards({ productsArr, loader, notFound }) {
  return (


    loader ? < AppSpinner className="appSpinner" />
      :
      notFound ? <AppNotFound />
        :
        <section className=" body-font container">
          <div className="container px-1 py-10 mx-auto ">
            <div className="text-center">
              <h1 className="sm:text-5xl text-2xl mb-6 font-medium title-font ">
                Our Products
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mb-4 mx-auto text-gray-500s">
                "Enhance your natural beauty with our luxurious cosmetic collection, designed to deliver flawless results. Our products are crafted with high-quality, skin-loving ingredients to nourish and protect, Discover the perfect blend of science and beauty for all skin types.
              </p>
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-10"  />
            </div>
            
            <div className="flex flex-wrap -m-4 ">
              {productsArr
                .filter((val) => val.category == "beauty" || val.category == "fragrances")
                .map((val) => {
                  const { id, thumbnail, category, title, price } = val;
                  return (
                    <Link to={`/product/${id}`} key={id} className="lg:w-1/4 md:w-1/2 p-3 w-full">
                      {/* Removed <a> tag */}
                      <div className="block relative h-48 rounded overflow-hidden ">
                        <img
                          alt="ecommerce"
                          className="object-cover w-full h-full block productImage productCards"
                          src={thumbnail}
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {category}
                        </h3>
                        <h2 className=" title-font text-lg font-medium">{title}</h2>
                        <p className="mt-1">${price}</p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>



  )
}

export default AppCards;
