import { useForm } from "react-hook-form";
import { useState } from "react";

type DemoForm = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const BookDemo = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DemoForm>();
  const [status, setStatus] = useState("");

 const onSubmit = async (data: DemoForm) => {
  try {
    const response = await fetch("https://inalign-1.onrender.com/api/book-demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("✅ Demo request sent successfully!");
      reset();
    } else {
      setStatus("❌ Failed to send. Please try again later.");
    }
  } catch (error) {
    console.error("Error sending request:", error);
    setStatus("❌ Something went wrong.");
  }
};


  return (
    <section
      id="bookdemo"
      className=" bg-gradient-to-br from-[#1a0b3c] via-[#2b0d59] to-[#5b1d91] px-6 py-10 xl:py-20 2xl: flex items-center justify-center"
    >
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-10 2xl:p-12 text-white">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-center text-white mb-8">
          Book a <span className="text-[#FE5868]">Live Demo</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 2xl:space-y-7">
          {/* Name */}
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full bg-white/10 text-white placeholder-white/70 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.name && <p className="text-red-400 text-sm 2xl:text-2xl mt-1">Name is required.</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="w-full bg-white/10 text-white placeholder-white/70 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">Email is required.</p>}
          </div>

          {/* Company */}
          <div>
            <input
              type="text"
              {...register("company", { required: true })}
              placeholder="Company Name"
              className="w-full bg-white/10 text-white placeholder-white/70 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.company && <p className="text-red-400 text-sm mt-1">Company is required.</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              className="w-full bg-white/10 text-white placeholder-white/70 px-5 py-3 rounded-lg h-32 resize-none outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">Message is required.</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FE5868] hover:bg-[#e44a5c] text-white font-semibold rounded-lg transition"
          >
            Submit Request
          </button>

          {/* Status Message */}
          {status && <p className="text-green-400 text-center mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default BookDemo;
