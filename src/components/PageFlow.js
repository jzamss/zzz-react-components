import React, { useState } from "react";

const PageFlow = ({
  initialEntity = {},
  children,
  location,
  history,
  pages,
  name,
  ...rest
}) => {
  const [step, setStep] = useState(0);

  const onComplete = () => {
    history.goBack();
  };

  const onCancel = () => {
    history.goBack();
  };

  const moveNextStep = () => {
    setStep((cs) => (cs + 1 == pages.length ? cs : cs + 1));
  };

  const movePrevStep = () => {
    setStep((cs) => (cs > 0 ? cs - 1 : 0));
  };

  const getActivePage = () => {
    return pages[step];
  };

  const activePage = getActivePage();
  const PageComponent = activePage.Component;
  const compProps = {
    moveNextStep,
    movePrevStep,
    onComplete,
    onCancel,
    page: activePage,
    ...rest
  };

  return <PageComponent page={activePage} {...compProps} />;
};

export default PageFlow;
