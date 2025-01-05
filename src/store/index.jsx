import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      return [...state, action.payload];
    },
    removeSongs(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => [])
  }
});

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      //return [...state, action.payload];
      state.push(action.payload);
    },
    removeMovie(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => [])
  }
});

export const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export const { addSong, removeSongs } = songSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
