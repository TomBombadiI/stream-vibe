const getIdFromTitle = (title: string) => {
  return title
    .toLowerCase()
    .replaceAll(' ', '-');
}

export default getIdFromTitle;
