import { useState } from "react";
import { shoes, statistics } from "../app/constants";
import Button from "./Button";

export default function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState("/assets/images/big-shoe1.png");
  return (
    <section className="xl:padding-l wide:padding-r padding-b" id="home">
      <div className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-conatiner">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>{" "}
            <br />{" "}
            <span className="inline-block text-coral-red mt-3">Nike</span> Shoes
          </h1>
          <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop Now" icon="/assets/icons/arrow-right.svg" />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {item.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 gap-5 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((item) => (
              <div key={item.bigShoe}>
                <ShoeCard
                  shoe={item}
                  changeBigShoeImage={(shoe: string) => setBigShoeImg(shoe)}
                  bigShowImage={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShoeCard({
  shoe,
  changeBigShoeImage,
  bigShowImage,
}: {
  shoe: { thumbnail: string; bigShoe: string };
  changeBigShoeImage: (shoe: string) => void;
  bigShowImage: string;
}) {
  const handleClick = () => {
    bigShowImage !== shoe.bigShoe ? changeBigShoeImage(shoe.bigShoe) : null;
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShowImage === shoe.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.thumbnail}
          alt={shoe.bigShoe}
          width={127}
          height={103}
          className=" object-contain"
        />
      </div>
    </div>
  );
}
