import { FormWrapper } from "./FormWrapper";

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
  return (
    <FormWrapper title="Address Details">
      <label htmlFor="">Street</label>
      <input
        type="text"
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="">City</label>
      <input
        type="text"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="">State</label>
      <input
        type="text"
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor="">Zip</label>
      <input
        type="text"
        required
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
