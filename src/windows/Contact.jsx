import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import WindowControls from '#components/WindowControlls';
import { Search } from 'lucide-react';
import useWindowStore from '#store/window';
import { socials } from '#constants';

const Contact = () => {
  const { windows } = useWindowStore();

  const data = windows?.imgfile?.data || {};

  if (!data) return null;


  return (
    <>
      <div id="window-header">
        <WindowControls target={'contact'} />
        <h2>contact me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img src={'/images/adrian.jpg'} alt="abhishek" className="w-20 rounded-full" />
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in..</p>
        <p>abhisheksathala296@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;
