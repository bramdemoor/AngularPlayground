'use strict';

function hue2rgb(p, q, t){
    if(t < 0) t += 1;
    if(t > 1) t -= 1;
    if(t < 1/6) return p + (q - p) * 6 * t;
    if(t < 1/2) return q;
    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
}

function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{


        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

// convert a number to a color using hsl
function numberToColorHsl(i) {
    // as the function expects a value between 0 and 1, and red = 0° and green = 120°
    // we convert the input to the appropriate hue value
    var hue = i * 1.2 / 360;
    // we convert hsl to rgb (saturation 100%, lightness 50%)
    var rgb = hslToRgb(hue, 1, .5);
    // we format to css value and return
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
}

/**
 * @ngdoc directive
 * @name angularPlaygroundApp.directive:kpi
 * @description
 * # kpi
 */
angular.module('angularPlaygroundApp')
    .directive('kpi', function () {
        return {
            template: '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" ng-attr-fill="{{fillColor}}" popover="I appeared on mouse enter!" popover-trigger="mouseenter" /></svg>',
            restrict: 'E',
            scope: {
                key: '@',
                name: '@',
                description: '@',
                percentage: '@'
            },
            link: function postLink(scope, element, attrs) {
               // element.text('this is the kpi directive');

                console.log('attrs:');
                console.log(attrs);

               // scope.fillColor = 'green';
                scope.fillColor = numberToColorHsl(scope.percentage);

                scope.$watch('value', function(val) {

                }, true );

                attrs.$observe('value', function (value) {

                });

                element.bind('click', function() {
                    alert('info');
                });

                element.bind('mouseover', function() {
                    console.log('mouse in');

                });

                element.popover({
                    html: true,
                    content:scope.description,
                    trigger: 'focus'
                });

                element.popover('show');
            }
        };
  });
