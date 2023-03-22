import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function Alert({ children }: Props): ReactElement {
    return <h1 className="alert alert-primary">{children}</h1>
}