import { connect } from "react-redux";
import { setBasketsAC } from "../../store/products-reducer.js";
import Basket from "./basket.jsx";

let mapStateToProps = (state) => {
    return {
      productsPage: state.productsPage,
    }
  }

let mapDispatchToProps = (dispatch) => {
  return {
    setBaskets: (basket) => {
      dispatch(setBasketsAC(basket))
    }
  }
}



const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket)

export default BasketContainer