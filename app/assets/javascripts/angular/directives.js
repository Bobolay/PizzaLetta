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
                dayNamesMin: [ "Нд","Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
                dayNamesShort: [ "Нд","Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
                prevText: 'Попередній',
                nextText: 'Наступний',
                minDate: "0",
                firstDay: "1"
            });
        }
    }
});