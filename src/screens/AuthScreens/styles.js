import {StyleSheet} from 'react-native';

import {theme} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.heading,
  },
  headingContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 0.9,
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginTop: 50,
  },
  textButton: {
    marginTop: 15,
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
