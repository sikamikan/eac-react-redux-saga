//
// https://hackernoon.com/redux-saga-tutorial-for-beginners-and-dog-lovers-aa69a17db645
//
import * as Api from "../services/Api";

import { takeLatest, call, put } from "redux-saga/effects";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchTangoEventos() {
  //console.log("fetch");
  return Api.getPremise("TangoEventos");
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchTangoEventos);
    // console.log("response in saga: ", response);
    const tangoEventos = response;
    yield put({ type: "API_CALL_SUCCESS", tangoEventos });
  } catch (error) {
    console.log(error);
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
/*
iban
Optemis/Client/Quamadi/src/components/Patient/PatientCreate/index.js


  handleElegibility = () => {
    const { dispatch } = this.props;
    const { insuranceCompany, landCode, specialGroup } = this.state;
    const checkit = new Promise((resolve, reject) => {
      dispatch({
        type: 'patients/elegibility',
        payload: {
          insuranceCompany,
          landCode,
          specialGroup,
        },
      })
        .then(() => {
          const { elegibility } = this.props;
          resolve(elegibility);
        })
        .catch(error => {
          reject(error);
        });
    });
    return checkit;
  };

  checkEligibility = () => {    
    this.onElegibility()
      .then(elegibility => {
        if (elegibility && elegibility.Message && elegibility.Message.IsElegible) {
          this.next();
        } else {
          message.error(formatMessage({ id: 'error.notEligible' }));
        }
      })
      .catch(error => {
        const msg = `${formatMessage({ id: 'error.service' })} . ${error || ''}`;
        message.error(msg);
      });
  };

*/
