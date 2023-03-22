import { MouseEvent, ReactElement, useState } from 'react';

interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props): ReactElement {

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
                    {items.map((item: string, index: number) => <li key={item} onClick={() => { setSelectIndex(index); onSelectItem(item) }} className={'list-group-item ' + (selectedItemIndex == index ? 'active' : '')}>{item}</li>)}
                </ul>
            }
        </>
    );
}

