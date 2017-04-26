
var bioprojects = [
    {
        name: 'Bugs',
        id: 'bugs',
        icon: 'bug'
    },
    {
        name: 'DNA',
        id: 'dna',
        icon: 'database'
    },
    {
        name: 'Plants',
        id: 'plants',
        icon: 'leaf'
    }
];

function getAll() {
    return bioprojects;
}

function find(id) {
    return bioprojects.filter(
        function (bioproject){
            return id === bioproject.id;
        }
    )[0];
}

module.exports = {
    find: find,
    getAll: getAll
};