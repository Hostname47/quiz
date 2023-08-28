import {useEffect} from 'react';
import {bootstrapAppState} from '../app/init';
import {useAppDispatch} from '../app/hooks';

const BootstrapState = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bootstrapAppState());
  }, []);

  return null;
};

export default BootstrapState;
