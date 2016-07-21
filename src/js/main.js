import angular from 'angular';
import $ from 'jquery';
import {MainController} from './controllers/main.controller.js';
import {serverConstant} from './controllers/serverConstant.js';

angular
   .module('app',[])
   .controller('MainController', MainController)
   .constant('SERVER', serverConstant);
