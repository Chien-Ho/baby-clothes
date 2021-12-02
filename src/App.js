import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleClothes from "./pages/SingleClothes";
import NavbarHotel from "./component/NavBarHotel";
import data from "./data";
import { ClothesContext } from "./context"
function App() {
  let history = useHistory()
  const [state, setState] = useState({
    allClothes: [],
    featuredClothes: [],
    loading: true,
    gender: null,
    origin: '',
    material: '',
    cartItems: [],
  });
  useEffect(() => {

    const allClothes = formatData(data);
    const featuredClothes = allClothes.filter(clothes => clothes.featured === true);


    setState({
      allClothes,
      featuredClothes,
      loading: false,
      gender: null,
      origin: '',
      material: '',
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    });

  }, []);
  const getClothes = (slug) => {
    const allClothes = state.allClothes;
    let clothes = allClothes.find(clothes => clothes.slug === slug);
    return clothes;
  }
  const formatData = (data) => {
    let allClothes = data.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let clothes = { ...item.fields, id, images };
      return clothes;

    });
    return allClothes;
  };

  const addToCart = (clothes) => {

    const cartItems = state.cartItems.slice();

    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item.id === clothes.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...clothes, count: 1 });
    }
    setState({ ...state, cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    history.push('/shop')
  }
  const removeFromCart = (item) => {
    let cartItems = state.cartItems;

    cartItems = cartItems.filter((x) => x.id !== item.id);
    setState({
      ...state, cartItems
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  const createOrder = (order) => {
    alert("info order" + order.name + order.address + order.email);
  }
  return (
    <>
      <ClothesContext.Provider value={{
        ...state,
        getClothes,
        addToCart,
        removeFromCart,
        createOrder,
      }}>
        <NavbarHotel />
        <Switch>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/shop/" component={Shop}></Route>
          <Route exact path="/shop/:slug" component={SingleClothes}></Route>
          <Route component={Error}></Route>
        </Switch>
      </ClothesContext.Provider>
    </>
  );
}

export default App;
