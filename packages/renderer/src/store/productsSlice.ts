import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

export const createProduct = createAsyncThunk("products/createProduct", async (formData: Partial<IProduct>) => {
  const newProduct = await window.ipcRenderer.invoke(
    'create-product',
    formData
  );

  return newProduct;
})

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const products = await window.ipcRenderer.invoke('get-products');
  return products;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return [...action.payload]
    });
  }
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;