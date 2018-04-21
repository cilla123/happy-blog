'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    await this.ctx.render('login/index.js');
    await this.ctx.render('login/index.html', {});
  }

}

module.exports = HomeController;
