import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import WindowControls from '#components/WindowControlls';
import { Search } from 'lucide-react';
import useWindowStore from '#store/window';

const Text = () => {
  const { windows } = useWindowStore();

  const data = windows?.txtfile?.data || {};

  const { name = 'Resume.pdf', image = null, subtitle = '', description = [] } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 space-y-6 bg-white">
        {image && (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </div>
        )}

        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

        {Array.isArray(description) ? (
          <div className="space-y-3">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        ) : description ? (
          <p className="text-gray-700">{description}</p>
        ) : (
          <p className="text-gray-500">No description available</p>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
