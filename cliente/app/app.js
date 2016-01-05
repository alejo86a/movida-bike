(function(){
    var app = angular.module('cineUdea', ['ui.router', 'ngCookies' , 'ngResource']);
    //configuracion de la app
    app.config(function($stateProvider, $urlRouterProvider,  $httpProvider){
        //default
        $urlRouterProvider.otherwise('home');
        //$locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptor');
        $stateProvider
        .state('Home',{
            url:"/home",
            templateUrl:"cliente/templates/home.html",
            //controller:"homeCtrl"
        })
        .state('Registro',{
            url:"/registro",
            templateUrl: "cliente/templates/registro.html",
            controller:"registroController"
        })
        .state('Login',{
            url:"/login",
            templateUrl:"cliente/templates/login.html",
            controller:"loginController"
        })
        /*
        .state('Cartelera',{
            url:"/cartelera/:cineNombre/:carteleraID",
            templateUrl: "cliente/templates/cartelera.html",
            controller:"carteleraCtrl"
        })
        
        .state('Pelicula',{
            url:"/pelicula/:peliculaID",
            templateUrl: "cliente/templates/pelicula.html",
            controller:"peliculaController"
        });
        */
    });
    
    app.factory('authInterceptor' , function ($rootScope,$q,$cookieStore , $location) {
        return {
            request: function (config) {
                config.headers = config.headers||{};
                if($cookieStore.get('token')){
                    config.headers.Authorization = 'Bearer '+ $cookieStore.get('token');
                }
                return config;
            }
        };
    });
    app.run(function ($rootScope, $location, Auth) {
        $rootScope.$on('$routeChangeStart', function (event, next) {
            
        });
    });
}());

