import { connect } from "react-redux";
import {  setGenreAC, setPageAC, setProductsAC, setSelectedGenreAC, setSelectedWriter, setSelectedWriterAC, setTotalCountAC, setWriterAC } from "../../store/products-reducer.js";
import { setIsAuthAC } from "../../store/users-reducer.js";
import Shop from "./Shop.jsx";

let mapStateToProps = (state) => {
    return {
      productsPage: state.productsPage,
    }
  }

let mapDispatchToProps = (dispatch) => {
  return {
    setSelectedGenre: (genre) => {
      dispatch(setSelectedGenreAC(genre))
    },
    setSelectedWriter: (writer) => {
      dispatch(setSelectedWriterAC(writer))
    },
    setWriter: (writer) => {
      dispatch(setWriterAC(writer))
    },
    setGenre: (genre) => {
      dispatch(setGenreAC(genre))
    },
    setProducts: (products) => {
      dispatch(setProductsAC(products))
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount))
    },
    setPage: (page) => {
      dispatch(setPageAC(page))
    }
  }
}



const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop)

export default ShopContainer