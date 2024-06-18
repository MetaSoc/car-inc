const imageSelect = (index: any) => {
  const imageArray: any = {
    '2 Series': require('../assets/cars/bmw-2-series.png'),
    Ceed: require('../assets/cars/kia-ceed.png'),
    Corsa: require('../assets/cars/opel-corsa.png'),
    'Mustang GT': require('../assets/cars/ford-mustang-gt.png'),
    'i30 Wagon': require('../assets/cars/hyundai-i30-wagon.png'),
    'Octavia SW': require('../assets/cars/skoda-octavia-sw.png'),
    Passat: require('../assets/cars/volkswagen-passat.png'),
    Picanto: require('../assets/cars/kia-picanto.png'),
    Rav4: require('../assets/cars/toyota-rav4.png'),
    'Zoe Electric': require('../assets/cars/renault-zoe-electric.png'),
  }
  return imageArray[index]
}
export default imageSelect
