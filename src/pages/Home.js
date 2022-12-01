import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get  women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.category === "" || item.category === "women's clothing";
  });

  return (
    <div>
      <Hero />
      <h1 className="p-10 font-bold bg-red-200">New Arrival</h1>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <h1 className="p-10 font-bold bg-red-200">Thrift</h1>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <h1 className="p-10 font-bold bg-red-200">Customized</h1>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
