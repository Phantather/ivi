import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../utils/axios"
export const getMovies = createAsyncThunk(
    'movie/getMovies',
    async (filter,{rejectWithValue}) => {
        try {
            const res = await instance(`/movie?limit=20`)
            if (res.status !== 200) {
                throw new Error('request error')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

const movieSlice = createSlice({
    name: 'name',
    initialState: {
        data: [],
        error: '',
        status: '',
        filter: {
            limit: 20,
            page: 1,
            county: '',
            year: '',
            genre: ''
        }
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state, {payload}) => {
            state.status = 'loading'
            state.error = ''
        })
        builder.addCase(getMovies.rejected, (state, {payload}) => {
            state.status = 'error'
            state.error = payload
        })
        builder.addCase(getMovies.fulfilled, (state, {payload}) => {
            state.status = 'done'
            state.data = payload.docs
        })
    }
})


export default movieSlice.reducer