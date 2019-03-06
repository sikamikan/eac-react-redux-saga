/*
iban
Optemis/Client/Quamadi/src/components/Patient/PatientCreate/index.js

////////////////////////////
probar esto sin usar sagas
////////////////////////////
*/
handleElegibility = () => {
  const { dispatch } = this.props;
  const { insuranceCompany, landCode, specialGroup } = this.state;
  const checkit = new Promise((resolve, reject) => {
    dispatch({
      type: "patients/elegibility",
      payload: {
        insuranceCompany,
        landCode,
        specialGroup
      }
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
      if (
        elegibility &&
        elegibility.Message &&
        elegibility.Message.IsElegible
      ) {
        this.next();
      } else {
        message.error(formatMessage({ id: "error.notEligible" }));
      }
    })
    .catch(error => {
      const msg = `${formatMessage({ id: "error.service" })} . ${error || ""}`;
      message.error(msg);
    });
};
/*
 */
