import React from "react";

interface StepProps {
  cb?: (field: string, value: string) => void;
  currentStep: string;
  component: React.ComponentType<any>;
}

const Step: React.FC<StepProps> = ({ component: Component, ...rest }) => {
  return <Component {...rest} />;
};

export default Step;
