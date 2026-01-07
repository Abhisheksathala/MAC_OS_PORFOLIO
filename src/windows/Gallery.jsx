import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import WindowControls from '#components/WindowControlls';
import { Search, Images, Heart, MapPin, Users, FolderHeart, Clock, Star } from 'lucide-react';
import useWindowStore from '#store/window';
import { gallery, photosLinks } from '#constants';
import clsx from 'clsx';

const Gallery = () => {
  const { openWindow } = useWindowStore();

  const getIcon = (iconPath) => {
    const iconMap = {
      "/icons/gicon1.svg": <FolderHeart className="w-4 h-4" />,
      "/icons/gicon2.svg": <Clock className="w-4 h-4" />,
      "/icons/gicon3.svg": <MapPin className="w-4 h-4" />,
      "/icons/gicon4.svg": <Users className="w-4 h-4" />,
      "/icons/gicon5.svg": <Heart className="w-4 h-4" />,
      "/icons/file.svg": <Images className="w-4 h-4" />,
    };
    const filename = iconPath.split('/').pop();
    switch(filename) {
      case 'gicon1.svg': return <FolderHeart className="w-4 h-4" />;
      case 'gicon2.svg': return <Clock className="w-4 h-4" />;
      case 'gicon3.svg': return <MapPin className="w-4 h-4" />;
      case 'gicon4.svg': return <Users className="w-4 h-4" />;
      case 'gicon5.svg': return <Star className="w-4 h-4" />;
      case 'file.svg': return <Images className="w-4 h-4" />;
      default: return <Images className="w-4 h-4" />;
    }
  };
  const handleOpenImage = (image) => {
    console.log('Opening image:', image);
    openWindow('imgfile', image);
  };
  const handleOpenAlbum = (album) => {
    console.log('Opening album:', album.title);

  };
  const allPhotos = [
    ...gallery.map(img => ({ ...img, album: "Gallery", date: "Recent" })),
    { id: 5, img: "/images/project-1.png", album: "Projects", date: "2024" },
    { id: 6, img: "/images/project-2.png", album: "Projects", date: "2024" },
    { id: 7, img: "/images/project-3.png", album: "Projects", date: "2023" },
    { id: 8, img: "/images/adrian.jpg", album: "About", date: "Personal" },
    { id: 9, img: "/images/adrian-2.jpg", album: "About", date: "Personal" },
    { id: 10, img: "/images/adrian-3.jpeg", album: "About", date: "Personal" },
  ];

  return (
    <>
      <div id="window-header" className="window-header">
        <WindowControls target="photos" />
        <div className="flex items-center gap-2">
          <Images className="icon" />
          <span>Gallery</span>
        </div>
      </div>

      <div className="bg-white flex h-full finder-container">
        <div className="sidebar w-48 border-r border-gray-200 p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
              Albums
            </h3>
            <ul className="space-y-1">
              {photosLinks.map((album) => (
                <li
                  key={album.id}
                  className={clsx(
                    "flex items-center gap-3 p-2 rounded-lg cursor-pointer",
                    "hover:bg-gray-100 transition-colors"
                  )}
                  onClick={() => handleOpenAlbum(album)}
                >
                  <div className="flex-shrink-0">
                    {getIcon(album.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{album.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
              Recent
            </h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="bg-blue-100 p-2 rounded">
                  <Images className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm font-medium">Last Import</p>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="bg-green-100 p-2 rounded">
                  <Search className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm font-medium">Screenshots</p>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="bg-purple-100 p-2 rounded">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-sm font-medium">Recently Deleted</p>
              </li>
            </ul>
          </div>

          {/* Stats Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="px-2">
              <p className="text-xs text-gray-500 mb-1">Storage</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">312 GB of 512 GB used</p>
            </div>
          </div>
        </div>

        {/* Main Content Area - Right Panel */}
        <div className="content flex-1 p-6 overflow-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Photos</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Photos</option>
                  <option>Favorites</option>
                  <option>Recently Added</option>
                  <option>By Album</option>
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-500">4,562 items • 312 GB • Last import: Today, 2:30 PM</p>
          </div>

          {/* Grid View */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Gallery</h3>
              <p className="text-sm text-gray-500">8 items</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
               {allPhotos.map((photo, idx) => (
                      <div key={photo.id} onClick={() => handleOpenImage(photo)} className="aspect-square rounded-md overflow-hidden bg-gray-200">
                        <img
                          src={photo.img}
                          alt={`Preview ${idx}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">By Album</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photosLinks.slice(0, 3).map((album) => (
                <div
                  key={album.id}
                  className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleOpenAlbum(album)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getIcon(album.icon)}
                    </div>
                    <div>
                      <h4 className="font-medium">{album.title}</h4>
                      <p className="text-sm text-gray-500">456 photos • Updated today</p>
                    </div>
                  </div>


                  <div className="grid grid-cols-3 gap-2">
     {allPhotos.slice(0, 3).map((photo, idx) => (
                      <div key={idx} className="aspect-square rounded-md overflow-hidden bg-gray-200">
                        <img
                          src={photo.img}
                          alt={`Preview ${idx}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const GalleryWindow = WindowWrapper(Gallery, 'photos');
export default GalleryWindow;


//  {allPhotos.map((photo) => (
//                 <div
//                   key={photo.id}
//                   className="group relative border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                   onClick={() => handleOpenImage(photo)}
//                 >
//                   {/* Image Container */}
//                   <div className="aspect-square bg-gray-100 relative overflow-hidden">
//                     <img
//                       src={photo.img}
//                       alt={`Gallery ${photo.id}`}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />


//                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>


//                     <button
//                       className="absolute top-2 right-2 p-1.5 bg-white bg-opacity-80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-100"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         console.log('Added to favorites:', photo.id);
//                       }}
//                     >
//                       <Heart className="w-4 h-4 text-gray-600" />
//                     </button>
//                   </div>


//                   <div className="p-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-medium text-gray-900">IMG_{String(photo.id).padStart(4, '0')}</span>
//                       <span className="text-xs text-gray-500">{photo.date}</span>
//                     </div>
//                     <p className="text-xs text-gray-400 mt-1 truncate">{photo.album}</p>
//                   </div>
//                 </div>
//               ))}
