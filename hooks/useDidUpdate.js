import { useState, useEffect } from 'react';
import useDidMount from './useDidMount';

export default function useDidUpdate(callback, conditions = []) {
  const [mounted, setMounted] = useState(false);
  if (!Array.isArray(conditions) && typeof conditions !== 'undefined') {
    conditions = [conditions];
  } else if (Array.isArray(conditions) && conditions.length === 0) {
    console.warn('didUpdate require not [ ] deps');
  }
  useDidMount(() => {
    setMounted(true);
  });

  useEffect(() => {
    if (mounted) {
      callback && callback();
    }
  }, [conditions]);
}
