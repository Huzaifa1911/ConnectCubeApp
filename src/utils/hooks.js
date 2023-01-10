import {useCallback, useMemo, useState} from 'react';

const getErrorDefaultState = defaultValues => {
  const errors = {};
  Object.keys(defaultValues).forEach(key => {
    errors[key] = false;
  });
  return errors;
};

export const useForm = ({defaultValues}) => {
  const defaultState = useMemo(() => defaultValues, []);

  const [state, setState] = useState(defaultState);
  const [errors, setErrors] = useState(getErrorDefaultState(defaultValues));

  const getValues = useCallback(key => (key ? state[key] : state), [state]);

  const isValid = useMemo(() => {
    const hasError = Object.keys(errors).some(key => errors[key] === true);
    const isAnyFieldEmpty = Object.keys(state).some(key => state[key] === '');
    return !(hasError || isAnyFieldEmpty);
  }, [errors, state]);

  const setValue = useCallback((key, value) => {
    if (key) {
      setState(prev => ({...prev, [key]: value}));
      if (value !== '') {
        setErrors(prev => ({...prev, [key]: false}));
      } else {
        setErrors(prev => ({...prev, [key]: true}));
      }
    }
  }, []);

  return {getValues, setValue, errors, isValid};
};
