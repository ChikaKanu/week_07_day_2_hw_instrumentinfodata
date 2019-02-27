const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.instrumentFamilyData = data;
};

  InstrumentFamilies.prototype.bindEvents = function () {
    PubSub.publish('InstrumentFamilies:instrument-family-data-ready', this.instrumentFamilyData);

    PubSub.subscribe('SelectView:change new', (evt) => {
      const selectedIndex = evt.detail;
      this.publishInstrumentDetail(selectedIndex);
    });
  };

  InstrumentFamilies.prototype.publishInstrumentDetail = function (instrumentIndex) {
      const selectedInstrument = this.instrumentFamilyData[instrumentIndex];
      PubSub.publish('InstrumentFamilies:selected-instrument-ready', selectedInstrument)
    };



module.exports = InstrumentFamilies;
