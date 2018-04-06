pizzaApp.directive("datepicker", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                onSelect: function (dateText) {
                    updateModel(dateText);
                }
            };
            elem.datepicker({
                dateFormat: "dd.mm.yy",
                monthNames: [ "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ],
                dayNames: [ "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя" ],
                dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд" ],
                dayNamesShort: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд" ],
                prevText: 'Попередній',
                nextText: 'Наступний'
            });
        }
    }
});