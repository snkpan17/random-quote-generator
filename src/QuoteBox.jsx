import TweetQuote from "./TweetQuote";
import './QuoteBox.css'

function QuoteBox() {
    return (
        <article>
            <TweetQuote/>
            <div id="quote">
                <p>Do not what I say, Do what I do</p>
                <span id="author">Snk</span>
            </div>
        </article>
    );
}

export default QuoteBox;
