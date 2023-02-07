import React, { useState } from "react";
import { createGenre } from "../../http/productsAPI";

const CreateGenre = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addGenre = () => {
        createGenre({ name: value }).then(data => {
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
                        <div className="modal__title">Добавить жанр</div>
                        <form action="/" method="post">
                            <input
                                className="form__cont"
                                type="text"
                                placeholder="Введите название жанра"
                                value={value}
                                onChange={e => setValue(e.target.value)}></input>
                        </form>

                        <div className="modal__buttons">
                            <div className="styles.modal__btn styles.modal__add"
                                onClick={() => onHide(false)}>
                                закрыть
                            </div>
                            <div className="modal__btn modal__close"
                                onClick={addGenre}>добавить</div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

export default CreateGenre;