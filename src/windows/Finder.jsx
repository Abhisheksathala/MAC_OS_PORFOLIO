import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import WindowControls from '#components/WindowControlls';
import { Search } from 'lucide-react';
import { locations } from '#constants';

import useLocationStore from '#store/location';
import clsx from 'clsx';
import useWindowStore from '#store/window';

const RenderList = ({ items, activeLocation, onSelect }) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onSelect(item)}
          className={clsx(
            item.id === activeLocation?.id
              ? 'active'
              : 'not-active flex items-center gap-2 cursor-pointer',
          )}
        >
          <img src={item.icon} className="w-4" alt={item.name} />
          <p className="text-sm font-medium truncate">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

const Finder = () => {
  const { openWindow } = useWindowStore();

  const { activeLocation, setActiveLocation, resetActiveLocation } = useLocationStore();

  // console.log(Object.values(locations))

  const openItem = (item) => {
    if (item.fileType === 'pdf') return openWindow('resume');
    if (item.kind === 'folder') return setActiveLocation(item);
    if (['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, 'blank');

    openWindow(`${item.fileType}${item.kind}`,item)

  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <div className="flex items-center gap-2">
          <Search className="icon" />
          <span>Finder</span>
        </div>
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>
              <RenderList
                items={Object.values(locations)}
                activeLocation={activeLocation}
                onSelect={setActiveLocation}
              />
            </ul>
          </div>
          <div>
            <h3>work</h3>
            <RenderList
              items={locations.work.children}
              activeLocation={activeLocation}
              onSelect={setActiveLocation}
            />
          </div>
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <>
              <li
                key={item.id}
                className={item.position}
                onClick={() => {
                  openItem(item);
                }}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, 'finder');
export default FinderWindow;
