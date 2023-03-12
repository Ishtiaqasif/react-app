import { ReactElement } from "react";

function Message() {
    const name: string = "Tushar";

    let element: ReactElement = name ? <h1>Hello {name}</h1> : <h1>Hello World {name}</h1>;

    return element;
}

export default Message;