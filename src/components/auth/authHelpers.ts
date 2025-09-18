export const validateRegister = (form: {
  username: string;
  email: string;
  password: string;
  confirm: string;
}) => {
  if (!form.username || !form.email || !form.password || !form.confirm)
    return "Semua field wajib diisi!";
  if (form.password !== form.confirm)
    return "Password dan konfirmasi tidak sama!";
  return null;
};

export const validateLogin = (form: {
  identifier: string;
  password: string;
}) => {
  if (!form.identifier || !form.password) return "Semua field wajib diisi!";
  return null;
};
