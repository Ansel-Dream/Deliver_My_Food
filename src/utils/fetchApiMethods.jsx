const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { getToken } from "./tokenMethods";

export const getHeaders = (isJson = true) => {
  const headers = {};
  const token = getToken();

  if (isJson) headers["Content-Type"] = "application/json";
  if (token) headers["Authorization"] = `Bearer ${token}`;

  return headers;
};

const handleResponse = async (res) => {
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
};

export const getApi = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: getHeaders(),
    });
    return await handleResponse(res);
  } catch (err) {
    throw err?.error || err?.message || "Something went wrong";
  }
};

export const postApi = async (url, data) => {
  try {
    console.log("Posting data:", url, data);
    // console.log("Posting headers (stringified):", getHeaders());
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return await handleResponse(res);
  } catch (err) {
    throw err?.error || err?.message || "Something went wrong";
  }
};

export const postMultiPartApi = async (url, data, isFormData = false) => {
  try {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    let body;
    if (isFormData) {
      body = data;
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    } else {
      body = JSON.stringify(data);
      headers = getHeaders();
    }

    const res = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers,
      body,
    });

    let result;
    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      result = await res.json(); // safe
    } else {
      result = await res.text(); // plain text fallback
    }

    if (!res.ok) {
      throw result; // server error
    }

    return result;
  } catch (err) {
    console.error("POST API error:", err);
    throw err;
  }
};

export const patchApi = async (url, data) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return await handleResponse(res);
  } catch (err) {
    throw err?.error || err?.message || "Something went wrong";
  }
};

export const putApi = async (url, data) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "PUT", // PUT method
      headers: getHeaders(), // headers same as patchApi
      body: JSON.stringify(data), // payload as JSON
    });
    return await handleResponse(res); // handle response the same way
  } catch (err) {
    throw err?.error || err?.message || "Something went wrong";
  }
};

export const deleteApi = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    return await handleResponse(res);
  } catch (err) {
    throw err?.error || err?.message || "Something went wrong";
  }
};
