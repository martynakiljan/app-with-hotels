import React, {
  useEffect,
  useLayoutEffect,
  useState
} from "react";

const styles = {
  position: "absolute",
  top: "20px",
  left: 0,
  right: 0,
  textAlign: "center",
  color: "#fff",
};

const quotes = [
  "Have stories to tell not stuff to show",
  "Adventures are the best way to learn.",
  "Travel is an investment in yourself.",
  "It’s not what you look at that matters. It’s what you see",
];

const InspiringQuote = () => {
  const [quote, setQuote] = useState("loading quotes...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    setQuote(quotes[Math.floor(Math.random()) * quotes.length]);

    console.log(quotes.length);
    console.log(quotes[Math.floor(Math.random()) * quotes.length]);
  }, [loading]);

  return <p style = {
    styles
  } > {
    quote
  } < /p>;
};

export default InspiringQuote;