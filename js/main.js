var app = angular.module('DemoWeb', ['ngRoute']);
app.controller('customersCtrl', function ($scope, $http) {
    $http.get("thongtinNhom.json").success(function (response) {
        $scope.danhsachsinhvien = response;
    });
});
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
                .when("/about", {templateUrl: "partials/about.html", controller: "aboutCtrl"})
                .when("/contact", {templateUrl: "partials/contact.html", controller: "contactCtrl"})
                .when("/1212436", {templateUrl: "partials/1212436.html", controller: "PageCtrl"})
                .when("/1312014", {templateUrl: "partials/1312014.html", controller: "PageCtrl"})
                .when("/1312040", {templateUrl: "partials/1312040.html", controller: "PageCtrl"})
                .when("/1112195", {templateUrl: "partials/1112195.html", controller: "PageCtrl"})
                .when("/1312601", {templateUrl: "partials/1312601.html", controller: "PageCtrl"})
    }]);
app.controller('aboutCtrl', function ($scope, $http) {
    $http.get("thongtinNhom.json").success(function (response) {
        $scope.sinhvien = response;
    });
});

app.controller('contactCtrl', function ($scope) {
    $scope.submit = function () {
        alert("Cám ơn bạn " + $scope.contact_name + ". Thông tin đã được gửi đi!");
        $scope.contact_name = "";
        $scope.contact_email = "";
        $scope.contact_phone = "";
        $scope.contact_message = "";
    };
});

app.controller('PageCtrl', function ($scope, $http) {
    $http.get("thongtinNhom.json").success(function (response) {
        $scope.sinhvien = response;
    });
});