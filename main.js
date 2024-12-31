import './style.css'
import $ from 'jquery'
import { initRwdImageMaps } from './src/rwdImageMaps'
import { createImageMap } from './src/components/ImageMap'
import { initializeResponsiveImageMap } from './src/utils/imageMapUtils'
import demoImage from './assets/human-body-map.jpg'

// Initialize the rwdImageMaps plugin
initRwdImageMaps($)

// Create the image map
createImageMap('app', demoImage)

// Initialize responsive behavior
$(document).ready(function() {
  initializeResponsiveImageMap();
});