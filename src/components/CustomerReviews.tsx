import { reviews } from "../app/constants";

export default function CustomerReviews() {
  return (
    <section className="bg-pale-blue padding">
      <div className="max-conatiner">
        <h3 className=" font-palanquin text-center text-4xl font-bold">
          What Our <span className=" text-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-5">
          {reviews.map((item) => (
            <ReviewCard key={item.customerName} review={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: {
  review: {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
  };
}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={review.imgURL}
        alt={review.customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{review.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-3">
        <img
          src="/assets/icons/star.svg"
          alt="star"
          width={25}
          height={25}
          className=" object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">
          ({review.rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {review.customerName}
      </h3>
    </div>
  );
}
