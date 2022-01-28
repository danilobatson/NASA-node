const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'K Exploration ',
  rocket: 'Rocket 1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Miami',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)

module.exports = {
  launches,
}
