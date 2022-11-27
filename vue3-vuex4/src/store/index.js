// import { createStore } from "vuex";
// import { mutations, STORAGE_KEY } from "./mutations";
// import actions from "./actions";
// import plugins from "./plugins";

// export default createStore({
//   state: {
//     todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]"),
//   },
//   actions,
//   mutations,
//   plugins,
// });

import { createStore, createLogger } from "vuex";
import products from "./modules/products";

export default createStore({
  modules: {
    products,
  },
  strict: true,
  plugins: [createLogger()],
});
