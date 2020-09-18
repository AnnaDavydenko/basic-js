module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  var isDate = true;

  try {
    date = new Date(date);
    if (!date || date.getMonth || !date.getYear) {
      isDate = false;
    }
  } catch {
    isDate = false;
  }

  if (!isDate) {
    throw new Error('enter the correct argument');
  }

  const month = date.getMonth();

  let season = '';

  switch (month) {
    case 11:
    case 0:
    case 1:
      season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'autumn';
      break;
  }
  return season;
};