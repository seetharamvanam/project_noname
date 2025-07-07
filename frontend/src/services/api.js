// src/services/api.js
// Centralized API utility for all backend requests

const API_BASE_URL = "http://localhost:8080/api";

export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  const opts = {
    credentials: "include",
    ...options,
    headers: { ...defaultHeaders, ...(options.headers || {}) },
  };
  const response = await fetch(url, opts);
  if (!response.ok) {
    let data;
    try {
      data = await response.json();
    } catch {
      data = { message: response.statusText };
    }
    throw new Error(data.message || "Request failed");
  }
  if (response.status !== 204) {
    return response.json();
  }
  return null;
}

export default {
  apiRequest,
};
