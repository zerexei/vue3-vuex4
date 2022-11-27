const state = {
  all: [],
};

const getters = {
  getAllProducts(state) {
    return state.all;
  },
  getAllPendingProducts(state) {
    return state.all.filter((p) => !p.completed);
  },
  getAllCompletedProducts(state) {
    return state.all.filter((p) => p.completed);
  },
};

const mutations = {
  setProducts(state, payload) {
    state.all = payload;
  },
};

const actions = {
  async getAllProducts({ commit }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const products = await res.json();
    // mutator
    commit("setProducts", products);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
