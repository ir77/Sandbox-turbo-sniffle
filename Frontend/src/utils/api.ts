// src/utils/api.ts
export const fetchUser = (userId: string) => {
  // 本来はここでAPIを叩く
  return fetch(`/api/users/${userId}`).then(res => res.json());
};