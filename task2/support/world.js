const HomePage =require('./home.page.js');
const ClubPage =require('./club.page.js');
const PartnersPage =require('./partners.page.js');
const ForumPage =require('./forum.page.js');


class World{
    constructor() {
        this.homePage = new HomePage();
        this.clubPage = new ClubPage();
        this.partnersPage = new PartnersPage();
        this.forumPage = new ForumPage();

    }
}
module.exports= new World();