/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'title-slide': {
    'init': function() {
      pt.titleSlide.init();
    }
  },
  'gooey-golf': {
    'init': function() {
      pt.gooeyGolf.init();
    },
    '-1': function() {
      pt.gooeyGolf.swingSimple1();
    },
    '0': function() {
      pt.gooeyGolf.swingSimple2();
    },
    1: function() {
      pt.gooeyGolf.swingSimple3();
    }
  }
};   

function removeSVGs() {

  //Remove (heavy) all existing svgs currently running
  
  d3.select('#gooey-golf #gooeyGolf svg').remove();
  
}
