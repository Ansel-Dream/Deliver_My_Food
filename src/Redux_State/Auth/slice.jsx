import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postApi, getApi } from "../../utils/fetchApiMethods";
import { setToken, removeToken } from "../../utils/tokenMethods";

const initialState = {
  user: null,
  totalUsers: [],
  loading: false,
  error: null,
  isLoggedIn: false,
  authChecked: false,
};

// Check if user is logged in
export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const response = await getApi("/auth/me");
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.message || "Authentication check failed"
      );
    }
  }
);

// Generate OTP thunk
export const generateOtp = createAsyncThunk(
  "auth/generateOtp",
  async (email, thunkAPI) => {
    try {
      // payload is usually email or phone as string
      const response = await postApi("/Auth/generate-otp", email);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "OTP generation failed");
    }
  }
);

// Register thunk (updated to match API spec)
export const register = createAsyncThunk(
  "auth/register",
  async ({ fullName, email, password, role, otp }, thunkAPI) => {
    try {
      const response = await postApi("/auth/register", {
        registerDto: {
          fullName,
          email,
          password,
          role,
        },
        otp,
      });
      //  console.log("response :", response);
      if (response.token) {
        setToken(response.token);
      }

      return response;
    } catch (err) {
      //  console.log("Registration error:", err);
      return thunkAPI.rejectWithValue(err || "Registration failed");
    }
  }
);

// Forgot Password thunk
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }, thunkAPI) => {
    try {
      const response = await postApi("/Auth/forgot-password", { email });

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue({
        error: err.message || "Forgot password failed",
      });
    }
  }
);

// Reset Password thunk
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, otp, newPassword }, thunkAPI) => {
    try {
      const response = await postApi("/Auth/reset-password", {
        email,
        otp,
        newPassword,
      });
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Reset password failed");
    }
  }
);

// Change Password thunk
export const ChangePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ email, token, newPassword }, thunkAPI) => {
    try {
      const response = await postApi("/Auth/change-password", {
        email,
        token,
        newPassword,
      });
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Reset password failed");
    }
  }
);

// Login thunk
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await postApi("/Auth/login", {
        email,
        password,
      });

      // Store token in localStorage
      if (response.token) {
        setToken(response.token);
      }

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err || "Login failed");
    }
  }
);

// Logout thunk
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    // Only remove token from frontend, no API call to backend
    removeToken();
    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message || "Logout failed");
  }
});

// Fetch user profile by ID
export const fetchUsers = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await getApi(`/auth/users/`); // Replace with your endpoint
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.message || "Failed to fetch user profile"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: () => initialState,
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || action.payload;
        state.isLoggedIn = true;
        state.authChecked = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.isLoggedIn = false;
      })

      // Check Auth cases
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.authChecked = true;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        // state.error = action.payload;
        state.user = null;
        state.isLoggedIn = false;
      })

      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || action.payload;
        state.isLoggedIn = true;
        state.authChecked = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.isLoggedIn = false;
      })

      // Logout cases
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.authChecked = true;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Generate OTP cases
      .addCase(generateOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateOtp.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(generateOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Forgot Password cases
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reset Password cases
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // If response contains user and token, log in user
        if (action.payload && action.payload.user && action.payload.token) {
          state.user = action.payload.user;
          state.isLoggedIn = true;
          state.authChecked = true;
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.totalUsers = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.totalUsers = [];
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetAuth, clearError } = authSlice.actions;
export default authSlice.reducer;
