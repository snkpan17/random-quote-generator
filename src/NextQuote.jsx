import { FETCH_QUOTE_AUTHOR } from "./constants";
import { connect } from "react-redux";

function NextQuote({ fetchQuoteAuthor }) {
  return (
    <button id="next-btn" onClick={fetchQuoteAuthor}>Next Quote</button>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchQuoteAuthor: () => dispatch({ type: FETCH_QUOTE_AUTHOR })
});

export default connect(null, mapDispatchToProps)(NextQuote);
