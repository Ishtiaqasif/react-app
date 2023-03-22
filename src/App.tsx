import { useState } from "react";
import Button from "./components/Button";
import DismissibleAlert from "./components/DismissibleAlert";

export default function App() {

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (

    <>
      {alertVisibility && <DismissibleAlert children="Tushar" onClose={() => setAlertVisibility(false)}></DismissibleAlert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </>

  );


}