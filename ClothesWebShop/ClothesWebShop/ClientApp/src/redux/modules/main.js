const ADD_ARTICLE_TO_BASKET = "ADD_ARTICLE_TO_BASKET";
const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_ARTICLES = "ADD_ARTICLES";
const ATTACH_USER = "ATTACH_USER";

const initialState = {
  user: null,
  basket: [],
  article: null,
  articles: [],
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

export const addArticles = (articles) => {
  return {
    type: ADD_ARTICLES,
    payload: articles,
  };
};

export const addArticleToBasket = (article) => {
  return {
    type: ADD_ARTICLE_TO_BASKET,
    payload: article,
  };
};

export const attachUser = (user) => {
  return {
    type: ATTACH_USER,
    payload: user,
  };
};

var article, articles, basket, user, isAlreadyInBasket;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      article = action.payload;
      return { ...state, article };
    case ADD_ARTICLES:
      articles = action.payload;
      return { ...state, articles };
    case ADD_ARTICLE_TO_BASKET:
      basket = state.basket;
      article = action.payload;
      isAlreadyInBasket = false;
      // DOESN'T WORK
      basket.forEach((element) => {
        if (element.id === article.id) {
          element.ammountInBasket += article.ammountInBasket;
          isAlreadyInBasket = true;
        }
      });
      if (!isAlreadyInBasket) {
        basket.push(article);
      }
      return { ...state, basket };
    case ATTACH_USER:
      user = action.payload;
      return { ...state, user };
    default:
      return { ...state };
  }
};

export default reducer;
