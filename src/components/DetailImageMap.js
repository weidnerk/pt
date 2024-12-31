import { detailMapConfig } from '../config/detailImageMapConfig';
import { generateOrderPDF } from '../utils/pdfUtils';

export function createDetailImageMap(imageSrc, title) {
  const container = document.createElement('div');
  container.className = 'detail-image-container';
  
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = title;
  img.className = 'detail-image';
  img.setAttribute('usemap', `#${detailMapConfig.name}`);
  
  const map = document.createElement('map');
  map.name = detailMapConfig.name;
  
  detailMapConfig.areas.forEach(area => {
    const areaElement = document.createElement('area');
    areaElement.shape = area.shape;
    areaElement.coords = area.coords;
    areaElement.href = '#';
    areaElement.alt = area.alt;
    areaElement.addEventListener('click', (e) => {
      e.preventDefault();
      if (area.order) {
        generateOrderPDF(area.title, area.order);
      }
    });
    map.appendChild(areaElement);
  });
  
  container.appendChild(img);
  container.appendChild(map);
  
  return container;
}