const useLocalStorage = (key) => {
  const setItem = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem = () => {
    const result = JSON.parse(window.localStorage.getItem(key));
    return result ? result : [];
  };

  return { setItem, getItem };
};

export default useLocalStorage;
