const dateFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'utc'
 }
const getDate = (date) => new Date(date).toLocaleDateString('en-gb', dateFormat)

export default getDate;
