import {createSlice}  from '@reduxjs/toolkit';

export const startSlice = createSlice({
    name: 'start',
    initialState: "",
    reducers: {
        setStart: (state, action) => {
            const inputt = action.payload;
            return inputt;
        }
    }
    
});
export const {setStart} = startSlice.actions;

export default startSlice.reducer;