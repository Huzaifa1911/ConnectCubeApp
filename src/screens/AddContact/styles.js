import {StyleSheet} from 'react-native';
import {theme} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  inputStyle: {
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
  },
});
