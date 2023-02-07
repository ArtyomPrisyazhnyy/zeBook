import React from 'react';


const WriterBar = ({ writer, selectedWriterId, onSetSelectedWriter }) => {

    return (
        <aside className="sidebar nonselect">
            <ul className="sidebar__list">

                {writer.map(writer =>
                    <li
                        key={writer.id}
                        data-active={writer.id === selectedWriterId}
                        className="writer_item"
                        onClick={() => onSetSelectedWriter(writer)} >
                        {writer.name}
                    </li>
                )}

            </ul>
        </aside>
    )
}

export default WriterBar