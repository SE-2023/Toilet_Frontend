import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox
} from 'react-native';
import React,{useEffect,useState} from 'react';
import bgSUKA from '../assets/bgSUKA_4.png';
import ContentMyList from '../components/ContentMyList';
import {getProfile} from '../services/auth';
import {getMyList} from '../services/myList';


export interface IProfile {
  _id: string;
}

interface myList {
  toiletId: string;
  userId: string;
}

const {width} = Dimensions.get('window');
const aspectRatio = 290 / 500;
const height = width * aspectRatio;

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const AddList = () => {
  const [myList, setMyList] = useState<myList[]>([]);
  const [checkData, setCheckData] = useState('');
  const getUserProfile = async () => {
    const {data} = await getProfile();
    const list:any = await getMyList(data._id);
    await setMyList(list.myList)
    await setCheckData(list.message)  
  };
  
  useEffect(()=>{
    getUserProfile();
  },[])

  const RenderMyList = (): JSX.Element | null =>{
    
    if (checkData === 'success' && myList[0] !== undefined){
      return(
      <>
        {myList.map((item: any, index) =>{
          if(item.myListPrivate[0]!== undefined){ 
          return( 
            <ContentMyList
              key={index}
              myListId={item._id}
              _id={item.myListPrivate[0]._id}
              latitude={item.myListPrivate[0].latitude}
              longitude={item.myListPrivate[0].longitude}
              title={item.myListPrivate[0].title}
              contact={item.myListPrivate[0].contact}
              cost={item.myListPrivate[0].cost}
              handicap={item.myListPrivate[0].handicap}
              free={item.myListPrivate[0].free}
              type={item.myListPrivate[0].type}
              timeOpen={item.myListPrivate[0].timeOpen}
              timeClose={item.myListPrivate[0].timeClose}
              toiletpicture={item.myListPrivate[0].toiletpicture}
            />
          )}
          if(item.myListPublic[0]!== undefined){ 
            return( 
              <ContentMyList
                key={index}
                myListId={item._id}
                _id={item.myListPublic[0]._id}
                latitude={item.myListPublic[0].latitude}
                longitude={item.myListPublic[0].longitude}
                title={item.myListPublic[0].title}
                contact={item.myListPublic[0].contact}
                cost={item.myListPublic[0].cost}
                handicap={item.myListPublic[0].handicap}
                free={item.myListPublic[0].free}
                type={item.myListPublic[0].type}
                timeOpen={item.myListPublic[0].timeOpen}
                timeClose={item.myListPublic[0].timeClose}
                toiletpicture={item.myListPublic[0].toiletpicture}
              />
            );}
        })}
      </>
      );
    }
    else{
      return null
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{height: height * 0.4}}>
          <Image source={bgSUKA} style={{width, height}} />
        </View>
      </View>

      <Text style={styles.title}>My List</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <RenderMyList></RenderMyList>
        <View style={{height: height * 0.08}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAFA',
    paddingHorizontal: 16,
  },

  // Header
  title: {
    position: 'absolute',
    top: 40,
    left: 16,
    fontFamily: 'Fredoka-Medium',
    fontSize: 32,
    color: '#2C2F4A',
  },
});
