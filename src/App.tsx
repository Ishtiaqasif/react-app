import Message from "./Message";
import ListGroup from "./components/ListGroup";

export default function App() {
  let items: string[] = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>);
}