import countries from './data/countries.json' assert {type: 'json'}

export const getCoordinates = async (req, res) => {
  const country = req.query.country;
  countries[country]["country"] = country;
  res.send(countries[country]);
}