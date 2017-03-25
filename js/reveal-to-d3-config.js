/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'title-slide': {
    'init': function() {
      pt.titleSlide.init();
    }
  },
  'biggest-cities': {
    'init': function() {
      pt.biggestCities.init();
    },
    '-1': function() {
      pt.biggestCities.flyOut();
    },
    0: function() {
      pt.biggestCities.placeCities();
    },
    1: function() {
      pt.biggestCities.highlightCities();
    },
    2: function() {
      pt.biggestCities.clusterCountry();
    }
  }
};   

function removeSVGs() {

  //Remove (heavy) all existing svgs currently running
  
  d3.select('#biggest-cities #biggestCities svg').remove();
  
}
