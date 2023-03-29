import axios from 'axios';
//
interface ImyListbyUser {
    toiletId: string;
    userId: string;
}
export const addMyList = async (body: ImyListbyUser) => {
  const res = await axios.post('/myList', body);
  console.log('res addMyList ', res);
  return res;
};

export const getMyList = async (UserId: any) => {
    const res = await axios.get('/myList', {params: {userId: UserId}});
    return res;
};

export const deleteMyList = async (myListId: any) => {
  const res = await axios.delete('/myList', {params: {_id: myListId}});
  return res;
};
