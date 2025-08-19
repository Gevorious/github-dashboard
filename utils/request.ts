export const request = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const errorBody = await res.json();
    const message = `${errorBody.message} - ${res.status}`;
    throw new Error(message);
  }
  return res.json();
};
