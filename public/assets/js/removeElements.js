export default function removeElement(headerTitle) {

  // Removes an element from the document
  var element = document.querySelector('.widgetWeather');
  element.parentNode.removeChild(element);
}