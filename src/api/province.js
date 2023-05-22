export const getProvinces = (params) => {
  const url = params === undefined ? "province" : `province/${params.id}`;
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/${url}`, {
    method: "GET",
  }).then((response) => response.json());
};
