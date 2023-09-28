import { FormWrapper } from "./FormWrapper";
import styles from "./App.module.scss";

type AdressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AdressFormProps = AdressData & {
  updateFields: (fields: Partial<AdressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AdressFormProps) {
  // Style
  const inputGroup: string = styles.inputGroup;

  return (
    <FormWrapper title="Address Details">
      <div className={inputGroup}>
        <input
          type="text"
          autoFocus
          required
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
        />
        <label htmlFor="">Street</label>
      </div>

      <div className={inputGroup}>
        <input
          type="text"
          required
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
        <label htmlFor="">City</label>
      </div>

      <div className={inputGroup}>
        <input
          type="text"
          required
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
        />
        <label htmlFor="">State</label>
      </div>

      <div className={inputGroup}>
      
      <input
        type="text"
        required
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
      <label htmlFor="">Zip</label>
      </div>


    </FormWrapper>
  );
}
