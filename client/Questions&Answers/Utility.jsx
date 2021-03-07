const sortQuestions = (response) => Object.values(response.data).sort((a, b) => b.question_helpfulness - a.question_helpfulness);

const sortAnswers = (data) => Object.values(data).sort((a, b) => b.helpfulness - a.helpfulness);

const filterQuestions = (list, query) => list.filter(question => question.question_body.toLowerCase().includes(query.toLowerCase()));

export default sortQuestions;
export { sortAnswers, filterQuestions };
