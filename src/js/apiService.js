const fetchData = () => fetch('https://cityscapes-masters.herokuapp.com/cityElements')
        .then(resp => resp.json())
        .then(response => response);

export {
    fetchData,
};