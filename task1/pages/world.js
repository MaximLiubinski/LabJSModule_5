const Documentation = require('./documentation.page');
const Projects = require('./projects.page');
const Download = require('./download.page');

class World {
    constructor(){
        this.documentation = new Documentation();
        this.projects = new Projects();
        this.download = new Download();
    }
}

module.exports = World;