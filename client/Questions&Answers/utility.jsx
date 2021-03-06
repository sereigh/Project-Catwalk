const sortQuestions = (response) => Object.values(response.data).sort((a, b) => b.question_helpfulness - a.question_helpfulness);

const sortAnswers = (data) => Object.values(data).sort((a, b) => b.helpfulness - a.helpfulness);

export default sortQuestions;
export { sortAnswers };