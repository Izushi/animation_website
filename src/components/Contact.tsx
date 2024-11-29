import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) {
      newErrors.firstName = 'This field is required';
    } else if (firstName.length > 15) {
      newErrors.firstName = 'Please input name below 15 letters';
    }
    if (!lastName) newErrors.lastName = 'This field is required';
    if (!email) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setErrors({});
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // setErrors({});
      console.log('Form submitted');
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-bold text-teal-300 mb-4">Contact</h2>
      <div className="max-w-[900px] container mx-auto bg-slate-800 rounded-lg py-5 px-20">
        <h2 className="text-4xl text-teal-300 mb-4">Contact Us</h2>
        <div className="flex space-x-4 mb-5">
          <div className="flex-1">
            <label htmlFor="first_name" className="text-white">First Name <span className="text-teal-600">*</span></label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              className={`w-full p-2 mt-2 rounded-md bg-slate-900 border text-white ${errors.firstName ? 'border-red-500' : 'border-white'}`}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className='text-red-500'>{errors.firstName}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="last_name" className="text-white">Last Name <span className="text-teal-600">*</span></label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              className={`w-full p-2 mt-2 rounded-md bg-slate-900 border text-white ${errors.lastName ? 'border-red-500' : 'border-white'}`}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className='text-red-500'>{errors.lastName}</p>}
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-white">Email Address <span className="text-teal-600">*</span></label>
          <input
            type="text"
            id="email"
            value={email}
            className={`w-full p-2 mt-2 rounded-md bg-slate-900 border text-white ${errors.email ? 'border-red-500' : 'border-white'}`}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>
        <div className="mb-5">
          <span className="text-white">Query Type <span className="text-teal-600">*</span></span>
          <div className="flex items-center mt-2 space-x-4">
            <div className="flex items-center bg-slate-900 w-full border border-white p-2 rounded-md">
              <input
                type="radio"
                id="general_inquiry"
                name="inquiry_type"
                value="general_inquiry"
                className="mx-4 cursor-pointer w-5 h-5"
              />
              <label htmlFor="general_inquiry" className="text-white cursor-pointer">General Inquiry</label>
            </div>
            <div className="flex items-center bg-slate-900 w-full border border-white p-2 rounded-md">
              <input
                type="radio"
                id="support_request"
                name="inquiry_type"
                value="support_request"
                className="mx-4 cursor-pointer w-5 h-5"
              />
              <label htmlFor="support_request" className="text-white cursor-pointer">Support Request</label>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="text-white">Message <span className="text-teal-600">*</span></label>
          <textarea name="message" id="message" className="w-full p-2 mt-2 rounded-md bg-slate-900 border border-white text-white" rows={5}></textarea>
        </div>
        <div className="mb-5">
          <input type="checkbox" id="consent" />
          <label htmlFor="consent" className="text-white ml-4">I consent to being contacted by team <span className="text-teal-600">*</span></label>
        </div>
        <button className="w-full p-2 rounded-md border-2 my-4  border-teal-300 hover:translate-y-1 duration-150">
          <span className="font-bold text-teal-300 text-1xl">Submit</span>
        </button>
      </div>
    </form>
  );
};

export default Contact;