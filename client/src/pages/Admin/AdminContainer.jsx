import { connect } from "react-redux"
import { setGenreAC, setSelectedGenreAC, setSelectedWriterAC, setWriterAC } from "../../store/products-reducer.js"
import { setIsAuthAC } from "../../store/users-reducer.js"
import Admin from "./Admin.jsx"

let mapStateToProps = (state) => {
    return {
        productsPage: state.productsPage,
    }
  }
let mapDispatchToProps = (dispatch) => {
  return {
    setGenre: (genre) => {
      dispatch(setGenreAC(genre))
    },
    setWriter: (writer) => {
      dispatch(setWriterAC(writer))
    },
    setSelectedGenre: (selectedGenre) => {
      dispatch(setSelectedGenreAC(selectedGenre))
    },
    setSelectedWriter: (selectedWriter) => {
      dispatch(setSelectedWriterAC(selectedWriter))
    }
  }
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)

export default NavBarContainer