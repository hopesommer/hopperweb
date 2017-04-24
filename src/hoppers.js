
var hoppers = [
    {
        name: 'Grace Hopper',
        id: 'grace-hopper',
        icon: 'desktop'
    },
    {
        name: 'Hedy Lamarr',
        id: 'hedy-lamarr',
        icon: 'bluetooth',
        cover: 'images/hoppers/hedy-lamarr.jpg'
    },
    {
        name: 'Jane Goodall',
        id: 'jane-goodall',
        icon: 'binoculars'
    },
    {
        name: 'Marie Curie',
        id: 'marie-curie',
        icon: 'flask'
    },
    {
        name: 'Mary Anning',
        id: 'mary-anning',
        icon: 'wpexplorer'
    },
    {
        name: 'Patricia Bath',
        id: 'patricia-bath',
        icon: 'eye'
    },
    {
        name: 'Rachel Carson',
        id: 'rachel-carson',
        icon: 'tree'
    },
    {
        name: 'Rosalind Franklin',
        id: 'rosalind-franklin',
        icon: 'cubes'
    },
    {
        name: 'Valentina Tereshkova',
        id: 'valentina-tereshkova',
        icon: 'grav'
    }
];

function getAll() {
    return hoppers;
}

function find(id) {
    return hoppers.filter(
        function (hopper){
            return id === hopper.id;
        }
    )[0];
    // TODO: find and return hopper by name
}

module.exports = {
    find: find,
    getAll: getAll
};