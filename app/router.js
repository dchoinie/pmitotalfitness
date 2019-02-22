import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('dashboard');
  this.route('rates');
  this.route('single-day-passes');
  this.route('tanning');
  this.route('massage');
  this.route('personal-training');
  this.route('hours');
  this.route('programs');
  this.route('membership-options');
  this.route('equipment');
  this.route('shop');
  this.route('yoga');
  this.route('silver-sneakers');
  this.route('reimbursement');
  this.route('about');
  this.route('privacy-policy');
  this.route('terms-of-use');
  this.route('club-policies');
  this.route('accessibility-policy');
  this.route('contact');
});

export default Router;
