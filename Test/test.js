var globalData;

var fetchDataFromBackend = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=15';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    globalData = await response.json();
    console.log('Объекты успешно получены и сохранены:', globalData);
  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
  }
}


var filterAndSortByTitle = async () => {
  return globalData.sort((a, b) => a.title > b.title ? 1 : -1);
};

var addNewField = async () => {
  return globalData.forEach((obj, index) => {
    obj.age = index + 1;
  });
};

var deleteLastElement = async () => {
  return globalData.pop();
};

var addNewObj = async () => {
  return globalData.unshift({
    name: 'Roma',
    age: 21,
    country: 'Russia'
  })
};


var changeField = async () => {
  return globalData[5].body = 'Измененное поле';
};

var main = async () => {
  await fetchDataFromBackend();
  filterAndSortByTitle();
  addNewField();
  deleteLastElement();
  addNewObj();
  changeField();
};

main();