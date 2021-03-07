const sortQuestions = (response) => Object.values(response.data).sort((a, b) => b.question_helpfulness - a.question_helpfulness);

const sortAnswers = (data) => Object.values(data).sort((a, b) => b.helpfulness - a.helpfulness);

const filterQuestions = (list, query) => list.filter(question => question.question_body.toLowerCase().includes(query.toLowerCase()));

const setValue = (currentValue, newValue) => newValue;
// (ele, value) => (value) => ele;// = (value) => value
const findPath = (type, id, option) => {
  let path;
  if (option === 'add') {
    if (type === 'questions') {
      path = `/qa/questions/${id}`
    } else {
      path = `/qa/questions/${id}/answers`;
    }
  } else {
    if (option === 'report') {
      path = `/qa/${type}/${id}/report`;
    } else {
      path = `/qa/${type}/${id}/helpful`
    }
    return path;
  }
  return path;
}

export default sortQuestions;
export { sortAnswers, filterQuestions, setValue, findPath };
