import "./App.css";
import React, { Component } from "react";
import Menu from "./Components/Menu/Menu.js";
import Header from "./Components/Header/Header.js";
import Hotels from "./Components/Hotels/Hotels.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [
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
          city: "Sansibar",
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
            "Overlooking Barcelona's port, this upscale 16th-century hotel is near the Gothic Quarter. It is a 9-minute walk from Drassanes Metro Station and 3 km from the Sagrada Família.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Container">
          <Menu />
          <Hotels hotels={this.state.hotels} />
        </div>
      </div>
    );
  }
}
export default App;
