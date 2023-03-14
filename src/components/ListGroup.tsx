import { MouseEvent, ReactElement, useState } from 'react';

interface Props {
    items: string[],
    heading: string
}

export default function ListGroup({ items, heading }: Props): ReactElement {

    let getNotFoundMessage = (): ReactElement | boolean => items.length == 0 && <p>No item found</p>;

    let [selectedItemIndex, setSelectIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            {
                getNotFoundMessage()
            }
            {
                <ul className="list-group">
                    {items.map((item: string, index: number) => <li key={item} onClick={() => { setSelectIndex(index) }} className={'list-group-item ' + (selectedItemIndex == index ? 'active' : '')}>{item}</li>)}
                </ul>
            }
        </>
    );
}

