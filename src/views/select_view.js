const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
  };

  SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('InstrumentFamilies:instrument-family-data-ready', (evt) => {
      const allInstrumentFamily = evt.detail;
      this.populate(allInstrumentFamily);

    })

  this.element.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('SelectView:change new', selectedIndex);
  });

};


  SelectView.prototype.populate = function (instruments) {
  instruments.forEach((instrument, index) => {
    const option = document.createElement('option')
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option)

  })
}

module.exports = SelectView;
