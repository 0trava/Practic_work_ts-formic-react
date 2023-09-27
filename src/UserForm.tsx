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
        onChange={(e) => updateFields({ firstName: e.target.value })}/>
         <label htmlFor="">First name</label>
     </div>

       <div className={inputGroup}>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="">Last name</label>
      </div>


      <div className={inputGroup}>
      <input
        type="number"
        min={1}
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
      <label htmlFor="">Age</label>
      </div>
    </FormWrapper>
    </>
    
  );
}
