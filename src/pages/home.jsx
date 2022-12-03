import useStateStorage from "../hoc/useStateStorage";
import Hotels from "../components/Hotels/Hotels";
import { useEffect, useContext } from "react";
import BestHotel from "../components/BestHotel/BestHotel";
import LastHotel from "../components/Hotels/LastHotel";
import useWebsiteTitle from "../hoc/useWebsiteTitle";
import React from "react";
import Loading from "../components/Ui/Loading";
import reducerContext from "../context/reducerContext";

export default function Home(props) {
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
        "Overlooking Barcelona's port, this upscale 16th-century hotel is near the Gothic Quarter. It is a 9-minute walk from Drassanes Metro Station and 3 km from the Sagrada Família.",
    },
  ];
  const [lastHotel, setLastHotel] = useStateStorage("lastHotel", null);
  const reducer = useContext(reducerContext);

  useWebsiteTitle("Hotels APP");

  useEffect(() => {
    setTimeout(() => {
      reducer.dispatch({ type: "set-hotels", hotels: backendHotels });
      reducer.dispatch({ type: "set-loading", loading: false });
    }, 1000);
  }, []);

  if (reducer.state.loading) {
    return <Loading />;
  }

  const getBestHotel = () => {
    if (reducer.state.hotels.length < 2) {
      return null;
    } else {
      return reducer.state.hotels.sort((b, a) =>
        b.rating > a.rating ? -1 : 1
      )[0];
    }
  };

  const removeLastHotel = () => {
    setLastHotel(null);
  };

  const openHotel = (hotel) => {
    setLastHotel(hotel);
  };

  return (
    <>
      {lastHotel ? (
        <LastHotel {...lastHotel} onRemove={removeLastHotel} />
      ) : null}
      <BestHotel getHotel={getBestHotel} />
      <Hotels hotels={reducer.state.hotels} onOpen={openHotel} />
    </>
  );
}
