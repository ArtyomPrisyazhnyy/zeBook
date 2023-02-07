import { fetchProducts, fetchWriters, fetchGenres, fetchOneProduct } from "../../http/productsAPI";

export const fetchProductsAction = (selectedWriterId, selectedGenreId, page, limit, searchingProduct) => (dispatch) => {
    fetchProducts(selectedWriterId, selectedGenreId, page, limit, searchingProduct)
        .then(data => {
            dispatch(setProducts(data.rows));
            dispatch(setTotalCount(data.count));
        })
}

export const fetchByCategory = () => (dispatch) => {
    fetchWriters().then(data => {
        dispatch(setWriter(data))
    });
    fetchGenres().then(data => {
        dispatch(setGenre(data))
    });
}

export const fetchOneProductAction = (id) => (dispatch) => {
    fetchOneProduct(id).then(oneProduct => {
        dispatch(setOneProduct(oneProduct))
    });
}

export const setGenre = (genre) => ({
    type: "SET_GENRE",
    genre,
})

export const setWriter = (writer) => ({
    type: "SET_WRITER",
    writer,
})

export const setOneProduct = (oneProduct) => ({
    type: "SET_ONE_PRODUCT",
    oneProduct,
})

export const setProducts = (products) => ({
    type: "SET_PRODUCTS",
    products,
})

export const setBaskets = (baskets) => ({
    type: "SET_BASKETS",
    baskets,
})

export const setSelectedGenre = (selectedGenre) => ({
    type: "SET_SELECTED_GENRE",
    selectedGenre,
})

export const setSelectedWriter = (selectedWriter) => ({
    type: "SET_SELECTED_WRITER",
    selectedWriter,
})

export const setPage = (page) => ({
    type: "SET_PAGE",
    page,
})

export const setTotalCount = (totalCount) => ({
    type: "SET_TOTAL",
    totalCount,
})

export const setSearchingProduct = (searchingProduct) => ({
    type: "SET_SEARCHING_PRODUCT",
    searchingProduct,
})