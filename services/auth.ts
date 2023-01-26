import AsyncStorage from '@react-native-async-storage/async-storage';
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
export const getToken = () => {
  const token = async () => await AsyncStorage.getItem('token');
  return token.length > 0 ? String(token) : '';
};

export const getProfile = async () => {
  return await axios.get('/auth/me');
};
