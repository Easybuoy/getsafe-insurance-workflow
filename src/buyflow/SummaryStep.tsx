import React from "react";
import { Link } from "react-router-dom";
import { ProductIds } from "./Buyflow";

interface SummaryStepProps {
  collectedData: {
    email: string;
    age: number;
    firstName?: string;
    lastName?: string;
  };
  productId: ProductIds;
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const getPurchasePath = () => {
    return props.productId === ProductIds.devIns
      ? "/purchased=dev_ins"
      : "/purchased=des_ins";
  };
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      {props.productId === ProductIds.desIns && (
        <>
          <div>First Name: {props.collectedData.firstName}</div>
          <div>Last Name: {props.collectedData.lastName}</div>
        </>
      )}
      <div>
        <Link to={getPurchasePath()}>Purchase</Link>
      </div>
    </>
  );
};

export default SummaryStep;
