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
      const moveIds = Utils.getMoveIds();

      const tendingNow = (moveIds?.[0]
        ? [...payload.TendingNow, payload.Featured]
        : [payload.Featured, ...payload.TendingNow]).sort((a, b) => new Date(b.Date) - new Date(a.Date)).slice(0, 50);


      state.tendingNow = moveIds?.[0] ? tendingNow.sort((a, b) => {
        const indexA = moveIds.indexOf(a.Id);
        const indexB = moveIds.indexOf(b.Id);

        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return 0;
      }) : tendingNow;

      state.featured = moveIds?.[0] ? tendingNow.find(d => +d.Id === +moveIds[0]) : payload.Featured;
    })

    .addCase(changeFeaturedData, (state, { payload }) => {
      const moveIds = Utils.getMoveIds();

      Utils.setMoveIds( _.uniq([payload.Id, ...moveIds]));

      state.featured = payload;
      state.tendingNow =  _.uniqBy([payload, ...state.tendingNow], 'Id');
    })
});

export default reducer;



