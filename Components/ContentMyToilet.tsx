import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Wheelchair, Star, Clock, PencilSimple} from 'phosphor-react-native';
import {getComment} from '../services/comment';
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
}
interface Comment {
  rate: number;
}
const ContentMyToilet = (props: IContentMyToilet) => {
  let Rate: number = 0;
  let sumRate: number = 0;
  const [comment, setComment] = useState<Comment[]>([]);
  const [SumRate, setsumRate] = useState(0);
  const [ShowRate, setShowRate] = useState(SumRate);
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
  useEffect(() => {
    setShowRate(SumRate);
    console.log('line61', ShowRate);
  }, [comment]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const comments: any = await getComment(props._id);
        // console.log(comments.data);
        setComment(comments.Comment);
        if (comment) {
          comment.map((item: any, index) => {
            Rate += item.rate;
            sumRate = Rate / comment.length;
          });
          // setsumRate(sumRate);
          // console.log(SumRate);
          setsumRate(sumRate);
        }
      } catch (err: any) {
        console.log(err.message);
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
            <Text style={styles.placeName}>{props.title}</Text>
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

          <TouchableOpacity style={styles.btnEdit}>
            <LinearGradient
              colors={['#FFA897', '#FAC353']}
              style={styles.btnEdit}>
              <PencilSimple size={16} weight="fill" color="#2C2F4A" />
            </LinearGradient>
          </TouchableOpacity>
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
            <Text style={styles.rate}>5.0</Text>
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
    width: '85%',
  },
  placeName: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#2C2F4A',
    marginRight: 12,
  },
  btnEdit: {
    width: 32,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

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
