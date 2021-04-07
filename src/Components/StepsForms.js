import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Steps, Button, message } from "antd";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

const { Step } = Steps;

const steps = [
  {
    title: "Inscription",
    content: <FirstForm />
  },
  {
    title: "Données sur l'entreprise",
    content: <SecondForm />
  },
  {
    title: "Last",
    content: "Last-content"
  }
];
const StepForms = ()=>{
    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
    return(
        <>
        <Steps  size="small" current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    )
}
export default StepForms;