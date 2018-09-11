export default (state = [], action) => {
  let quote;
  let index;

  switch(action.type) {
    case 'ADD_QUOTE':    
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return [...state.filter(quote => quote.id !== action.quoteId)];
    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      index = state.indexOf(quote);
      return [...state.slice(0, index),
              {...quote, vote: quote.vote + 1},
              ...state.slice(index + 1)];
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      if(quote.vote > 0) {
        index = state.indexOf(quote);
        return [...state.slice(0, index),
                {...quote, vote: quote.vote - 1},
                ...state.slice(index + 1)];
      } else {
        return state;
      }
    default:
      return state;
  }
}