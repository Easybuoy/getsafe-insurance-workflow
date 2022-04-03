import React, { useState } from "react";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");

  const onEmailSubmit = () => {
    if (email) {
      props.cb("email", email);
    }
  };

  return (
    <>
      <div>
        Email:{" "}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            if (value) {
              setEmail(value);
            }
          }}
          value={email}
        ></input>
      </div>
      <button onClick={onEmailSubmit}>Next</button>
    </>
  );
};

export default EmailStep;
