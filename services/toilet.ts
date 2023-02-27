import axios from 'axios';

interface ItoiletbyUser {
  name: string;
  latitude: number;
  longitude: number;
  desc: string;
  contact: string;
  cost: string;
  handicap: boolean;
  free: boolean;
  createBy: string;
  type: string;
  timeOpen: string;
  timeClose: string;
  toiletpicture: string;
}
export const createToilet = async (body: ItoiletbyUser) => {
  const res = await axios.post('/toilet', body);
  console.log('res createToilet ', res);
  return res;
};
