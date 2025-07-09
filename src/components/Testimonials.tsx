import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Nina T",
    role: "VP of Sales",
    text: "Inalign sounded so human during a lead call, we doubled response rates.",
    avatar: "",
  },
  {
    name: "Sunil K",
    role: "CEO",
    text: "Never dropped a single inquiry even on holidays.",
    avatar: "",
  },
  {
    name: "Rakesh Mehta",
    role: "Managing Director​",
    text: "Inalign increased our lead conversion rate by 3x in the first 2 months.",
    avatar: "",
  },
  {
    name: "Priya Shah",
    role: "Business Development Head​",
    text: "Our support load dropped by 80% after deploying Inalign.",
    avatar: "",
  },
  {
    name: "Tanvi Rao",
    role: "Sales Manager",
    text: "Inalign’s voice AI handled follow-ups better than most of our team.",
    avatar: "",
  },
  {
    name: "Nitin Kapoor",
    role: "Operations Manager",
    text: "We reduced our average call handling time by 60% without losing quality.",
    avatar: "",
  },
  {
    name: "Luke",
    role: "Talent Acquisition Head",
    text: "Clients often ask which rep they spoke to — they don’t realize it was Inalign.",
    avatar: "",
  },
  {
    name: "Arjun P",
    role: "Recruiter",
    text: "Our NPS jumped by 27 points in 6 weeks, thanks to Inalign’s natural voice.",
    avatar: "",
  },
  {
    name: "Prashant  D",
    role: "IT Manager",
    text: "Inalign’s consistency across thousands of calls helped us scale instantly.",
    avatar: "",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 2xl:py-44 px-6 text-white relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl 2xl:text-5xl font-bold mb-2">Testimonials</h2>
        <p className="text-white-400 max-w-2xl xl:text-xl 2xl:text-2xl mx-auto">
          Hear from creators, marketers, and innovators using our AI voice tools daily.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative group rounded-xl h-full p-6 text-white shadow-xl bg-white/10 backdrop-blur-md border border-white/10 transition-transform duration-500 hover:scale-[1.05]">
              <div className="text-yellow-300 text-lg 2xl:text-2xl mb-3">★★★★★</div>
              <p className="text-sm 2xl:text-lg mb-4 leading-relaxed">“{t.text}”</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                {/* <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" /> */}
                <div>
                  <p className="font-bold 2xl:text-lg">{t.name}</p>
                  <p className="text-sm 2xl:text-base text-blue-200">{t.role}</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-7xl text-white/60 group-hover:scale-110 transition-transform duration-500">
                &rdquo;
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
