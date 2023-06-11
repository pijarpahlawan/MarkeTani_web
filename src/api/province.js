export default function province(params) {
  const url = params === undefined ? "province" : `province/${params.id}`;
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}
