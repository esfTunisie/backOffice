import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Steps, Button, message } from "antd";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";


class StepForms extends React.Component{
    ////const [current, setCurrent] = React.useState(0);
    constructor(props){
      super(props);
      this.state = {
        current: 0
        };
    }

     next = () => {
      this.setState({current: this.state.current + 1 });
    };
  
     prev = () => {
      this.setState({current: this.state.current - 1 });
    };
    render(){
  const { Step } = Steps;

const steps = [
  {
    title: "Inscription",
    content: <FirstForm handlesubmit={this.props.handlesubmit}  />
  },
  {
    title: "Données sur l'entreprise",
    content: <SecondForm />
  },
  {
    title: "Offre",
    content: <ThirdForm  />
  }
];
      return(
        <>
        <Steps  size="small" current={this.state.current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {this.state.current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Suivant
            </Button>
          )}
          {this.state.current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Submit
            </Button>
          )}
          {this.state.current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => this.prev()}>
              précédent
            </Button>
          )}
        </div>
      </>
    )
    }
   
}
export default StepForms;