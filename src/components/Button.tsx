import { ReactElement } from "react";

interface Props {
    children: string,
    onClick: () => void,
    color?: 'primary' | 'secondary' | 'success' | 'danger';
}
export default function Button({ color = 'primary', children, onClick }: Props): ReactElement {
    const button: ReactElement =
        <button onClick={onClick} className={`btn btn-${color}`}> {children}</button >;
    return button;
}