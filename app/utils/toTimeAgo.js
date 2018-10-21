const formatTimeAgo = (number, unit) => {
  const plural = number <= 1 ? '' : 's';
  return `${number} ${unit}${plural} ago`;
};

export default function (timestamp) {
  let pastTime = Math.floor((new Date().getTime() - (timestamp * 1000)) / 1000);

  if (pastTime < 60) {
    return formatTimeAgo(pastTime, 'second');
  }

  pastTime = Math.floor(pastTime / 60);
  if (pastTime < 60) {
    return formatTimeAgo(pastTime, 'minute');
  }

  pastTime = Math.floor(pastTime / 60);
  if (pastTime < 24) {
    return formatTimeAgo(pastTime, 'hour');
  }

  pastTime = Math.floor(pastTime / 24);
  return formatTimeAgo(pastTime, 'day');
}
