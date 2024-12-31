import $ from 'jquery';

export function initializeResponsiveImageMap() {
  $('img[usemap]').rwdImageMaps();
}