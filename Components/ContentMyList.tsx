import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Clock,
  PencilSimple,
  PersonSimpleWalk,
  Star,
  Wheelchair,
} from 'phosphor-react-native';
import LinearGradient from 'react-native-linear-gradient';
import BtnHeartMyList from './BtnHeartMyList';
import {set} from 'react-native-reanimated';
import LaunchNavigator from 'react-native-launch-navigator';
interface IContentMyList {
  myListId: string;
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
  onClick: (value: string) => void;
}

const ContentMyList = (props: IContentMyList) => {
  const [Heart, setHeart] = useState(false);
  const [myListID, setMyListID] = useState('');
  const aom: boolean = true;
  useEffect(() => {
    if (Heart === true) {
      console.log(aom);
      props.onSelected(aom);
      props.onClick(myListID);
    }
  }, [Heart]);
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
  const nevi = () => {
    LaunchNavigator.navigate([props.latitude, props.longitude]);
  };
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

          <View style={styles.btnRight}>
            <BtnHeartMyList
              myListId={props.myListId}
              onSelected={value => {
                setHeart(value);
              }}
              onClick={value =>{
                setMyListID(value);
              }}
            />
            <TouchableOpacity style={styles.btnEdit} onPress={nevi}>

              <LinearGradient
                colors={['#FFA897', '#FAC353']}
                style={styles.btnEdit}>
                <PersonSimpleWalk size={16} weight="fill" color="#2C2F4A" />
              </LinearGradient>
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
            <Text style={styles.rate}>5.0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContentMyList;

const styles = StyleSheet.create({
  // Content
  contentContainer: {
    flexWrap: 'wrap',
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