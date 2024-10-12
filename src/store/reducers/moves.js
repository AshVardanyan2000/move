import {createReducer} from '@reduxjs/toolkit';
import {changeFeaturedData, getTendingNow} from '../actions/moves';
import Utils from "../../helpers/Utils";
import _ from "lodash";

const initialState = {
  tendingNow: [],
  featured: {},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTendingNow.fulfilled, (state, { payload }) => {
      const moveId = Utils.getMoveId()
      const tendingNow = (moveId
        ? [...payload.TendingNow, payload.Featured]
        : [payload.Featured, ...payload.TendingNow]).sort((a, b) => new Date(b.Date) - new Date(a.Date)).slice(0, 50)

      state.tendingNow = tendingNow;
      state.featured = moveId ? tendingNow.find(d => +d.Id === +Utils.getMoveId()) : payload.Featured
    })

    .addCase(changeFeaturedData, (state, { payload }) => {
      Utils.setMoveId(payload.Id)
      state.featured = payload;
      state.tendingNow = _.uniqBy([payload, ...state.tendingNow], 'Id');
    })
});

export default reducer;
