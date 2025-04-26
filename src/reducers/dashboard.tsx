import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "";

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        nodes: [],
        edges: []
    },
    reducers: {},
})

export const gerNodes = (state: RootState) => state.nodes

export default dashboardSlice.reducer

