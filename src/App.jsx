import { Provider } from 'react-redux';
import reduxStore from './store';
import NextQuote from "./NextQuote";
import QuoteBox from "./QuoteBox";
import './App.css';

function App() {
  return (
    <Provider store={reduxStore}>
      <main>
        {/* <TweetQuote/>     */}
        <QuoteBox />
        <NextQuote />
      </main>
    </Provider>
  );
}

export default App;
