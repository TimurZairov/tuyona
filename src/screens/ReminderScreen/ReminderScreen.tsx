import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../theme/theme';
import Button from '../../components/Button/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReminderScreen = () => {
  const insets = useSafeAreaInsets();

  const [active, setActive] = useState('new');
  //new Tab active
  const toTabActiveNewHandler = () => {
    if (active === 'new') {
      return;
    }
    setActive('new');
  };
  //history Tab active
  const toTabActiveHistoryHandler = () => {
    if (active === 'history') {
      return;
    }
    setActive('history');
  };

  return (
    <>
      {/* HEADER */}
      <View
        style={[
          styles.header,
          {paddingTop: Platform.OS === 'ios' ? insets.top : 16},
        ]}>
        <Text style={styles.title}>Напоминание</Text>
        <View style={styles.btnContainer}>
          <Button
            style={active == 'new' ? styles.btnActive : styles.btnInActive}
            textStyle={
              active === 'new' ? styles.btnTextActive : styles.btnTextInActive
            }
            onPress={toTabActiveNewHandler}>
            Новые
          </Button>
          <Button
            style={active === 'history' ? styles.btnActive : styles.btnInActive}
            textStyle={
              active === 'history'
                ? styles.btnTextActive
                : styles.btnTextInActive
            }
            onPress={toTabActiveHistoryHandler}>
            История
          </Button>
        </View>
      </View>
      {/* BODY */}
      <View style={styles.body}>
        <View style={styles.iconWrapper}>
          <Ionicons name="time" size={60} color={COLORS.mainColor} />
        </View>
        <Text style={styles.title}>Список напоминаний отсутствует</Text>
        <Text style={styles.subTitle}>У вас еще нет новых напоминаний</Text>
      </View>
    </>
  );
};

export default ReminderScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: COLORS.mainColor,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: SIZES.h4.md,
    fontWeight: '700',
    marginBottom: 10,
    color: COLORS.blackColor,
  },
  btnContainer: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
  },
  btnActive: {
    borderRadius: 10,
    flex: 1,
  },
  btnInActive: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: COLORS.grayColor,
  },
  btnTextActive: {
    color: COLORS.mainColor,
  },
  btnTextInActive: {
    color: COLORS.lightGray,
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.mainColor,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    padding: 10,
    backgroundColor: COLORS.blueColor,
    borderRadius: 200,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: SIZES.medium,
    color: COLORS.blackColor,
    fontWeight: '300',
  },
});
