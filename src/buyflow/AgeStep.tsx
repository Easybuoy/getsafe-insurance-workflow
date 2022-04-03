import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);

  const onAgeSubmit = () => {
    if (age) {
      props.cb("age", age);
    }
  };

  return (
    <>
      <div>
        Age:{" "}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            if (value) {
              setAge(Number(value));
            }
          }}
          value={age}
        ></input>
      </div>
      <button onClick={onAgeSubmit}>Next</button>
    </>
  );
};

export default AgeStep;
