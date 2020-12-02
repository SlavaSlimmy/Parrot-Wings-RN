import { createSlice } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { getTransactions } from '../../api/index';

const byIdSchema = new schema.Entity('byId');
const transSchema = new schema.Array(byIdSchema);

export const slice = createSlice({
  name: 'transactions',
  initialState: {
    order: 'desc',
    orderBy: 'date',
    allIds: [],
    byId: {},
    loaded: false
  },
  reducers: {
    getTransactionsSuccess: (state, action) => {
      console.log('getTransactionsSuccess', action);
      return {
        ...state,
        allIds: action.payload.result,
        byId: action.payload.entities.byId,
        loaded: true
      };
    },
    sortTransactions: (state, action) => {
      console.log('sortTransactions', action);
      const { orderBy, order } = action.payload;

      let data = [];
      if (orderBy === 'date') {
        data = state.allIds.sort(
          (a, b) => {
            const itemA = new Date(state.byId[a][orderBy]).valueOf();
            const itemB = new Date(state.byId[b][orderBy]).valueOf();
            if (order === 'desc') {
              if (itemA > itemB) {
                return -1;
              }
              if ((itemB > itemA)) {
                return 1;
              }
              return 0;
            }
            if (itemB > itemA) {
              return -1;
            }
            if ((itemA > itemB)) {
              return 1;
            }
            return 0;
          }
        );
      } else {
        data = state.allIds.sort(
          (a, b) => {
            if (order === 'desc') {
              if (state.byId[a][orderBy] > state.byId[b][orderBy]) {
                return -1;
              }
              if ((state.byId[b][orderBy] > state.byId[a][orderBy])) {
                return 1;
              }
              return 0;
            }
            if (state.byId[b][orderBy] > state.byId[a][orderBy]) {
              return -1;
            }
            if ((state.byId[a][orderBy] > state.byId[b][orderBy])) {
              return 1;
            }
            return 0;
          }
        );
      }

      return {
        ...state,
        allIds: data,
        order,
        orderBy
      };
    },
  }
});

export const { getTransactionsSuccess, sortTransactions } = slice.actions;

export const getTransactionsList = (token) => async (dispatch) => {
  const data = await getTransactions(token);
  if (!data.trans_token) {
    console.log('Error', data);
  } else {
    const normalizedData = normalize(data.trans_token, transSchema);
    dispatch(getTransactionsSuccess(normalizedData));
    dispatch(sortTransactions({ orderBy: 'date', order: 'desc' }));
  }
};

export const selectTransactions = (state) => state.transactions.allIds.map((val) => {
  return state.transactions.byId[val];
});
export const selectLoaded = (state) => state.transactions.loaded;

export default slice.reducer;
