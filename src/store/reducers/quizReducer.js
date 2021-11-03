import actionTypes from '../../constants/actionTypes';

const initialState = {
    answersList: [],
    isShowResults: false,
    questionsList: [],
    currentQuestion: [],
    usersResultsList: [],
    correctAnswersCount: 0,
    currentUserReadiness: [],
    isUserReadyToStartQuiz: false,
    correctAnswersCountDocId: '',
};

export default function quizReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.SET_ANSWERS_LIST_STORE:
            return {
                ...state,
                answersList: [...state.answersList, payload],
            };
        case actionTypes.CLEAR_ANSWERS_LIST_STORE:
            return {
                ...state,
                answersList: [],
            };
        case actionTypes.CLEAR_USER_RESULTS_STORE:
            return {
                ...state,
                usersResultsList: [],
            };
        case actionTypes.SET_QUESTIONS_LIST_STORE:
            return {
                ...state,
                questionsList: [ ...payload ],
            };
        case actionTypes.SET_IS_SHOW_RESULTS_STORE:
            return {
                ...state,
                isShowResults: payload,
            };
        case actionTypes.SET_CURRENT_QUESTION_STORE:
            return {
                ...state,
                currentQuestion: [ payload ],
            };
        case actionTypes.SET_USER_RESULTS_RESPONSE_STORE:
            return {
                ...state,
                usersResultsList: [...state.usersResultsList, ...payload],
            };
        case actionTypes.SET_CORRECT_ANSWER_DOC_ID_STORE:
            return {
                ...state,
                correctAnswersCountDocId: payload,
            };
        case actionTypes.SET_CORRECT_ANSWERS_COUNT_STORE:
            return {
                ...state,
                correctAnswersCount: state.correctAnswersCount + 1,
            };
        case actionTypes.SET_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [ payload ],
            };
        case actionTypes.CLEAR_CORRECT_ANSWERS_COUNT_STORE:
            return {
                ...state,
                correctAnswersCount: 0,
            };
        case actionTypes.CLEAR_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [],
            };
        case actionTypes.SET_IS_USER_READY_TO_START_QUIZ_STORE:
            return {
                ...state,
                isUserReadyToStartQuiz: payload,
            };
        default:
            return state;
    }
};
