import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from 'react-native';
import { List, Snackbar } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-navigation';
import { AccordingIcon, Back } from '../../assets/icons/icon';

const Question = () => {
  let navigation = useNavigation();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <View style={styles.head2}>
        <View style={styles.headback}>
          <TouchableOpacity onPress={navigation.goBack}>
            <View style={styles.back}>
              <Back />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bonus}>
          <Text style={styles.text}>Часто задаваемые</Text>
          <Text style={styles.text}>вопросы</Text>
        </View>
        <View style={styles.back1}></View>
      </View>
      <View style={styles.headtext}>
        <Text style={styles.text2}>регистрация в сервисе ZPAY</Text>
      </View>

      <SafeAreaView style={styles.safearia}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <List.Section>
            <List.Accordion
              titleNumberOfLines={0}
              title="Как начать пользоваться сервисом?"
              titleStyle={{ color: '#121F3E', fontSize: 16, fontWeight: '600' }}
              right={() => (
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={[
                    styles.img,
                    { transform: [{ rotate: expanded ? '-180deg' : '0deg' }] },
                  ]}
                />
              )}
              // expanded={expanded}
              onPress={handlePress}
              style={{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#EAEFF3',
                padding: 5,
                justifyContent: 'space-between',
              }}
            >
              <List.Item
                titleNumberOfLines={0}
                title={
                  '1.Зарегистрировать номер в системе ZPAY.2. Пройти верификацию для получения лимита'
                }
                titleStyle={{
                  color: '#121F3E',
                  fontSize: 14,
                  flexWrap: 'wrap',
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}
                style={{
                  backgroundColor: '#EAE9EE',
                  borderRadius: 10,
                  height: 108,
                  width: '100%',
                }}
              />
            </List.Accordion>
          </List.Section>
          <List.Section>
            <List.Accordion
              titleNumberOfLines={0}
              title="Как пройти регистрацию?"
              // right={props => <List.Icon icon={AccordingIcon} />}
              titleStyle={{ color: '#121F3E', fontSize: 16, fontWeight: '600' }}
              right={() => (
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={[
                    styles.img,
                    { transform: [{ rotate: expanded ? '-180deg' : '0deg' }] },
                  ]}
                />
              )}
              // expanded={expanded}
              // descriptionNumberOfLines={2}
              onPress={handlePress}
              style={{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#EAEFF3',
                padding: 5,
                justifyContent: 'space-between',
              }}>
              <List.Item
                title=""
                titleStyle={{
                  color: '#121F3E',
                  fontSize: 14,
                  flexWrap: 'wrap',
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}
                style={{
                  backgroundColor: '#EAE9EE',
                  borderRadius: 10,
                  height: 108,
                  width: '100%',
                }}
              />
            </List.Accordion>
          </List.Section>
          <List.Section>
            <List.Accordion
              titleNumberOfLines={0}
              title="Что, если получили “ОТКАЗ” в верификации?"
              // right={props => <List.Icon icon={AccordingIcon} />}
              titleStyle={{ color: '#121F3E', fontSize: 16, fontWeight: '600' }}
              right={() => (
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={[
                    styles.img,
                    { transform: [{ rotate: expanded ? '-180deg' : '0deg' }] },
                  ]}
                />
              )}
              // expanded={expanded}
              // descriptionNumberOfLines={2}
              onPress={handlePress}
              style={{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#EAEFF3',
                padding: 5,
              }}>
              <List.Item
                title=""
                titleStyle={{
                  color: '#121F3E',
                  fontSize: 14,
                  flexWrap: 'wrap',
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}
                style={{
                  backgroundColor: '#EAE9EE',
                  borderRadius: 10,
                  height: 108,
                  width: '100%',
                }}
              />
            </List.Accordion>
          </List.Section>
          <List.Section>
            <List.Accordion
              titleNumberOfLines={0}
              title="Можно ли пройти регистрацию через другую карту"
              // right={props => <List.Icon icon={AccordingIcon} />}
              titleStyle={{ color: '#121F3E', fontSize: 16, fontWeight: '600' }}
              right={() => (
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={[
                    styles.img,
                    { transform: [{ rotate: expanded ? '-180deg' : '0deg' }] },
                  ]}
                />
              )}
              // expanded={expanded}
              // descriptionNumberOfLines={2}
              onPress={handlePress}
              style={{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#EAEFF3',
                padding: 5,
              }}>
              <List.Item
                title=""
                titleStyle={{
                  color: '#121F3E',
                  fontSize: 14,
                  flexWrap: 'wrap',
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}
                style={{
                  backgroundColor: '#EAE9EE',
                  borderRadius: 10,
                  height: 108,
                  width: '100%',
                }}
              />
            </List.Accordion>
          </List.Section>
          <List.Section>
            <List.Accordion
              titleNumberOfLines={0}
              title="Можно ли пройти повторную регистрацию, если ранее было отказано?"
              // right={props => <List.Icon icon={AccordingIcon} />}
              titleStyle={{
                color: '#121F3E',
                fontSize: 16,
                fontWeight: '600',
              }}
              right={() => (
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={[
                    styles.img,
                    { transform: [{ rotate: expanded ? '-180deg' : '0deg' }] },
                  ]}
                />
              )}
              // expanded={expanded}
              // descriptionNumberOfLines={2}
              onPress={handlePress}
              style={{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#EAEFF3',
                padding: 5,
              }}>
              <List.Item
                title=""
                titleStyle={{
                  color: '#121F3E',
                  fontSize: 14,
                  flexWrap: 'wrap',
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}
                style={{
                  backgroundColor: '#EAE9EE',
                  borderRadius: 10,
                  height: 108,
                  width: '100%',
                }}
              />
            </List.Accordion>
          </List.Section>
          <List.Section>
            <List.Accordion
              titleNumberOfLines={0}
              title="Какую карту нужно прявязать к сервису?"
              // right={props => <List.Icon icon={AccordingIcon} />}
              titleStyle={{
                color: '#121F3E',
                fontSize: 16,
                fontWeight: '600',
              }}
              right={() => (
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={[
                    styles.img,
                    { transform: [{ rotate: expanded ? '-180deg' : '0deg' }] },
                  ]}
                />
              )}
              // expanded={expanded}
              // descriptionNumberOfLines={2}
              onPress={handlePress}
              style={{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#EAEFF3',
                padding: 5,
              }}>
              <List.Item
                title=""
                titleStyle={{
                  color: '#121F3E',
                  fontSize: 14,
                  flexWrap: 'wrap',
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}
                style={{
                  backgroundColor: '#EAE9EE',
                  borderRadius: 10,
                  height: 108,
                  width: '100%',
                }}
              />
            </List.Accordion>
          </List.Section>
          <List.Section>
            <List.Accordion
              titleNumberOfLines={0}
              title="Что ТАКОЕ"
              titleStyle={{ color: '#121F3E', fontSize: 24, fontWeight: '600' }}
              right={() => (
                <Image
                  source={require('../../assets/images/Vector.png')}
                  style={[
                    styles.img,
                    { transform: [{ rotate: expanded ? '-180deg' : '0deg' }] },
                  ]}
                />
              )}
              onPress={handlePress}
              style={{
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderBottomColor: '#EAEFF3',
                // padding: 5,
                justifyContent: 'space-between',
              }}>
              <List.Item
                title=""
                titleStyle={{
                  color: '#121F3E',
                  fontSize: 14,
                  flexWrap: 'wrap',
                  fontWeight: '600',
                  paddingHorizontal: 10,
                }}
                style={{
                  backgroundColor: '#EAE9EE',
                  borderRadius: 10,
                  height: 88,
                  width: '100%',
                }}
              />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 51,
  },
  head: {},
  img: {
    height: 26,
    width: 26,
    marginLeft: 5,
  },
  bonus: {
    alignItems: 'center',
    // marginLeft: 70,
  },
  back: {
    borderWidth: 0.9,
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#EBF0FA',
  },
  back1: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headback: {
    justifyContent: 'center',
  },
  head2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 52,
  },
  text: {
    fontSize: 18,
    color: '#12154C',
    fontWeight: '700',
  },
  headtext: {
    marginTop: 36,
  },
  text2: {
    color: '#12154C',
    fontSize: 22,
    fontWeight: '600',
  },
  safearia: {
    flex: 1,
    marginTop: 30,
  },
  scroll: {
    backgroundColor: '#FFFFFF',
  },
});
