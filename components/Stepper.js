
import React from 'react';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Stepper = ({ randomStep }) => {
  const steps = ['Em produção', 'Na unidade Sotreq',
    'Saiu pra Entrega', 'Finalizado']
  return (
    <ProgressSteps
      activeStep={randomStep}
    >
      {steps.map((step, index) =>
        <ProgressStep
          key={index}
          label={step}
          nextBtnDisabled={true}
          previousBtnDisabled={true}
          removeBtnRow={true}
        />)}
    </ProgressSteps>
  );
}

export default Stepper;