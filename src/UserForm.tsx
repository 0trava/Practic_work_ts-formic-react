import { FormWrapper } from "./FormWrapper";

export function UserForm() {
    return (    
    <FormWrapper title="User Details">
        <label htmlFor="">First name</label>
        <input type="text" autoFocus required/>
        <label htmlFor="">Last name</label>
        <input type="text" required/>
        <label htmlFor="">Age</label>
        <input type="number" min={1} required />
    </FormWrapper>)
}