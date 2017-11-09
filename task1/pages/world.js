const Documentation = require('./documentation.page');
const Projects = require('./projects.page');

class World {
    constructor(){
        this.documentation = new Documentation();
        this.projects = new Projects();
    }
}

module.exports = World;