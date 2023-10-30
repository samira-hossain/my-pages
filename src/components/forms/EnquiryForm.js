import React, { useState } from 'react';

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const options = [
    "Design & Branding",
    "Web and App Development",
    "Cloud and API Consultancy",
    "Brand Strategy",
    "Just want to say Hi!",
    "Marketing and Ads"
  ];

  const validateForm = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(emailRegex) || email.length < 3 || name.length < 1) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log({ name, email, selectedService, message });
    validateForm();
  };

  return (
    <form>
      <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Style to remove default list bullets */}
        <li>
          <label>
            Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </li>
        <li>
          <label>
            Select a Service
            <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
              <option disabled value="">-- Choose an option --</option>
              {options.map((option, id) => (
                <option value={option} key={`${id}-${option}`}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </li>
        <li>
          <label>
            Message
            <textarea cols="40" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </label>
        </li>
        <li>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </li>
        {/* Form messaging based on form submission and validation */}
        <li>
          {isSubmitted && isValid && (
            <FormMessaging isError={false} content="Thanks for your details, we'll be in touch!" />
          )}
          {isSubmitted && !isValid && (
            <FormMessaging isError content="Oops, something went wrong, please try again later." />
          )}
          {!isSubmitted && !isValid && (
            <FormMessaging isError content="Please fill in the form" />
          )}
        </li>
      </ul>
    </form>
  );
};

function FormMessaging(props) {
  const { isError, content } = props;
  return (
    <div className={isError ? 'error' : 'success'}>
      {content}
    </div>
  );
}

export default EnquiryForm;
