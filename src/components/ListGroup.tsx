import { MouseEvent, ReactElement } from 'react';

export default function ListGroup(): ReactElement {

    let items: string[] = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

    let getNotFoundMessage = (): ReactElement | boolean => items.length == 0 && <p>No item found</p>;

    const handleItemClick = (event: MouseEvent) => { console.log(event); };

    return (
        <>
            <h1>List</h1>
            {
                getNotFoundMessage()
            }
            {
                <ul className="list-group">
                    {items.map((item: string) => <li key={item} onClick={handleItemClick} className="list-group-item">{item}</li>)}
                </ul>
            }


        </>
    );
}

