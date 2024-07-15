import React, { useRef, forwardRef, Ref, MutableRefObject } from 'react';

type RefCallback<T> = (instance: T | null) => void;

const setRef: <T>(
  ref: MutableRefObject<T | null> | undefined | null | RefCallback<T>,
  value: T | null
) => void = (ref, value) => {
  if (ref) {
    if (typeof ref === 'function') {
      ref(value);
    } else {
      ref.current = value;
    }
  }
};

const useForkRef = <Instance extends Element = Element>(
  refs: Array<Ref<Instance> | undefined>
): RefCallback<Instance> | null => {
  return React.useMemo(() => {
    if (refs.every((ref) => ref === null)) return null;
    return (instance) => refs.forEach((ref) => setRef(ref, instance));
  }, [refs]);
};

const FirstComponent = forwardRef<HTMLDivElement>((props, forwardedRef) => {
  const internalRef = useRef<HTMLDivElement | null>(null);
  const externalRef = forwardedRef as MutableRefObject<HTMLDivElement | null>;

  const combinedRef = useForkRef([internalRef, externalRef]);

  console.log('FirstComponent - internalRef:', internalRef.current);
  console.log('FirstComponent - externalRef:', externalRef.current);

  return <div ref={combinedRef}>First Component</div>;
});

const SecondComponent = forwardRef<HTMLDivElement>((props, forwardedRef) => {
  const internalRef = useRef<HTMLDivElement | null>(null);
  const externalRef = forwardedRef as MutableRefObject<HTMLDivElement | null>;

  const combinedRef = useForkRef([internalRef, externalRef]);

  console.log('SecondComponent - internalRef:', internalRef.current);
  console.log('SecondComponent - externalRef:', externalRef.current);

  return <div ref={combinedRef}>Second Component</div>;
});

const ParentComponent = () => {
  const externalRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <FirstComponent ref={externalRef} />
      <SecondComponent ref={externalRef} />
      <button onClick={() => console.log('externalRef:', externalRef.current)}>
        Log External Ref
      </button>
    </div>
  );
};

export default ParentComponent;
