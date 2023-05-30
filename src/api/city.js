export default function city(params) {
  const url = params.city_id === undefined ? `city` : `city/${params.city_id}`;
  return fetch(
    `${import.meta.env.VITE_BACKEND_URL}/province/${params.province_id}/${url}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
}
