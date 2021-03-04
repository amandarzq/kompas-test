import { createStore } from 'vuex';
import moment from 'moment';
import axios from '../api/axios';

export default createStore({
  state: {
    items: [],
    totalCost: 0,
  },
  mutations: {
    fetchItems(state, payload) {
      state.items = payload;
    },
    totalCost(state, payload) {
      state.totalCost = payload;
    },
  },
  actions: {
    fetchItems(context) {
      axios.get('/')
        .then((response) => {
          const foodGroupByDate = {};
          let sumAllCost = 0;
          response.data.forEach((food) => {
            const date = food.created_at.split(' ')[0];
            if (!foodGroupByDate[date]) {
              foodGroupByDate[date] = { foods: [], totalCost: 0 };
            }

            foodGroupByDate[date].foods.push(food);
            foodGroupByDate[date].totalCost += food.cost;
            sumAllCost += food.cost;
          });
          context.commit('totalCost', sumAllCost);

          const foodArray = Object.keys(foodGroupByDate).map((date) => ({
            date,
            foods: foodGroupByDate[date].foods,
            totalCost: foodGroupByDate[date].totalCost,
          }));

          const sortByDate = foodArray.sort((a, b) => new Date(b.date) - new Date(a.date));

          context.commit('fetchItems', sortByDate);
        })
        .catch((err) => console.log(err));
    },

    addFood(context, payload) {
      const inputFood = {
        ...payload,
        created_at: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
        cost: +payload.cost,
      };
      axios.post('/', inputFood)
        .then(() => {
          context.dispatch('fetchItems');
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {
  },
});
