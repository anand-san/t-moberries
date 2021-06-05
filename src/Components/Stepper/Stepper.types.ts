import React from "react";

export interface ComponentProps {
    stepsData: StepsData,
    stepsLabel: string[],
    footerLeft?: JSX.Element
  }

export interface StepsData {
  [key:string] : {
    icon: React.ReactElement,
    component: React.ReactElement,
    callback?: Function
  }
}