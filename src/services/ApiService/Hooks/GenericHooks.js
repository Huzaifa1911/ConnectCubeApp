import {useMutation, useQuery} from 'react-query';
import {propOr} from 'ramda';
import {useEffect} from 'react';

import {ACTION_TYPES, useAppContext} from '../../../context';
import {showAlert} from '../../../utils';

/**
 *
 * @param {Array<string>} queryKey
 * @param {AxiosRequestPromise} queryFn
 * @param {*Function} onSuccess
 * @param {*Function} onError
 * @param {*Function} onSettled
 * @param {*Function} select
 * @returns {data,isLoading,error,isError,isSuccess,status} | useQuery Instance from react-query
 */

export const useAppQuery = ({queryKey, queryFn, onSuccess = data => {}, onError, onSettled = (data, error) => {}, select = data => data, options = {}}) => {
  const {dispatch} = useAppContext();

  const {isLoading, ...query} = useQuery(queryKey, queryFn, {
    ...options,
    onSuccess: data => onSuccess(data),
    onError: (error, variables) => {
      if (onError) {
        onError(error, variables);
      } else {
        const message = propOr('', 'info', error);
        showAlert(message);
      }
    },
    onSettled: (data, error) => {
      dispatch({type: ACTION_TYPES.STOP_LOADING});
      onSettled(data, error);
    },
    select: select,
  });

  useEffect(() => {
    if (isLoading) {
      dispatch({type: ACTION_TYPES.START_LOADING});
    }
  }, [isLoading]);

  return {isLoading, ...query};
};

/**
 *
 * @param {AxiosRequestPromise} queryFn,
 * @param {*Function} onSuccess,
 * @param {*Function} onError,
 * @param {*Function} onMutate,
 * @param {*Function} onSettled,
 * @param {*Boolean} showLoading,
 * @returns { data,error,isError,isLoading,isSuccess,mutate,status } | useMutation Instance from react-query
 */

export const useAppMutation = ({queryFn, onSuccess = (data, variables) => {}, onError, onMutate = variables => {}, onSettled = (data, variables) => {}, showLoading = false, options = {}}) => {
  const {dispatch} = useAppContext();

  return useMutation(queryFn, {
    ...options,
    onSuccess: (data, variables) => onSuccess(data, variables),
    onMutate: variables => {
      if (showLoading) {
        dispatch({type: ACTION_TYPES.START_LOADING});
      }
      onMutate(variables);
    },
    onError: (error, variables) => {
      if (onError) {
        onError(error, variables);
      } else {
        const message = propOr('', 'info', error);
        showAlert(message);
      }
    },
    onSettled: (data, variables) => {
      if (showLoading) {
        dispatch({type: ACTION_TYPES.STOP_LOADING});
      }
      onSettled(data, variables);
    },
  });
};
