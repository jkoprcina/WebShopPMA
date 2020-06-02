const ADD_ARTICLE_TO_BASKET = "ADD_ARTICLE_TO_BASKET";
const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_ARTICLES = "ADD_ARTICLES";
const ADD_USER = "ADD_USER";

const initialState = {
  user: null,
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

export const addUser = (user) => {
  console.log(user);
  return {
    type: ADD_USER,
    payload: { user },
  };
};

var article, articles, basket, user, isAlreadyInBasket;

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_USER:
      console.log(action.type);
      user = action.payload.user;
      return { ...state, user };
    case ADD_ARTICLE:
      article = action.payload.article;
      return { ...state, article };
    case ADD_ARTICLES:
      articles = action.payload.articles;
      return { ...state, articles };
    case ADD_ARTICLE_TO_BASKET:
      basket = state.basket;
      article = action.payload.article;
      isAlreadyInBasket = false;
      // DOESN'T WORK
      basket.foreach((element) => {
        if (element.id === article.id) {
          element.ammountInBasket += article.ammountInBasket;
          isAlreadyInBasket = true;
        }
      });
      if (!isAlreadyInBasket) {
        basket.push(article);
      }
      return { ...state, basket };
    default:
      return { ...state };
  }
};

export default reducer;
