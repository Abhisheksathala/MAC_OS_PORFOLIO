import React from 'react';
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
//# imports
import { NavBar, Wellcome, Dock } from '#components';
import { TerminalWindow, SafariWindow ,ResumeWindow,Finderwindow} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {


  return (
    <div>
      <NavBar />
      <Wellcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <Finderwindow />
    </div>
  );
};

export default App;
