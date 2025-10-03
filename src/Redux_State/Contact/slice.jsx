import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postApi, getApi } from "../../utils/fetchApiMethods";

const initialState = {
    contactRequests: [],
    loading: false,
    error: null,
    submitSuccess: false,
};

// Submit contact request thunk
export const submitContactRequest = createAsyncThunk(
    "contact/submitContactRequest",
    async (contactData, thunkAPI) => {
        try {
            const response = await postApi("/contact-request/submit", contactData);
            return response;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || "Failed to submit contact request");
        }
    }
);

// Get all contact requests thunk
export const getAllContactRequests = createAsyncThunk(
    "contact/getAllContactRequests",
    async (_, thunkAPI) => {
        try {
            const response = await getApi("/contact-request/all");
            return response;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || "Failed to fetch contact requests");
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        clearContactError: (state) => {
            state.error = null;
        },
        clearSubmitSuccess: (state) => {
            state.submitSuccess = false;
        },
        resetContactState: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            // Submit contact request cases
            .addCase(submitContactRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.submitSuccess = false;
            })
            .addCase(submitContactRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.submitSuccess = true;
            })
            .addCase(submitContactRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.submitSuccess = false;
            })

            // Get all contact requests cases
            .addCase(getAllContactRequests.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllContactRequests.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.contactRequests = action.payload;
            })
            .addCase(getAllContactRequests.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearContactError, clearSubmitSuccess, resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
