import { ReactElement, useState, ReactNode } from "react";
interface Props {
    children: ReactNode;
    onClose: () => void;
}

export default function DismissibleAlert({ children, onClose }: Props): ReactElement {

    const [show, setShowHide] = useState();

    const dismissibleAlert: ReactElement =
        <>
            <div className={`alert alert-primary alert-dismissible`} role="alert">
                <strong>Hi, </strong> {`It's me ${children}.`}
                <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>

    return dismissibleAlert;
}