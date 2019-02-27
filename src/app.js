const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const DisplayView = require('./views/display_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectInstrument = document.querySelector('select#instrument-families')
  const instrumentDropDown = new SelectView(selectInstrument);
  instrumentDropDown.bindEvents();


  const displayView = document.querySelector('.display_data');
  const displayViewModel = new DisplayView(displayView);
  displayViewModel.bindEvents();


  const instrumentFamily = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamily.bindEvents();

});
