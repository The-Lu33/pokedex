import {createSlice}  from '@reduxjs/toolkit';

export const startSlice = createSlice({
    name: 'start',
    initialState: "",
    reducers: {
        setStart: (state, action) => {
            const input = action.payload;
            return input
        }
        }
    
});
export const {setStart} = startSlice.actions;

export default startSlice.reducer;