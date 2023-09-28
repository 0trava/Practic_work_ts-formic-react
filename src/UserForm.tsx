import { FormWrapper } from "./FormWrapper";
import styles from  './App.module.scss';

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};


export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {

  // Style
  const inputGroup: string = styles.inputGroup;

  return (
    <>
    <FormWrapper title="User Details">
      <div className={inputGroup}>
         <input         
        type="text"
        autoFocus
        required
        value={firstName}
        name="firstName"
        pattern="[A-Za-z]+"
        onChange={(e) => updateFields({ firstName: e.target.value })}/>
         <label htmlFor="">First name</label>
     </div>

       <div className={inputGroup}>
      <input
        type="text"
        required
        value={lastName}
        name="lastName"
        pattern="[A-Za-z]+"
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="">Last name</label>
      </div>


      <div className={inputGroup}>
      <input
        type="number"
        min={1}
        max={99}
        required
        value={age}
        pattern="[1-9]+"
        onChange={(e) => updateFields({ age: e.target.value })}
      />
      <label htmlFor="">Age</label>
      </div>
    </FormWrapper>
    </>
  );
}
