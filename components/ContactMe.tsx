import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const mailtoLink = `mailto:jefflincoln504@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center md:text-left md:flex-row max-w-2xl mx-auto'>

      <div className='md:ml-10 mb-12'>
        <h4 className='text-4xl font-semibold mb-8'>
          I've got just what you need.{" "}
          <span className='text-[#F7AB0A] underline'>Let's Talk.</span>
        </h4>

        <div className='mb-8 space-y-6'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7' />
            <p className='text-2xl'>+254 751 355 333</p>
          </div>

          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7' />
            <p className='text-2xl'>jefflincoln504@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7' />
            <p className='text-2xl'>Nairobi, Kenya</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 max-w-md mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register('message')} placeholder="Message" rows={4} className="contactInput" />

          <button
            type='submit'
            className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;




// import React from 'react';
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useRouter } from 'next/router';

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const ContactMe: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//   } = useForm<Inputs>();
//   const router = useRouter();

//   const onSubmit: SubmitHandler<Inputs> = (formData) => {
//     window.location.href = `mailto:jefflincoln504@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
//   };

//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center text-center md:text-left md:flex-row max-w-2xl mx-auto'>

//       <div className='md:ml-10 mb-12'>
//         <h4 className='text-4xl font-semibold mb-8'>
//           I've got just what you need.{" "}
//           <span className='text-[#F7AB0A] underline'>Let's Talk.</span>
//         </h4>

//         <div className='mb-8 space-y-6'>
//           <div className='flex items-center space-x-5'>
//             <PhoneIcon className='text-[#F7AB0A] h-7 w-7' />
//             <p className='text-2xl'>+254 751 355 333</p>
//           </div>

//           <div className='flex items-center space-x-5'>
//             <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7' />
//             <p className='text-2xl'>jefflincoln504@gmail.com</p>
//           </div>

//           <div className='flex items-center space-x-5'>
//             <MapPinIcon className='text-[#F7AB0A] h-7 w-7' />
//             <p className='text-2xl'>Nairobi, Kenya</p>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 max-w-md mx-auto'>
//           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//             <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
//             <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
//           </div>

//           <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

//           <textarea {...register('message')} placeholder="Message" rows={4} className="contactInput" />

//           <button
//             type='submit'
//             className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-lg">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactMe;


// import React from 'react';
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
// }

// type Props = {}

// const ContactMe = (props: Props) => {
//     const {
//         register,
//         handleSubmit,
//     } = useForm<Inputs>()
//     const onSubmit: SubmitHandler<Inputs> = (formData) => {
//         window.location.href=`mailto:jefflincoln504@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
//     };

//     return (
//         <div className='h-screen flex flex-col justify-center items-center'>
//             <h3 className='text-4xl font-bold text-[#F7AB0A] mb-6'>
//                 Let's Connect
//             </h3>

//             <div className='flex flex-col space-y-6 md:space-y-8'>
//                 <div className='flex items-center space-x-2'>
//                     <PhoneIcon className='text-[#F7AB0A] h-7 w-7' />
//                     <p className='text-lg'>+254751355333</p>
//                 </div>

//                 <div className='flex items-center space-x-2'>
//                     <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7' />
//                     <p className='text-lg'>jefflincoln504@gmail.com</p>
//                 </div>

//                 <div className='flex items-center space-x-2'>
//                     <MapPinIcon className='text-[#F7AB0A] h-7 w-7' />
//                     <p className='text-lg'>Nairobi, Kenya</p>
//                 </div>
//             </div>

//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className='flex flex-col space-y-4 max-w-md w-full'>
//                 <input {...register('name')} placeholder="Your Name" className="contactInput" type="text" />
//                 <input {...register('email')} placeholder="Your Email" className="contactInput" type="email" />
//                 <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
//                 <textarea {...register('message')} placeholder="Your Message" className="contactInput" rows={4} />

//                 <button
//                     type='submit'
//                     className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-ls hover:bg-yellow-600 transition-all duration-300 mx-auto">
//                     Send Message
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default ContactMe;




// import React from 'react';
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
// }

// type Props = {}

// const ContactMe = (props: Props) => {
//     const {
//         register,
//         handleSubmit,
//       } = useForm<Inputs>()
//       const onSubmit: SubmitHandler<Inputs> = (formData) => {
//         window.location.href=`mailto:jefflincoln504@gmail.com?
//         subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
//       };

//   return (
//     <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
//     max-w-7xl px-10 justify-evenly mx-auto items-center'>
//         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//             Contact
//         </h3>

//         <div className='flex flex-col space-y-10'>
//             <h4 className='text-4xl font-semibold text-center'>
//                 I have got just what you need.{" "}
//                 <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
//             </h4>

//             <div className='space-y-10'>
//                 <div className='flex items-center space-x-5 justify-center'>
//                     <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
//                     <p className='text-2xl'>+254751355333</p>
//                 </div>

//                 <div className='flex items-center space-x-5 justify-center'>
//                     <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
//                     <p className='text-2xl'>jefflincoln504@gmail.com</p>
//                 </div>

//                 <div className='flex items-center space-x-5 justify-center'>
//                     <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
//                     <p className='text-2xl'>Nairobi, Kenya</p>
//                 </div>
//             </div>

//             <form 
//             onSubmit={handleSubmit(onSubmit)}
//             className='flex flex-col space-y-2 w-fit mx-auto'>
//                 <div className='flex space-x-2'>
//                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
//                    <input {...register('email')} placeholder="email" className="contactInput" type="email" />
//                 </div>

//                 <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

//                 <textarea {...register('message')} placeholder="Message" className="contactInput" />
//                 <button 
//                 type='submit'
//                 className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold
//                 text-ls">
//                     Submit
//                 </button>
//             </form>
            
//         </div>
//     </div>
//   )
// }

// export default ContactMe