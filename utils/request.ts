export const request = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_API}${url}`,
    options,
  );
  if (!res.ok) {
    const errorBody = await res.json();
    const message = `${errorBody.message} - ${res.status}`;
    throw new Error(message);
  }
  return res.json();
};
