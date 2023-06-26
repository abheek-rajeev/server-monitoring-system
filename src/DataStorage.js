let storedData = {}; // Initialize an empty object to store the data

export function storeData(data) {
  storedData = { ...data }; // Assign the retrieved data to the storedData object
}

export function getData() {
  return storedData;
}