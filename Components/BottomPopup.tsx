import React, {useState} from 'react';
import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
interface IPop {
  show: boolean;
  close: () => void;
  title: string;
  data: any;
  onSelected: (value: string) => void;
}
const deviceHeight = Dimensions.get('window').height;
const BottomPopup = (props: IPop) => {
  //   const close = () => {
  //     setShow(false);
  //   };

  const renderOutsideTouchable = (onTouch: any) => {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  };
  const renderTitle = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#182E44',
            fontSize: 25,
            fontWeight: '500',
            marginTop: 15,
            marginBottom: 30,
          }}>
          {props.title}
        </Text>
      </View>
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => props.onSelected(item.name)}
        style={{
          height: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
        }}>
        <View
          style={{
            height: 50,
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'normal',
              color: '#182E44',
            }}>
            {item.icon}
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const RenderSeparator = () => {
    return (
      <View
        style={{
          opacity: 0.1,
          backgroundColor: '#182E44',
          height: 1,
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <View>
        <FlatList
          style={{marginBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={props.data}
          renderItem={renderItem}
          extraData={props.data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={RenderSeparator}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        />
      </View>
    );
  };

  // let {show} = this.state
  // const {onTouchOutside, title} = this.props

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={props.show}
      onRequestClose={props.close}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000000AA',
          justifyContent: 'flex-end',
        }}>
        {renderOutsideTouchable(props.close)}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 10,
            maxHeight: deviceHeight * 0.4,
          }}>
          {renderTitle()}
          {renderContent()}
        </View>
      </View>
    </Modal>
  );
};
export default BottomPopup;
