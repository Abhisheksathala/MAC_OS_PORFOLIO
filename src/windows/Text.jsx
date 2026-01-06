import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import WindowControls from '#components/WindowControlls';
import { Search } from 'lucide-react';
import { locations } from '#constants';

import useLocationStore from '#store/location';
import clsx from 'clsx';
import useWindowStore from '#store/window';

const Text = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="text" />
        <h2>Resume.pdf</h2>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'text');
export default TextWindow;
