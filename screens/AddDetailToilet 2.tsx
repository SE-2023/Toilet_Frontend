import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CaretLeft,
  PlusCircle,
  ForkKnife,
  Tote,
  GasPump,
  House,
  Clock,
  CaretRight,
} from 'phosphor-react-native';
import wc from '../assets/wc.png';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Switch from '../components/Switch';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {AddToiletParamList} from '../stacks/AddToiletStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createToilet} from '../services/toilet';
import {BottomTabParamList} from '../stacks/BottomTabStack';
import handicapContext from '../context/handicapContext';

const AddDetailToilet2 = () => {
  const [placeName, setPlaceName] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [cost, setCost] = React.useState('');
  const [type, setType] = React.useState('');
  const [handicap, setHandicap] = React.useState(false);
  // const childToParent = (childdata: any) => {
  //   setHandicap(childdata);
  // };
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimeOpenPickerVisible, setTimeOpenPickerVisibility] =
    useState(false);
  const [isTimeClosePickerVisible, setTimeClosePickerVisibility] =
    useState(false);
  // const [selectedDate, setSelectedDate] = useState('Select Date');
  const [selectedTimeOpen, setSelectedTimeOpen] = useState('00 : 00');
  const [selectedTimeClose, setSelectedTimeClose] = useState('00 : 00');
  const [free, setfree] = useState(true);
  // const {sendhandicap} = useContext(handicapContext);

  // useEffect(() => {
  //   console.log(sendhandicap);
  // }, [sendhandicap]);
  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };
  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleDateConfirm = date => {
  //   console.warn("A date has been picked: ", date);
  //   const dt = new Date(date);
  //   const x = dt.toISOString().split('T');
  //   const x1 = x[0].split('-');
  //   console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
  //   setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
  //   hideDatePicker();
  // };

  // OPEN
  const showTimeOpenPicker = () => {
    setTimeOpenPickerVisibility(true);
  };

  const hideTimeOpenPicker = () => {
    setTimeOpenPickerVisibility(false);
  };

  const handleTimeOpenConfirm = (dateO: Date) => {
    // console.warn("A date has been picked: ", date);
    const dtO = new Date(dateO);
    // const x = dtO.toLocaleTimeString();
    let timeO = dateO.getHours() + ' : ' + dateO.getMinutes();
    console.log(timeO);
    setSelectedTimeOpen(timeO);
    hideTimeOpenPicker();
  };

  // CLOSE
  const showTimeClosePicker = () => {
    setTimeClosePickerVisibility(true);
  };

  const hideTimeClosePicker = () => {
    setTimeClosePickerVisibility(false);
  };

  const handleTimeCloseConfirm = (dateC: Date) => {
    const dtC = new Date(dateC);
    // const y = dtC.toLocaleTimeString();
    let timeC = dateC.getHours() + ' : ' + dateC.getMinutes();
    console.log(timeC);
    setSelectedTimeClose(timeC);
    hideTimeClosePicker();
  };

  const {params} =
    useRoute<RouteProp<AddToiletParamList, 'AddDetailToilet2'>>();
  console.log(params);
  const navigation =
    useNavigation<NativeStackNavigationProp<AddToiletParamList>>();

  const submitCreateToilet = async () => {
    if (cost.length > 1) {
      setfree(false);
      console.log(' not free ');
    } else {
      setfree(true);
      console.log(' free');
    }
    const createtoilet: any = await createToilet({
      name: placeName,
      latitude: params.latitude,
      longitude: params.longitude,
      desc: 'test',
      contact: contact,
      cost: cost,
      handicap: handicap,
      free: free,
      createBy: params._id,
      type: 'test',
      timeOpen: selectedTimeOpen,
      timeClose: selectedTimeClose,
      toiletpicture: [],
    });
    console.log('createtoilet', createtoilet);
    navigation.replace('AddToilet');
  };

  return (
    <KeyboardAwareScrollView
      style={styles.bgColor}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <CaretLeft
          size={24}
          color="#F4F6FD"
          style={{
            position: 'absolute',
            left: 16,
            top: 14,
          }}
        />
        <Text style={styles.headerTitle}>Adding a toilet</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.addPhoto}>
          <PlusCircle
            size={28}
            // weight='fill'
            color="#777790"
            style={{
              position: 'absolute',
              alignSelf: 'center',
              marginTop: '16%',
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textInput}>
        <View style={{paddingBottom: 10}}>
          <TextInput
            label="Place Name"
            value={placeName}
            theme={theme}
            style={styles.bgTextInput}
            mode="outlined"
            onChangeText={text => setPlaceName(text)}
            multiline
          />
        </View>
      </View>

      <View style={styles.textInputSmall}>
        <View>
          <TextInput
            label="Contact"
            value={contact}
            theme={theme}
            style={styles.bgTextInput}
            mode="outlined"
            onChangeText={text => setContact(text)}
          />
        </View>

        <View style={styles.textInputRight}>
          <TextInput
            label="Cost"
            value={cost}
            theme={theme}
            style={styles.bgTextInput}
            mode="outlined"
            onChangeText={text => setCost(text)}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.boxHandicap}>
          <Text style={styles.titleHandicap}>Handicap access</Text>
          <View style={styles.positionSwitch}>
            <Switch
              inActiveColor={'#BABCCA'}
              activeColor={'#31C596'}
              active={handicap}
              onPress={() => setHandicap(prev => !prev)}
            />
          </View>
        </View>

        <View style={styles.boxTypeLocation}>
          <Text style={styles.titleTypeLocation}>Type of location</Text>

          <View style={styles.btnTypeLocation}>
            <View style={styles.itemLeft}>
              <Image source={wc} style={styles.iconTypeLocation} />
              <Text style={styles.textTypeLocation}>Public</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.btnEdit}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.boxTimeOpen}
          onPress={() => {
            showTimeOpenPicker();
          }}>
          <Clock
            size={24}
            color="#31C596"
            weight="bold"
            style={{
              position: 'absolute',
              marginLeft: 15,
              marginTop: 7,
            }}
          />
          <Text style={styles.titleTimeOpen}>OPEN</Text>
          <Text style={styles.timeOpen}>{selectedTimeOpen}</Text>
          <CaretRight
            size={24}
            color="#2C2F4A"
            style={{
              position: 'absolute',
              marginLeft: '81%',
              marginTop: 13.5,
            }}
          />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isTimeOpenPickerVisible}
          mode="time"
          onConfirm={handleTimeOpenConfirm}
          onCancel={hideTimeOpenPicker}
          is24Hour={true}
        />

        <TouchableOpacity
          style={styles.boxTimeClose}
          onPress={() => {
            showTimeClosePicker();
          }}>
          <Clock
            size={24}
            color="#D75D5D"
            weight="bold"
            style={{
              position: 'absolute',
              marginLeft: 18,
              marginTop: 7,
            }}
          />
          <Text style={styles.titleTimeClose}>CLOSE</Text>
          <Text style={styles.timeClose}>{selectedTimeClose}</Text>
          <CaretRight
            size={24}
            color="#2C2F4A"
            style={{
              position: 'absolute',
              marginLeft: '81%',
              marginTop: 13.5,
            }}
          />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isTimeClosePickerVisible}
          mode="time"
          onConfirm={handleTimeCloseConfirm}
          onCancel={hideTimeClosePicker}
          is24Hour={true}
        />
      </View>

      <View style={styles.btnConfirmPosition}>
        <TouchableOpacity onPress={submitCreateToilet}>
          <LinearGradient
            colors={['#FAC353', '#FFA897']}
            style={styles.btnConfirm}>
            <Text
              style={{
                color: '#2C2F4A',
                fontFamily: 'Fredoka-SemiBold',
                fontSize: 16,
              }}>
              CONFIRM
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddDetailToilet2;

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
  bgColor: {
    height: '100%',
    backgroundColor: '#F4F6FD',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#2C2F4A',
    // position: 'absolute',
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
  headerTitle: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 24,
    color: '#F4F6FD',
    left: 26,
  },
  addPhoto: {
    marginTop: 15,
    alignSelf: 'center',
    width: '100%',
    height: 210,
    backgroundColor: '#CACCDA',
    borderRadius: 3,
  },

  // Text input
  textInput: {
    color: '#F4F6FD',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 10,
  },
  bgTextInput: {
    backgroundColor: '#F4F6FD',
    fontFamily: 'Fredoka-Regular',
  },
  textInputSmall: {
    color: '#F4F6FD',
    width: 198,
    paddingLeft: 16,
  },
  textInputRight: {
    position: 'relative',
    top: -56,
    left: 197,
  },

  // Handicap access
  boxHandicap: {
    width: '35%',
    height: 77,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777790',
    marginTop: -40,
  },
  titleHandicap: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#2C2F4A',
  },
  positionSwitch: {
    marginTop: '10%',
    marginHorizontal: '33%',
  },

  // Type of location
  boxTypeLocation: {
    width: '61%',
    height: 77,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777790',
    marginTop: -77,
    marginStart: '39%',
  },
  titleTypeLocation: {
    marginStart: 12,
    marginTop: 10,
    fontFamily: 'Fredoka-Regular',
    fontSize: 14,
    color: '#777790',
  },
  btnTypeLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginStart: 12,
  },
  iconTypeLocation: {
    height: 24,
    width: 24,
  },
  textTypeLocation: {
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    color: '#2C2F4A',
    marginLeft: 9,
    marginRight: 80,
  },
  btnEdit: {
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 16,
    color: '#6D7DD3',
    marginRight: 12,
    marginTop: 4,
    textDecorationLine: 'underline',
    textDecorationColor: '#6D7DD3',
  },

  // Time Open
  boxTimeOpen: {
    width: '48%',
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777790',
    marginTop: 15,
  },
  titleTimeOpen: {
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 10,
    color: '#31C596',
    marginLeft: 14,
    marginTop: '18%',
  },
  timeOpen: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#2C2F4A',
    marginStart: 74,
    marginTop: -30,
  },

  // Time Close
  boxTimeClose: {
    width: '48%',
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777790',
    marginTop: -52,
    marginStart: '52%',
  },
  titleTimeClose: {
    fontFamily: 'Fredoka-SemiBold',
    fontSize: 10,
    color: '#D75D5D',
    marginLeft: 14,
    marginTop: '18%',
  },
  timeClose: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#2C2F4A',
    marginStart: 74,
    marginTop: -30,
  },

  // Button confirm
  btnConfirm: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    elevation: 4,
  },
  btnConfirmPosition: {
    paddingVertical: 25,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
});
