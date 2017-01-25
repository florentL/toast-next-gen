(function() {
    'use strict';

    angular
        .module('crmisticApp')
        .controller('DiplomeDetailController', DiplomeDetailController);

    DiplomeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Diplome', 'Filiere', 'EntreprisePartenaire', 'Etudiant'];

    function DiplomeDetailController($scope, $rootScope, $stateParams, previousState, entity, Diplome, Filiere, EntreprisePartenaire, Etudiant) {
        var vm = this;

        vm.diplome = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('crmisticApp:diplomeUpdate', function(event, result) {
            vm.diplome = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();