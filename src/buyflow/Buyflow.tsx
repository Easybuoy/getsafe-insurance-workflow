import React, { useState } from "react";
import AgeStep from "./AgeStep";
import NameStep from "./NameStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";
import Step from "./Step";
import ProductIds from "../enums/productIds";

interface BuyflowProps {
  productId: ProductIds;
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

  const getFLowProps = () => {
    switch (currentStep) {
      case "email":
        return {
          cb: getStepCallback("age"),
          component: EmailStep
        };
      case "age":
        return {
          cb:
            props.productId === ProductIds.devIns
              ? getStepCallback("summary")
              : getStepCallback("firstName"),
          component: AgeStep
        };
      case "firstName":
        return {
          cb: getStepCallback("lastName"),
          component: NameStep,
          nameLabel: "First Name",
          nameKey: "firstName"
        };
      case "lastName":
        return {
          cb: getStepCallback("summary"),
          component: NameStep,
          nameLabel: "Last Name",
          nameKey: "lastName"
        };
      case "summary":
        return {
          component: SummaryStep,
          productId: props.productId,
          collectedData: collectedData
        };
      default:
        return {
          component: EmailStep
        };
    }
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      <Step currentStep={currentStep} {...getFLowProps()} />
    </>
  );
};

export default Buyflow;
