import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { apiUrl } from '../../utils/ApiHelper';
import { toast } from 'react-toastify';
import { WeatherState } from '../../types';
import { BASE_URL, KEY } from '../../utils/ApiHelper';


const initialState: WeatherState = {
    weatherData: null,
    loading: false,
    error: null,
    history: []
};


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${BASE_URL}weather?q=${city}&units=Metric&appid=${KEY}`
            );
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            toast.error(errorMessage);
            return rejectWithValue(error);
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addToSearchHistory: (state, action) => {
            const newTerm = action.payload;
            if (newTerm && !state.history.includes(newTerm)) {
                state.history = [newTerm, ...state.history.slice(0, 4)];
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;

            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
                // toast.error(state.error);
            });
    },
});
export const { addToSearchHistory } = weatherSlice.actions;
export default weatherSlice.reducer;