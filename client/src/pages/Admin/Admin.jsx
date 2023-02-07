import React, { useState } from "react";
import CreateGenre from "../../components/modals/CreateGenre";
import CreateProduct from "../../components/modals/CreateProduct";
import CreateWriter from "../../components/modals/CreateWriter";

const Admin = () => {
    const [writerVisible, setWriterVisible] = useState(false);
    const [genreVisible, setGenreVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);

    return (
        <>
            <div className="component admin">
                <div className="container">
                    <div className="admin__btn"
                        onClick={() => setWriterVisible(true)}>
                        Добавить Автора
                    </div>

                    <div className="admin__btn"
                        onClick={() => setGenreVisible(true)}>
                        Добавить Жанр
                    </div>

                    <div className="admin__btn"
                        onClick={() => setProductVisible(true)}>
                        Добавить Товар
                    </div>
                </div>
            </div>
            <CreateWriter show={writerVisible}
                onHide={() => setWriterVisible(false)} />

            <CreateGenre show={genreVisible}
                onHide={() => setGenreVisible(false)} />

            <CreateProduct
                show={productVisible}
                onHide={() => setProductVisible(false)} />
        </>
    )
}

export default Admin;