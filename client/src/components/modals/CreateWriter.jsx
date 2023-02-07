import React, { useState } from "react";
import { createWriter } from "../../http/productsAPI";

const CreateWriter = ({ show, onHide }) => {
    const [value, setValue] = useState('')
    const addWriter = () => {
        createWriter({ name: value }).then(data => {
            setValue('')
            onHide(false)
        })
    }
    return (
        <>
            {show
                ?
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__title">Добавить автора</div>
                        <form action="/" method="post">
                            <input
                                className="form__cont"
                                type="text"
                                placeholder="Введите имя автора"
                                value={value}
                                onChange={e => setValue(e.target.value)}></input>
                        </form>

                        <div className="modal__buttons">
                            <div
                                className="modal__btn modal__add"
                                onClick={() => onHide(false)}>
                                закрыть
                            </div>
                            <div
                                className="modal__btn modal__close"
                                onClick={addWriter}>добавить</div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

export default CreateWriter;