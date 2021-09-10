const filterStatus = (obj, n) => {
  const array = [];
  for (const key in obj) {
    if (obj[key].course_status === n) array.push(obj[key]);
  }
  return array;
};

export default filterStatus;
