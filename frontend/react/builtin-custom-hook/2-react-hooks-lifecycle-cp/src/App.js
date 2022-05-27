import React from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // TODO: answer here
    getQuote()
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <a className="navbar-brand" href="/">
      Random Quote
    </a>
  </nav>
  <div className="container p-3 col-6 mx-auto">
    <div className="d-flex flex-column justify-content-center align-item-center bg-warning "
    style={{
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      padding: "5rem",
     }
    }>
      <div className="d-flex justify-content-center">
      {loading && "Loading..."}
    </div>
    <figure>
      <blockquote className="blockquote">
        <p className="display-4" data-testid="quote">
          {quote && quote.content}
          </p>
      </blockquote>
      <figcaption className="blockquote-footer">
        {quote && quote.author}
      </figcaption>
    </figure>
    <button className="btn btn-primary" onClick={getQuote}>
      Get Another Quote
    </button>
    </div>
  </div>
  </>
  )
}