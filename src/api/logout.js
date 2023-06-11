export default function logout() {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}
