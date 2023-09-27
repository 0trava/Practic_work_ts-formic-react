import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultistepForm";
import styles from  './App.module.scss';

type FormData = {
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

const INITIAL_DATA: FormData = {
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
  function updateFields(fields: Partial<FormData>) {
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

  return (
    <>
    {/* Block whits steps */}
    <ul>
    <li>
      <div>1</div>
      <h3>User details</h3>
    </li>
    <li>
       <div>2</div>
       <h3>Address details</h3>
    </li>
    <li>
       <div>2</div>
       <h3>Account details</h3>
    </li>
    </ul>


    {/* FORMA */}
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >

      <form action="" onSubmit={onSubmite}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1}/ {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {/* BUTTONS */}
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
