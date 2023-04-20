import React from 'react';

const monitors = [
  {
    id: 1,
    title: 'Monitor 1',
    image: 'https://preview.redd.it/b446mvr8zbe61.jpg?auto=webp&s=a0b3dea82cc173b237d9674d72f7403e2bad48d3',
    },
  {
    id: 2,
    title: 'Monitor 2',
    image: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/30_7f7126ae-d5bb-4c3a-a732-4425aa4742d7.jpg?v=1650543543',
    },
  {
    id: 3,
    title: 'Monitor 3',
    image: 'https://www.minimaldesksetups.com/wp-content/uploads/2021/01/2-3-1024x683.jpg',
    },
  {
    id: 4,
    title: 'Monitor 4',
    image: 'https://www.makerstations.io/content/images/size/w1384/2023/02/adam-peters-desk-setup-overview-thumbnail.jpg',
    },
  {
    id: 5,
    title: 'Monitor 5',
    image: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/5_9932ef8c-9a4d-4451-9e17-8f6347c7d560.jpg?v=1650543542',
    },
  {
    id: 6,
    title: 'Monitor 6',
    image: 'https://www.yankodesign.com/images/design_news/2020/06/all-black-desk-setups-that-will-inspire-you-to-adapt-this-modern-minimal-trend/01-Black-Desk-Setup_-minimal_modern.jpg',
    },
];

const MonitorGrid = () => {
    return (
      <div className="container mx-auto px-10">
        <h3 className='font-signature mb-5 font-medium text-center text-4xl leading-relaxed tracking-wider'>FEATURED DESK SETUPS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-7">
          {monitors.map((monitor) => (
            <div key={monitor.id} className="rounded-lg shadow-sm overflow-hidden">
              <img src={monitor.image} alt={monitor.title} className=" sm:max-w-full md:max-w-full max-w-full w-full max-h-96 h-full opacity-100 hover:opacity-90 hover:scale-110 duration-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default MonitorGrid;