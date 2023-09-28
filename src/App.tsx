import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultistepForm";
import styles from  './App.module.scss';

type Values = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: Values = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};



function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  // Update data
  function updateFields(fields: Partial<Values>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  // FORM submite
  function onSubmite(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Suvvessful Account Creation");
  }

  // Style
  const className: string = styles.title;
  const form: string = styles.form;
  const buttonbox: string = styles.buttonbox;
  const green: string = styles.green;
  const white: string = styles.white;
  const linegreen: string = styles.linegreen;
  

  function chackIndex (e:number): string {
    if (currentStepIndex + 1 >= e) {
      return green
    } else {
        return white
      }
  }

  function chackLineIndex (e:number): string {
    if (currentStepIndex + 1 >= e) {
      return linegreen
    } else {
        return ""
      }
  }

  return (
    <>
    {/* Block whits steps */}
    <ul>
    <li>
      <div className={chackIndex(1)}>1</div>
      <p className={chackLineIndex(2)}>______</p>
      <h3>User details</h3>
    </li>
    <li>
       <div className={chackIndex(2)}>2</div>
       <p className={chackLineIndex(3)}>______</p>
       <h3>Address details</h3>
    </li>
    <li>
       <div className={chackIndex(3)}>3</div>
       <h3>Account details</h3>
    </li>
    </ul>


    {/* FORMA */}
    <div
      className={form}
    >

      <form action="" onSubmit={onSubmite}>
        {/* <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1}/ {steps.length}
        </div> */}


        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >


        </div>
          {/* BUTTONS */}
          <div className={buttonbox}>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
      </form>
    </div>
    </>
  );
}

export default App;
