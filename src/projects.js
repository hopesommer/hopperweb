
var projects = [
    {
        name: 'Raspberry Pi',
        id: 'raspberry-pi',
        icon: 'microchip'
    },
    {
        name: 'PC',
        id: 'pc',
        icon: 'windows'
    },
    {
        name: 'Android',
        id: 'android',
        icon: 'android'
    },
    {
        name: 'Apple',
        id: 'apple',
        icon: 'apple'
    }

];

function getAll() {
    return projects;
}

function find(id) {
    return projects.filter(
        function (project){
            return id === project.id;
        }
    )[0];
}

module.exports = {
    find: find,
    getAll: getAll
};