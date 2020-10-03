const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if( sampleActivity !=="string" || sampleActivity === undefined || Number(sampleActivity)!=="number" || sampleActivity=== NaN){
    return false;
  } else {
    return Math.ceil(Math.log((MODERN_ACTIVITY/Number(sampleActivity)))/(Math.log(2)/HALF_LIFE_PERIOD));
  }
};

