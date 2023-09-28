import { FormWrapper } from "./FormWrapper";
import styles from  './App.module.scss';

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {

  // Style
  const inputGroup: string = styles.inputGroup;





  return (
    <FormWrapper title="Account Creating">
      <div className={inputGroup}>
      
      <input
        type="email"
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="">Email</label>
      </div>

      <div className={inputGroup}>
      
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
      <label htmlFor="">Password</label>
      </div>
    </FormWrapper>
  );
}
