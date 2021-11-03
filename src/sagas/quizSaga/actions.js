import actionTypes from '../../constants/actionTypes';

export const setIsShowResults = payload => ({ type: actionTypes.SET_IS_SHOW_RESULTS, payload });
export const clearQuestionsStore = payload => ({ type: actionTypes.CLEAR_QUESTIONS_STORE, payload });
export const clearUserResultsStore = payload => ({ type: actionTypes.CLEAR_USER_RESULTS_STORE, payload });
export const clearAnswersListStore = payload => ({ type: actionTypes.CLEAR_ANSWERS_LIST_STORE, payload });
export const setDataToLocalStorage = payload => ({ type: actionTypes.SET_DATA_TO_LOCAL_STORAGE, payload });
export const setIsShowResultsStore = payload => ({ type: actionTypes.SET_IS_SHOW_RESULTS_STORE, payload });
export const setQuestionsListStore = payload => ({ type: actionTypes.SET_QUESTIONS_LIST_STORE, payload });
export const setQuestionsDocIdStore = payload => ({ type: actionTypes.SET_QUESTIONS_DOC_ID_STORE, payload });
export const setCurrentQuestionStore = payload => ({ type: actionTypes.SET_CURRENT_QUESTION_STORE, payload });
export const clearCurrentQuestionStore = payload => ({ type: actionTypes.CLEAR_CURRENT_QUESTION_STORE, payload });
export const setCorrectAnswerDocIdStore = payload => ({ type: actionTypes.SET_CORRECT_ANSWER_DOC_ID_STORE, payload });
export const removeItemFromLocalStorage = payload => ({ type: actionTypes.REMOVE_ITEM_FROM_LOCAL_STORAGE, payload });
export const getQuizDataFromLocalStorage = payload => ({ type: actionTypes.GET_QUIZ_DATA_FROM_LOCAL_STORAGE, payload });
export const setUserResultsResponseStore = payload => ({ type: actionTypes.SET_USER_RESULTS_RESPONSE_STORE, payload });
export const clearCorrectAnswerCountStore = payload => ({ type: actionTypes.CLEAR_CORRECT_ANSWERS_COUNT_STORE, payload });
export const setCurrentUserReadinessStore = payload => ({ type: actionTypes.SET_CURRENT_USER_READINESS_STORE, payload });
export const clearCurrentUserReadinessStore = payload => ({ type: actionTypes.CLEAR_CURRENT_USER_READINESS_STORE, payload });
export const getItemFromLocalStorageToStore = payload => ({ type: actionTypes.GET_ITEM_FROM_LOCAL_STORAGE_TO_STORE, payload });
export const setIsUserReadyToStartQuizStore = payload => ({ type: actionTypes.SET_IS_USER_READY_TO_START_QUIZ_STORE, payload });
