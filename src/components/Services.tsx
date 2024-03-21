import { services } from "../app/constants";

export default function Services() {
  return (
    <section className="padding-x py-10">
      <div className="max-conatiner flex justify-center flex-wrap gap-10">
        {services.map((item) => (
          <ServiceCard key={item.label} service={item} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    imgURL: string;
    label: string;
    subtext: string;
  };
}) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-12 h-12 justify-center items-center flex bg-coral-red rounded-full">
        <img src={service.imgURL} alt={service.label} width={25} height={25} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {service.label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {service.subtext}
      </p>
    </div>
  );
}
