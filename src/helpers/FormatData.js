export const getFormatData = ({ data }) => {
  const id = data.id;
  const thumbnail = data.volumeInfo.imageLinks.thumbnail;
  const categories = data.volumeInfo.categories;
  const title = data.title;
  const searchInfo = data.volumeInfo.subtitle;
  const authors = data.volumeInfo.authors;
  console.log();
  return { id, thumbnail, categories, title, searchInfo, authors };
};

// const data = [
//   {
//     all,
//     art,
//     biography,
//     computers,
//     history,
//     medical,
//     poetry,
//   },
// ];
