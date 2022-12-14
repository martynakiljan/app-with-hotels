import "./App.css";
import { reducer, initialState } from "./reducer";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ReducerContext from "./context/reducerContext";
import Menu from "./components/Menu/Menu.js";
import Header from "./components/Header/Header.js";
import Home from "./pages/home";
import Searchbar from "./components/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/Ui/ThemeButton.jsx";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import InspiringQuote from "./components/InspiringQuote/InspiringQuote";
import React, { useReducer, useContext } from "react";

function App() {
  const backendHotels = [
    {
      id: 1,
      name: "Tansania Sansibar Hotel",
      city: "Sansibar",
      rating: "9.4",
      reviews: "234",
      img: "",
      description:
        "This resort fascinates with the combination of Arabian palace style construction with modern, elegant accents. The exotic gardens adapted to it and the turquoise ocean adjacent to them guarantee an unforgettable holiday.",
    },
    {
      id: 2,
      name: "Huvafen Fushi Maldives Resort",
      city: "Maledives",
      rating: "8.7",
      reviews: "134",
      img: "",
      description:
        "Discover endless white sandy beaches with turquoise lagoon, multiple dining avenues, water sports, daily sunset views and unparalleled hospitality. The luxury tropical island setting along with the endless engaging experiences create a perfect stay for those wanting to spend a much-needed relaxing time with the beloved ones. Stay with us for 7 nights for      a holiday of a lifetime and enjoy the following exclusive benefits. ",
    },
    {
      id: 3,
      name: "Bali Garden Beach Resort",
      city: "Bali",
      rating: "7.7",
      reviews: "634",
      img: "",
      description:
        "Das Hotel Melia Bali ist ein 5-Sterne-Hotel (Veranstalterkategorie) in Nusa Dua, Indonesien - Insel Bali. Melia Bali wurde auf der Grundlage von 571 Hotelbewertungen mit 5,2 von 6,0 bewertet und hat eine Weiterempfehlungsrate von 91%. Entdecken Sie das Hotel!",
    },
    {
      id: 4,
      name: "V Hotel Nha Trang",
      city: "Vietnam",
      rating: "6.7",
      reviews: "59",
      description:
        "Set among picturesque landscapes, Allezboo Beach Resort & Spa is the perfect place to relax away from the hustle and bustle of modern life.",
      img: "",
    },
    {
      id: 5,
      name: "Aphrodite Beach",
      city: "Cyprus",
      reviews: "45",
      rating: "5.2",
      img: "",
      description:
        "This cosy, family-run hotel in white log houses overlooking Chrysochou Bay is a minute's walk from the nearest beach. The Baths of Aphrodite in Akamas Peninsula National Park is 2 km away.",
    },
    {
      id: 6,
      name: "Hotel Duquesa de Cardona Barcelona",
      city: "Barcelona",
      reviews: "545",
      rating: "7.8",
      img: "",
      description:
        "Overlooking Barcelona's port, this upscale 16th-century hotel is near the Gothic Quarter. It is a 9-minute walk from Drassanes Metro Station and 3 km from the Sagrada Fam??lia.",
    },
  ];
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = (term) => {
    const newHotels = [...backendHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: "set-hotels", hotels: newHotels });
  };

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar onSearch={(term) => searchHandler(term)} />
      <ThemeButton />
    </Header>
  );

  const menu = <Menu />;
  const content = (
    <>
      <div className="App-Container">
        <Route exact={true} path="/">
          <Home />
        </Route>
      </div>

      <Route path="/hotel/:id">
        <p>kdmjenkjfn</p>
      </Route>
    </>
  );

  const footer = <Footer />;

  return (
    <Router forceRefresh={true}>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          login: () => dispatch({ type: "login", isAuthenticated: true }),
          logout: () => dispatch({ type: "logout", isAuthenticated: false }),
        }}
      >
        <ThemeContext.Provider
          value={{
            color: state.theme,
            changeTheme: () => dispatch({ type: "change-theme" }),
          }}
        >
          <ReducerContext.Provider
            value={{
              state: state,
              dispatch: dispatch,
            }}
          >
            <Layout
              header={header}
              menu={menu}
              content={content}
              footer={footer}
            />
          </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}
export default App;
