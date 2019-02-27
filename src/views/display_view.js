const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function (container) {
  this.container = container;
};


DisplayView.prototype.bindEvents = function (evt) {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (evt) => {
  const instrument = evt.detail;
  console.log(instrument);
  this.render(instrument);
});
};

DisplayView.prototype.render = function(instrument){
  this.container.innerHTML = '';

  const heading = this.createHeading(instrument);
  const infoParagraph = this.createParagraph(instrument);
  const infoList = this.createInfoList(instrument);

    this.container.appendChild(heading);
    this.container.appendChild(infoParagraph);
    this.container.appendChild(infoList);
  };

  DisplayView.prototype.createHeading = function(instrument) {
    const heading = document.createElement('h2');
    heading.textContent = instrument.name;
    return heading;
  };

  DisplayView.prototype.createParagraph = function(instrument) {
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = instrument.description;
    return infoParagraph;
  };


  DisplayView.prototype.createInfoList = function(instrument) {
    const infoList = document.createElement('ul');
    infoList.textContent = `Instruments include: ${instrument.instruments}`;
    return infoList
  };

module.exports = DisplayView;
