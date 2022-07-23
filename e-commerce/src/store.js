import { createStore } from "redux";
import rootRuducer from "./components/reducer";


const Store = createStore(rootRuducer);

export default Store;