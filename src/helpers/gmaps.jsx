// http://maps.google.com/maps?z=12&t=m&q=loc:38.9419+-78.3020

const getGmapsPlaceUrl = (lat, long) => {
  return `https://maps.google.com/maps?z=12&t=m&q=loc:${lat}+${long}`
}

export { getGmapsPlaceUrl }
