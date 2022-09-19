

export const setLocalStorageData = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
}

export const checkLocalStorageData = (data) => {
  return JSON.parse(localStorage.getItem(data));
}
