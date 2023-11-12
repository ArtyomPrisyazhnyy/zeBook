const initialState = {
    genre: [],
    writer: [],
    oneProduct: null,
    products: [],
    baskets: [],
    selectedGenre: {},
    selectedWriter: {},
    page: 1,
    totalCount: 0,
    limit: 6,
    searchingProduct: ''
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GENRE":
            return {
                ...state,
                genre: action.genre,
            }
        case "SET_WRITER":
            return {
                ...state,
                writer: action.writer,
            }

        case "SET_ONE_PRODUCT":
            return {
                ...state,
                oneProduct: action.oneProduct
            }

        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.products,
            }
        case "SET_BASKETS":
            return {
                ...state,
                baskets: action.baskets,
            }
        case "SET_SELECTED_GENRE":
            return {
                ...state,
                page: 1,
                selectedGenre: action.selectedGenre,
            }
        case "SET_SELECTED_WRITER":
            return {
                ...state,
                page: 1,
                selectedWriter: action.selectedWriter,
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.page,
            }
        case "SET_TOTAL":
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case "SET_SEARCHING_PRODUCT":
            return {
                ...state,
                searchingProduct: action.searchingProduct,
            }
        default:
            return state;
    }
}

export default products