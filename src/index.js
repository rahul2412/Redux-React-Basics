
import store from "./store";
import { addArticle } from "./action";

window.store = store;
window.addArticle = addArticle;

store.subscribe(() => console.log('Look man, Redux is doing its Magic'))
// It is fired whenever state changes

