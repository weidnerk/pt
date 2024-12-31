import $ from 'jquery';
import { imageMapConfig } from '../config/imageMapConfig';
import { createDetailPage } from './DetailPage';
import footImage from '/assets/foot.jpg';

const detailImages = {
  'Foot': footImage
};

export function createImageMap(containerId, imageSrc) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { name, title, description, dimensions, areas } = imageMapConfig;

  container.innerHTML = `
    <div class="container">
      <h1>${title}</h1>
      <p>${description}</p>
      <img src="${imageSrc}" 
           width="${dimensions.width}" 
           height="${dimensions.height}" 
           usemap="#${name}" 
           alt="Interactive Map" />
      <map name="${name}">
        ${areas.map(area => `
          <area shape="${area.shape}"
                coords="${area.coords}"
                href="#"
                data-title="${area.title}"
                alt="${area.alt}"
          />`).join('')}
      </map>
    </div>
  `;

  // Initialize click handlers
  $('area').on('click', function(e) {
    e.preventDefault();
    const title = $(this).data('title');
    
    // Create and show detail page with the order text
    const detailPage = createDetailPage(
      title,
      'Click on the highlighted areas in the image to generate order PDFs',
      detailImages[title]
    );
    document.body.appendChild(detailPage);
  });
}