namespace Cricket {
    interface IHeaderScope extends ng.IScope {
        title: string;
    }

    function headerDirective(): ng.IDirective {
        return {
            restrict: 'EA',
            templateUrl: 'Components/Shared/header.html',
            scope: {},
            link: (scope: IHeaderScope,
                element: ng.IAugmentedJQuery,
                attributes: ng.IAttributes): void => {
                scope.title = 'Yorker';
            }

        };
    }

    angular.module('Cricket').directive('yorkerHeader', headerDirective);
}