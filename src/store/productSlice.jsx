import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:[],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProduct(state,action){
       state.data=action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getProducts.fulfilled, (state, action) => {
  //     state.data = action.payload;
  //   });
  // },
});
export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;

// export const getProducts = createAsyncThunk("products/get", async () => {
//   const data = await fetch("https://fakestoreapi.com/products");
//   const result = await data.json();
//   return result;
// });

export  async function getProducts(dispatch) {
  // return async function getProductsThunk(dispatch , getState){
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  console.log(result);
  dispatch(fetchProduct(result));
}
// }
