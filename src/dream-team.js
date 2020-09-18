module.exports = function createDreamTeam(members) {
  members = (Array.isArray(members) ? members : []).filter(name => typeof (name) === "string");
  const nameOfDreamTeam = members.map(name => name.trim()[0].toUpperCase());
  return nameOfDreamTeam.sort().join("");
};