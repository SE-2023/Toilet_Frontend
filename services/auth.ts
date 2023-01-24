import axios from 'axios';
interface ISignIn {
  email: string;
  password: string;
}
export const signUp = async () => {
  const res = await axios.post('/auth/signup');
  console.log('res', res);
  return res;
};

export const signIn = async (body: ISignIn) => {
  const res = await axios.post('/auth/signin', body);
  console.log('res', res);
  return res;
};
