import React, { useState } from "react";
import AgeStep from "./AgeStep";
import NameStep from "./NameStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins",
  desIns = "des_ins"
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance",
  [ProductIds.desIns]: "Designer Insurance"
};

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("email");
  const [collectedData, updateData] = useState({
    email: "",
    age: 0,
    firstName: "",
    lastName: ""
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "email" && <EmailStep cb={getStepCallback("age")} />) ||
        (currentStep === "age" && (
          <AgeStep
            cb={
              props.productId === ProductIds.devIns
                ? getStepCallback("summary")
                : getStepCallback("firstName")
            }
          />
        )) ||
        (currentStep === "firstName" && (
          <NameStep
            nameLabel="First Name"
            nameKey="firstName"
            cb={getStepCallback("lastName")}
          />
        )) ||
        (currentStep === "lastName" && (
          <NameStep
            nameLabel="Last Name"
            nameKey="lastName"
            cb={getStepCallback("summary")}
          />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep
            productId={props.productId}
            collectedData={collectedData}
          />
        ))}
    </>
  );
};

export default Buyflow;
