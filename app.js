(function () {
    'use strict';

    angular.module('Ekz', [])
        .controller('Controller', Controller)
        .service('Service', Service);

    Controller.$inject = ['Service'];

    function Controller(Service) {
        var buy = this;
        buy.listBuy = Service.getBuy();
        buy.sell = function (index) {
            Service.sell(index);
        }
        buy.hide = function(index){
            Service.hide(index)
        }
         buy.show = function(index){
            Service.show(index)
        }
    }
    function Service() {
        var service = this;

        var listBuy = [
            {
                mark: "BMW",
                quantity: 1,
                isVisible : true
            },
            {
                mark: "FIAT",
                quantity: 1,
                 isVisible : true
            },
            {
                mark: "Honda",
                quantity: 1,
                 isVisible : true
            },
            {
                mark: "Lada",
                quantity: 1,
                 isVisible : true
            },
            {
                mark: "Запорожець",
                quantity: 1,
                 isVisible : true
            },
            {
                mark: "Mustang",
                quantity: 1,
                 isVisible : true
            },
        ];

        service.getBuy = function () {
            return listBuy;
        };

        service.sell = function (index) {
            listBuy.splice(index, 1);
        };
        service.hide = function(index)
        {
            listBuy[index].isVisible = false;
        }
        service.show = function(index)
        {
            listBuy[index].isVisible = true;
        }
    }
})();