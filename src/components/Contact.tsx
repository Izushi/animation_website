import type React from 'react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) {
      newErrors.firstName = 'This field is required';
    } else if (firstName.length > 20) {
      newErrors.firstName = 'Please input name below 20 letters';
    }
    if (!lastName) {
      newErrors.lastName = 'This field is required';
    } else if (lastName.length > 20) {
      newErrors.lastName = 'Please input name below 20 letters';
    }
    if (!email) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!inquiry) newErrors.inquiry = 'Please select a query type';
    if (!message) newErrors.message = 'This field is required';
    if (!consent) newErrors.consent = 'To submit this form, please consent to being contacted';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-bold text-teal-300 mb-4">Contact</h2>
      <div className="max-w-[900px] container mx-auto bg-slate-800 rounded-lg py-5 px-4 md:px-20">
        <h2 className="text-4xl text-teal-300 mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-5">
          <div className="flex-1 mb-5 md:mb-0">
            <label htmlFor="first_name" className="text-white">
              First Name <span className="text-teal-600">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              className={`w-full p-2 mt-2 rounded-md bg-slate-900 border text-white cursor-pointer ${errors.firstName ? 'border-red-500' : 'border-white'}`}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="text-red-500 mt-2">{errors.firstName}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="last_name" className="text-white">
              Last Name <span className="text-teal-600">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              className={`w-full p-2 mt-2 rounded-md bg-slate-900 border text-white cursor-pointer ${errors.lastName ? 'border-red-500' : 'border-white'}`}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="text-red-500 mt-2">{errors.lastName}</p>}
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-white">
            Email Address <span className="text-teal-600">*</span>
          </label>
          <input
            type="text"
            id="email"
            value={email}
            className={`w-full p-2 mt-2 rounded-md bg-slate-900 border text-white cursor-pointer ${errors.email ? 'border-red-500' : 'border-white'}`}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
        </div>
        <div className="mb-5">
          <span className="text-white">
            Query Type <span className="text-teal-600">*</span>
          </span>
          <div className="flex flex-col md:flex-row items-center mt-2 space-x-0 md:space-x-4">
            <div
              className={`${errors.inquiry ? 'border-red-500' : 'border-white'} flex items-center bg-slate-900 w-full border p-2 rounded-md mb-3 md:mb-0`}
            >
              <input
                type="radio"
                id="general_inquiry"
                name="inquiry_type"
                value="general_inquiry"
                className="mx-4 cursor-pointer w-5 h-5"
                checked={inquiry === 'general_inquiry'}
                onChange={(e) => {
                  setInquiry(e.target.value);
                }}
              />
              <label htmlFor="general_inquiry" className="text-white cursor-pointer">
                General Inquiry
              </label>
            </div>
            <div
              className={`${errors.inquiry ? 'border-red-500' : 'border-white'} flex items-center bg-slate-900 w-full border p-2 rounded-md`}
            >
              <input
                type="radio"
                id="support_request"
                name="inquiry_type"
                value="support_request"
                className="mx-4 cursor-pointer w-5 h-5"
                checked={inquiry === 'support_request'}
                onChange={(e) => {
                  setInquiry(e.target.value);
                }}
              />
              <label htmlFor="support_request" className="text-white cursor-pointer">
                Support Request
              </label>
            </div>
          </div>
          {errors.inquiry && <p className="text-red-500 mt-2">{errors.inquiry}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="text-white">
            Message <span className="text-teal-600">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            className={`${errors.message ? 'border-red-500' : 'border-white'} w-full p-2 mt-2 rounded-md bg-slate-900 border text-white cursor-pointer`}
            rows={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
        </div>
        <div className="mb-5">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
            }}
          />
          <label htmlFor="consent" className="text-white ml-4 cursor-pointer">
            I consent to being contacted by team <span className="text-teal-600">*</span>
          </label>
          {errors.consent && <p className="text-red-500 mt-2">{errors.consent}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded-md border-2 my-4  border-teal-300 hover:translate-y-1 duration-150"
        >
          <span className="font-bold text-teal-300 text-1xl">Submit</span>
        </button>
      </div>
    </form>
  );
};

export default Contact;
