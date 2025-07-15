const storage = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string, defaultValue?: T): T | undefined => {
    // defaultValue는 굳이 없어도 됨
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default storage;
