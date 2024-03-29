import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CaretLeft, X, Star} from 'phosphor-react-native';
import Review from '../components/Review';
import Modal from 'react-native-modal';
import star from '../assets/star.png';
import {TextInput} from 'react-native-paper';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeParamList} from '../stacks/HomeStack';
import {getComment} from '../services/comment';
import NotRating from '../components/NotRating';
interface Comment {
  CreateBy: string;
  toiletId: string;
  comment: string;
  rate: number;
  updatedAt: string;
  result: any;
}
const Ratings = () => {
  const {params} = useRoute<RouteProp<HomeParamList, 'Ratings'>>();
  console.log(params);
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();
  const [ToiletId, setToiletId] = useState(params.toiletID);
  const [comment, setComment] = useState<Comment[]>([]);
  const [checkData, setCheckData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const comments: any = await getComment(ToiletId);
        // console.log(comments.data);
        setComment(comments.Comment);
        setCheckData(comments.message);
      } catch (err: any) {
        setCheckData(err.message);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const RenderComment = (): JSX.Element | null => {
    if (checkData === 'success' && comment[0] !== undefined) {
      return (
        <>
          {comment.map((item: any, index) => {
            return (
              <Review
                key={index}
                image={item.result[0].profile_picture}
                username={item.result[0].firstname}
                rating={item.rate}
                date={item.updatedAt}
                comment={item.comment}
              />
            );
          })}
        </>
      );
    } else {
      return (
        <View style={styles.notRating}>
          <NotRating />
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          <CaretLeft size={24} color="#F4F6FD" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ratings</Text>
      </View>

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.reviewContainer}>
            <RenderComment></RenderComment>
          </View>

          {/* <View style={styles.rateContainer}>
            <TouchableOpacity style={styles.btnRate} onPress={() => setModal(true)}>
              <Text style={styles.textRate}>RATE & REVIEW</Text>
            </TouchableOpacity>
          </View> */}

          <View style={{height: 68, backgroundColor: '#F4F6FD'}}></View>
        </ScrollView>

        {/* <Modal isVisible={modal}>
          <View style={styles.modalContainer}>
            <Image source={star} style={styles.imageStar}/>

            <TouchableOpacity style={styles.btnClose} onPress={() => setModal(false)}>
              <X size={24} weight="bold" color='#2C2F4A' />
            </TouchableOpacity>

            <View style={styles.detailContainer}>
              <Text style={styles.title}>Rate & Review</Text>
              <TouchableOpacity style={styles.btnStar}>
                <Star size={34} weight="fill" color='#FAC353' />
                <Star size={34} weight="fill" color='#FAC353' />
                <Star size={34} weight="fill" color='#FAC353' />
                <Star size={34} weight="fill" color='#FAC353' />
                <Star size={34} weight="bold" color='#FAC353' />
              </TouchableOpacity>
              <TextInput
                label="Review"
                value={review}
                theme={theme}
                style={styles.bgTextInput}
                mode="outlined"
                onChangeText={text => setReview(text)}
                multiline
              />
              <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.textSubmit}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View> 
        </Modal> */}
      </View>
    </View>
  );
};

export default Ratings;

const theme = {
  colors: {
    primary: '#6D7DD3',
  },
  fonts: {
    regular: {
      fontFamily: 'Fredoka-Regular',
    },
  },
};

const styles = StyleSheet.create({
  notRating: {
    marginTop: '55%',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F6FD',
  },
  header: {
    backgroundColor: '#2C2F4A',
    height: 52,
    width: '100%',
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 8,
  },
  btnBack: {
    position: 'absolute',
    left: 16,
    top: 14,
  },
  headerTitle: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 24,
    color: '#F4F6FD',
    left: 26,
  },
  reviewContainer: {
    marginHorizontal: 25,
  },
  rateContainer: {
    marginHorizontal: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  btnRate: {
    backgroundColor: '#FFA897',
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  textRate: {
    fontSize: 16,
    fontFamily: 'Fredoka-SemiBold',
    color: '#2C2F4A',
  },

  // Modal
  modalContainer: {
    backgroundColor: '#F4F6FD',
    borderRadius: 8,
    marginHorizontal: 20,
  },
  imageStar: {
    width: 330,
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  btnClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  detailContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Fredoka-Medium',
    color: '#2C2F4A',
    marginTop: 15,
    alignSelf: 'center',
  },
  btnStar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  bgTextInput: {
    backgroundColor: '#F4F6FD',
    marginTop: 15,
    fontFamily: 'Fredoka-Regular',
  },
  btnSubmit: {
    backgroundColor: '#6D7DD3',
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 20,
    elevation: 3,
  },
  textSubmit: {
    fontSize: 16,
    fontFamily: 'Fredoka-SemiBold',
    color: '#F4F6FD',
  },
});
