import bcrypt from 'bcrypt';

export const hashHelper = {
  async hash (password: string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  },

  async compare (password: string, hashPassword: string) {
    return await bcrypt.compare(password, hashPassword);
  },
};
