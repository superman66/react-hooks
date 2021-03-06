import { useEffect } from 'react';

export default function useDidMount(callback) {
  useEffect(() => {
    callback && callback();
  }, []);
}
