import { connect } from "react-redux";
import TweetQuote from "./TweetQuote";
import './QuoteBox.css'

function QuoteBox({ quote, author }) {
  return (
    <article>
      <TweetQuote />
      <div id="quote">
        {/* <p>Do not what I say, Do what I do</p> */}
        {/* <span id="author">Snk</span> */}
        <p>{quote}</p>
        <span id="author">{author}</span>
      </div>
    </article>
  );
}

const mapStateToProps = state => ({ quote: state.quote, author: state.author });

export default connect(mapStateToProps)(QuoteBox);
