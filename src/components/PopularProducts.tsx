import { products } from "../app/constants";

export default function PopularProducts() {
  return (
    <section className="padding" id="products">
      <div className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Out <span className="text-coral-red">Popular</span> Porducts
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((item) => (
            <PopularProductCard key={item.name} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

 function PopularProductCard({
  product,
}: {
  product: { imgURL: string; name: string; price: string };
}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src="/assets/icons/star.svg" alt="rating" width={25} height={25} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {product.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">
        {product.price}
      </p>
    </div>
  );
}

