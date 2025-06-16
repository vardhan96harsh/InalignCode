// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useState } from "react";

// type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// const Contact = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
//   const [status, setStatus] = useState("");

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/contact", data);
//       if (response.status === 200) {
//         setStatus("Message sent successfully!");
//         reset();
//       }
//     } catch (error) {
//       setStatus("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section id="contact" className="min-h-screen  py-16 px-6">
   
//     </section>
//   );
// };

// export default Contact;
