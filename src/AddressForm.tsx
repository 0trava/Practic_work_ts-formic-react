import { FormWrapper } from "./FormWrapper";

export function AddressForm() {
    return (
    <FormWrapper title="Address Details">
        <label htmlFor="">Street</label>
        <input type="text" autoFocus required/>
        <label htmlFor="">City</label>
        <input type="text" required/>
        <label htmlFor="">State</label>
        <input type="text" required/>
        <label htmlFor="">Zip</label>
        <input type="text" required/>
    </FormWrapper>
)}