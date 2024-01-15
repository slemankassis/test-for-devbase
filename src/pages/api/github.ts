const getUser = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  return data;
};

export { getUser };
