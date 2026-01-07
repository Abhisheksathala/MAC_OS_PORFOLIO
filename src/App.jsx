import React from 'react';
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
//# imports
import { NavBar, Wellcome, Dock ,Home} from '#components';
import { TerminalWindow, SafariWindow ,ResumeWindow,Finderwindow ,TextWindow,ImageWindow,ContactWindow,GalleryWindow} from '#windows';

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
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
      <Home />
      <GalleryWindow />
    </div>
  );
};

export default App;
