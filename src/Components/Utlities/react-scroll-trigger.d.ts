// react-scroll-trigger.d.ts
declare module "react-scroll-trigger" {
  import * as React from "react";

  interface ScrollTriggerProps {
    onEnter?: () => void;
    onExit?: () => void;
    children?: React.ReactNode;
  }

  export default class ScrollTrigger extends React.Component<ScrollTriggerProps> {}
}
