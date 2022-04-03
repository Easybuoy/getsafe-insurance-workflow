import React, { useState } from "react";

interface NameStepProps {
  cb: (field: string, value: string) => void;
  nameKey: string;
  nameLabel: string;
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [name, setName] = useState("");

  const onClickHandler = () => {
    if (name) {
      props.cb(props.nameKey, name);
      setName("");
    }
  };

  return (
    <>
      <div>
        {props.nameLabel}:{" "}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            if (value) {
              setName(value);
            }
          }}
          value={name}
          required
        ></input>
      </div>
      <button onClick={() => onClickHandler()}>Next</button>
    </>
  );
};

export default NameStep;
