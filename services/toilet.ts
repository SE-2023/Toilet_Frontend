import axios from 'axios';

interface ItoiletbyUser {
  title: string;
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
interface IUpdatetoilet {
  _id: string;
  title: string;
  contact: string;
  cost: string;
  handicap: boolean;
  free: boolean;
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

export const getAlltoiletPrivate = async () => {
  const res = await axios.get('/toilet');
  // console.log('res', res);
  return res;
};

export const getMytoilet = async (CreateBy: any) => {
  const res = await axios.get('/toilet/mytoilet', {
    params: {createBy: CreateBy},
  });
  return res;
};

export const updateToilet = async (body: IUpdatetoilet) => {
  const res = await axios.put('/toilet/updateToilet', body);
  console.log('res  updateToilet ', res);
  return res;
};

export const deleteMyToilet = async (myToiletId: any) => {
  const res = await axios.delete('/toilet/delete', {params: {_id: myToiletId}});
  return res;
};
