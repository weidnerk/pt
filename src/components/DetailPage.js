import { createCloseButton } from './CloseButton';
import { createDetailImageMap } from './DetailImageMap';
import { initializeDetailImageMap } from '../utils/detailImageMapUtils';
import '../styles/DetailPage.css';

export function createDetailPage(title, content, imageSrc) {
  const detailElement = document.createElement('div');
  detailElement.className = 'detail-page';
  
  const detailContent = document.createElement('div');
  detailContent.className = 'detail-content';
  
  const closeButton = createCloseButton(() => {
    document.body.removeChild(detailElement);
  });
  
  detailContent.innerHTML = `<h2>${title}</h2>`;
  
  if (imageSrc) {
    const imageMap = createDetailImageMap(imageSrc, title);
    detailContent.appendChild(imageMap);
    // Initialize responsive behavior after adding the image map
    setTimeout(() => initializeDetailImageMap(), 0);
  }
  
  const textDiv = document.createElement('div');
  textDiv.className = 'detail-text';
  textDiv.textContent = content;
  detailContent.appendChild(textDiv);
  
  detailContent.insertBefore(closeButton, detailContent.firstChild);
  detailElement.appendChild(detailContent);

  return detailElement;
}