import { configureStore } from '@reduxjs/toolkit'
import centralDeckReducer from './Slice/CentralDeckSlice';
import { createClient } from '@liveblocks/client';
import { liveblocksEnhancer } from '@liveblocks/redux';

const client = createClient({
  publicApiKey: "pk_prod_xxxxxxxxxxxxxxxxxxxxxxxx",
});


export const store = configureStore({
  reducer: {
    centralDeck: centralDeckReducer,    
  },
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch