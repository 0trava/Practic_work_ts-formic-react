import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
    return (
    <FormWrapper title= "Account Creating">
        <label htmlFor="">Email</label>
        <input type="email" autoFocus required/>
        <label htmlFor="">Password</label>
        <input type="password" required/>
    </FormWrapper>
)}