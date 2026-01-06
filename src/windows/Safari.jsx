import React from 'react';
import { WindowControlls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import {
  PanelLeft,
  ChevronLeft,
  ChevronRight,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
} from 'lucide-react';
import { blogPosts } from '#constants';
import { MoveRight } from 'lucide-react';

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target={'safari'} />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input type="text" placeholder="search or enter websit name" className="flex-1 " />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog">
        <h2>My Developer Blog</h2>
        {
          blogPosts.map(({id,image,title,date,link})=>(
            <>
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{date}</p>
                <p>{title}</p>
                <a href={link} target='blank' rel="noopner noreferrer">
                  check out the full post <MoveRight className='icon-hover'/>
                </a>
              </div>
            </div>
            </>
          ))
        }
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
