import $ from 'jquery';

export function initializeDetailImageMap() {
  $('img[usemap]').rwdImageMaps();
}