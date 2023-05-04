import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Wheelchair,
  Star,
  Clock,
  PencilSimple,
  Trash,
} from 'phosphor-react-native';
import {getComment} from '../services/comment';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeParamList} from '../stacks/HomeStack';
import {ProfileParamList} from '../stacks/ProfileStack';

interface IContentMyToilet {
  _id: string;
  latitude: number;
  longitude: number;
  title: string;
  contact: string;
  cost: string;
  handicap: boolean;
  free: boolean;
  type: string;
  timeOpen: string;
  timeClose: string;
  toiletpicture: string;
  onSelected: (value: boolean) => void;
  onSelected2: (value: string) => void;
}
interface Comment {
  rate: number;
}
const ContentMyToilet = (props: IContentMyToilet) => {
  let Rate: number = 0;
  let sumRate: number = 0;
  const [comment, setComment] = useState<Comment[]>([]);
  const [SumRate, setsumRate] = useState('0');
  const [ShowRate, setShowRate] = useState(SumRate);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileParamList>>();
  const TagFree = (): JSX.Element | null => {
    if (props.free === true) {
      return (
        <View style={styles.tagFree}>
          <Text style={styles.textFree}>฿ Free</Text>
        </View>
      );
    } else {
      return null;
    }
  };
  const TagHandicap = (): JSX.Element | null => {
    if (props.handicap === true) {
      return (
        <View style={styles.tagHandicap}>
          <Wheelchair
            size={10}
            weight="fill"
            color="#00845A"
            style={{
              marginRight: 2,
              marginLeft: 6,
            }}
          />
          <Text style={styles.textHandicap}>Handicap access</Text>
        </View>
      );
    } else {
      return null;
    }
  };
  // useEffect(() => {
  //   setShowRate(SumRate);
  //   console.log('line61', ShowRate);
  // }, [comment]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_comments: any = await getComment(props._id);
        // console.log('line 68', res_comments);
        setComment(res_comments.Comment);
        if (res_comments) {
          // console.log('line71', res_comments);
          res_comments.Comment.map((item: any, index: number) => {
            Rate += item.rate;
            sumRate = Rate / res_comments.Comment.length;
          });
          // setsumRate(sumRate);
          // console.log(SumRate);
          setsumRate(sumRate.toFixed(1));
        }
      } catch (err: any) {
        // console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.content}>
        <View style={styles.itemLeftTop}>
          <TagFree></TagFree>
          <TagHandicap></TagHandicap>

          <View style={styles.tagType}>
            <Text style={styles.textType}>{props.type}</Text>
          </View>
        </View>

        <View style={styles.itemMid}>
          <View style={styles.itemLeftMid}>
            <Text style={styles.placeName} numberOfLines={1}>
              {props.title}
            </Text>
          </View>

          <View style={styles.btnRight}>
            <TouchableOpacity
              style={styles.btnEdit}
              onPress={() =>
                navigation.navigate('UpdateToilet', {
                  _id: props._id,
                  title: props.title,
                  contact: props.contact,
                  cost: props.cost,
                  handicap: props.handicap,
                  free: props.free,
                  type: props.type,
                  timeOpen: props.timeOpen,
                  timeClose: props.timeClose,
                  toiletpicture: props.toiletpicture,
                })
              }>
              <LinearGradient
                colors={['#FFA897', '#FAC353']}
                style={styles.btnEdit}>
                <PencilSimple size={16} weight="fill" color="#2C2F4A" />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnTrash}
              onPress={() => {
                props.onSelected(true), props.onSelected2(props._id);
              }}>
              <Trash size={16} weight="fill" color="#F4F6FD" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.itemBottom}>
          <Clock
            size={14}
            weight="fill"
            color="#31C596"
            style={{
              marginRight: 5,
            }}
          />
          <Text style={styles.time}>
            {props.timeOpen} - {props.timeClose}
          </Text>
          <View style={styles.itemRightBottom}>
            <Star
              size={14}
              weight="fill"
              color="#FBD17B"
              style={{
                marginRight: 2,
              }}
            />
            <Text style={styles.rate}>{SumRate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContentMyToilet;

const styles = StyleSheet.create({
  // Content
  contentContainer: {
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    paddingHorizontal: 14,
    paddingBottom: 12,
    paddingTop: 8,
  },
  content: {
    width: '100%',
  },
  itemLeftTop: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  // Tag Free
  tagFree: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
    marginRight: 12,
    backgroundColor: '#0BF8AD',
    borderRadius: 20,
  },
  textFree: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 12,
    color: '#00845A',
    paddingLeft: 6,
    paddingRight: 6,
    paddingVertical: 2,
  },

  // Tag Handicap
  tagHandicap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
    marginRight: 12,
    backgroundColor: '#0BF8AD',
    borderRadius: 20,
  },
  textHandicap: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 12,
    color: '#00845A',
    paddingRight: 6,
    paddingVertical: 2,
  },

  // Tag Type
  tagType: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
    backgroundColor: '#CACCDA',
    borderRadius: 20,
  },
  textType: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 12,
    color: '#555568',
    marginLeft: 6,
    paddingRight: 6,
    paddingVertical: 2,
  },

  itemMid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemLeftMid: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '80%',
  },
  placeName: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#2C2F4A',
    marginRight: 12,
  },

  // Button Right
  btnRight: {
    flexDirection: 'row',
  },
  btnEdit: {
    width: 32,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  btnTrash: {
    backgroundColor: '#D75D5D',
    width: 32,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
    elevation: 2,
  },

  // Item Bottom
  itemBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLeftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  time: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#777790',
  },
  itemRightBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  rate: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#2C2F4A',
  },
});
