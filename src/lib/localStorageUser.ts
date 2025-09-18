export interface User {
  username: string;
  email: string;
  password: string;
}

const STORAGE_KEY = "users";

export const getUsers = (): User[] => {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const addUser = (user: User): boolean => {
  const users = getUsers();
  const exists = users.some(
    u => u.username === user.username || u.email === user.email
  );
  if (exists) return false;

  users.push(user);
  saveUsers(users);
  return true;
};

export const findUser = (identifier: string, password: string): User | null => {
  const users = getUsers();
  const user = users.find(
    u => (u.username === identifier || u.email === identifier) && u.password === password
  );
  return user || null;
};
