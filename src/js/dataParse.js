import Park from '../../model/Park';
import Ulica from '../../model/Ulica';

const parseParks = (data = []) => {
    const parks = [];
    data.forEach(element => {
        parks.push(new Park(element.name, element.year, element.area, element.treesCount));
    });
    return parks;
};

const parseStreets = (data = []) => {
    const streets = [];
    data.forEach(element => {
        streets.push(new Ulica(element.name, element.year, element.streetLength, element.size))
    });
    return streets;
};

const parseData = (data = {}) => {
    const parsedData = {};

    if (data.parkovi) {
        parsedData.parkovi = parseParks(data.parkovi);
    }
    if (data.ulice) {
        parsedData.ulice = parseStreets(data.ulice);
    }

    return parsedData;
};


export default parseData;