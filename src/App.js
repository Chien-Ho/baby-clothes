import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import NavbarHotel from "./component/NavBarHotel";
import data from "./data";
import { RoomContext } from "./context"
function App() {
  let history = useHistory()
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    cartItems: [],
  });
  useEffect(() => {

    const rooms = formatData(data);
    const featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));

    setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      type: 'all',
      capacity: 1,
      minPrice: 0,
      maxPrice: maxPrice,
      minSize: 0,
      maxSize: maxSize,
      breakfast: false,
      pets: false,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    });

  }, []);
  const getRoom = (slug) => {
    const rooms = state.rooms;
    let room = rooms.find(room => room.slug === slug);
    return room;
  }
  const formatData = (data) => {
    let rooms = data.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;

    });
    return rooms;
  };
  const handleChange = event => {

    console.log(event.target.name);
    console.log(event.target.value);
    setState(
      {
        ...state,
        [event.target.name]: event.target.value,

      },
    )

  }
  const filterRooms = () => {
    let {
      type,
      rooms,
      sortedRooms,
    } = state
    let tempRooms = [...rooms]
    if (type !== 'all') {
      tempRooms = rooms.filter(room => room.type === type)
    }
    console.log('temp ne:', tempRooms);
    setState({
      ...state,
      sortedRooms: tempRooms
    })
  }

  const addToCart = (room) => {

    const cartItems = state.cartItems.slice();

    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item.id === room.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...room, count: 1 });
    }
    setState({ ...state, cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    history.push('/rooms')
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
      <RoomContext.Provider value={{
        ...state,
        getRoom,
        handleChange,
        addToCart,
        removeFromCart,
        createOrder,
      }}>
        <NavbarHotel />
        <Switch>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rooms/" component={Rooms}></Route>
          <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
          <Route component={Error}></Route>
        </Switch>
      </RoomContext.Provider>
    </>
  );
}

export default App;
