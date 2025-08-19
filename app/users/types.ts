export type User = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  followers: number;
  following: number;
};

export type ErrorProps = {
  error: Error;
};
