import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;

//start the application and run these statements in the console
//register the callback with any dispatch? 
//store.subscribe(() => console.log('Look ma, Redux!!'))
//dispatch something and witness the call back above
//store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )