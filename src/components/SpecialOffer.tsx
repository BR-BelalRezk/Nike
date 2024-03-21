import Button from "./Button";

export default function SpecialOffer() {
  return (
    <section className="padding">
      <div className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-conatiner">
        <div className="flex-1">
          <img
            src="/assets/images/offer.svg"
            alt="offer"
            width={773}
            height={687}
            className=" object-contain w-full"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
            <span className="text-coral-red">Special</span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.{" "}
          </p>
          <div className="mt-12 flex flex-wrap gap-5">
            <Button label="Shop Now" icon="/assets/icons/arrow-right.svg" />
            <Button
              label="Learn More"
              bg="bg-white"
              border="border-slate-gray"
              text="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
