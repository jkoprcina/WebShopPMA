const ADD_ARTICLE_TO_BASKET = "ADD_ARTICLE_TO_BASKET";
const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_ARTICLES = "ADD_ARTICLES";
const LOGIN_USER = "LOGIN_USER";

const initialState = {
  buyer: null,
  basket: [],
  article: null,
  articles: [],
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: { article },
  };
};

export const addArticles = (articles) => {
  return {
    type: ADD_ARTICLES,
    payload: { articles },
  };
};

export const addArticleToBasket = (article) => {
  return {
    type: ADD_ARTICLE_TO_BASKET,
    payload: { article },
  };
};

export const loginBuyer = (buyer) => {
  return {
    type: LOGIN_USER,
    payload: { buyer },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      var article = action.payload.article;
      return { ...state, article };
    case ADD_ARTICLES:
      var articles = action.payload.articles;
      return { ...state, articles };
    case ADD_ARTICLE_TO_BASKET:
      var basket = state.basket;
      article = action.payload.article;
      basket.forEach((element) => {
        if (element.id === article.id) {
          element.ammountInBasket += article.ammountInBasket;
          return { ...state, basket };
        }
      });
      basket.push(article);
      return { ...state, basket };
    case LOGIN_USER:
      var buyer = action.payload.buyer;
      return { ...state, buyer };
    default:
      return { ...state };
  }
};

export default reducer;
