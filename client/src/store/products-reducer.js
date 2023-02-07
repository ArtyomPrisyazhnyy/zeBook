const SET_GENRE = "SET_GENRE";
const SET_WRITER = "SET_WRITER";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_BASKETS = "SET_BASKETS";
const SET_SELECTED_GENRE = "SET_SELECTED_GENRE";
const SET_SELECTED_WRITER = "SET_SELECTED_WRITER";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL = "SET_TOTAL";
const SET_SEARCHING_PRODUCT = "SEARCHING_PRODUCT";

let initialState = {
    genre: [],
    writer: [],
    products: [],
    baskets: [],
    selectedGenre: {},
    selectedWriter: {},
    page: 1,
    totalCount: 0,
    limit: 6,
    searchingProduct: ''
};

const productsReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_GENRE: 
            return {...state, genre: action.genre}

        case SET_WRITER: 
            return {...state, writer: action.writer}

        case SET_PRODUCTS: 
            return {...state, products: action.products}

        case SET_BASKETS: 
            return {...state, baskets: action.baskets}

        case SET_SELECTED_GENRE: 
            return {...state, page: 1, selectedGenre: action.selectedGenre}

        case SET_SELECTED_WRITER: 
            return {...state, page: 1, selectedWriter: action.selectedWriter}

        case SET_PAGE: 
            return {...state, page: action.page}

        case SET_TOTAL: 
            return {...state, totalCount: action.totalCount}

        case SET_SEARCHING_PRODUCT:
            return {...state, searchingProduct: action.searchingProduct}

        default:
            return state;
    }
} 

export const setGenreAC = (genre) => ({type: SET_GENRE, genre}); 
export const setWriterAC = (writer) => ({type: SET_WRITER, writer}); 
export const setProductsAC = (products) => ({type: SET_PRODUCTS, products}); 
export const setBasketsAC = (baskets) => ({type: SET_BASKETS, baskets}); 
export const setSelectedGenreAC = (selectedGenre) => ({type: SET_SELECTED_GENRE, selectedGenre}); 
export const setSelectedWriterAC = (selectedWriter) => ({type: SET_SELECTED_WRITER, selectedWriter}); 
export const setPageAC = (page) => ({type: SET_PAGE, page}); 
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL, totalCount});
export const setSearchingProductAC = (searchingProduct) => ({type: SET_SEARCHING_PRODUCT, searchingProduct}); 


export default productsReducer;