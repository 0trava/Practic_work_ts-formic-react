import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}


export function FormWrapper ({title, children}: FormWrapperProps) {
    return <>
        <div>
        <h2>{title}</h2>

        <div style={{
            // display: "grid",
            gap: ".8rem .5rem",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
            // gridTemplateColumns: "auto minmax(auto, 400px)",
        }}>{children}</div>
        </div>
    </>
}