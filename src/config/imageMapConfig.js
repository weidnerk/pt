
// drawn in ImageMap.js

export const imageMapConfig = {
  name: 'powerpuffgirls',
  title: 'Responsive Image Maps jQuery Plugin',
  description: 'Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize.',
  dimensions: {
    width: 1024,
    height: 768
  },
  areas: [
    {
      shape: 'rect',
      coords: '150,0,300,75',
      //href: 'https://en.wikipedia.org/wiki/Human_head',
      title: 'Head',
      alt: 'Head'
    },
    {
      shape: 'rect',
      coords: '150,450,250,500',
      //href: 'https://en.wikipedia.org/wiki/Thigh',
      title: 'Thigh',
      alt: 'Thigh'
    },
    {
      shape: 'rect',
      coords: '150,675,250,725',
      //href: 'https://en.wikipedia.org/wiki/Foot',
      title: 'Foot',
      alt: 'Foot'
    }
  ]
};