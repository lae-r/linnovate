'use strict';

var myApp = angular.module('myApp', []);

myApp.factory('Data',function ($http) {
	var dataFactory={};
	dataFactory.product=[{id:1,inbasket:false,name:'מטליט רצפה',category:3,price:9.9,amount:1,company:'סנו',image:'/sites/all/modules/linnotest/angular/Images/matlit.JPG'},
	{id:2,inbasket:false,name:'טיטולים',category:3,price:43,amount:1,company:'אגיס',image:'/sites/all/modules/linnotest/angular/Images/huggies.JPG'},
	{id:1,inbasket:false,name:'שמפו דאו',category:3,price:12.3,amount:1,company:'דאו',image:'/sites/all/modules/linnotest/angular/Images/Dav.JPG'},
	{id:2,inbasket:false,name:'קמח',category:5,price:5,amount:1,company:'אוסם',image:'/sites/all/modules/linnotest/angular/Images/Flour.JPG'},
	{id:1,inbasket:false,name:'פופסים',category:2,price:3.4,amount:1,company:'טעמן',image:'/sites/all/modules/linnotest/angular/Images/Fofsim.JPG'},
	{id:2,inbasket:false,name:'חמצוצים',category:2,price:8,amount:1,company:'טעמן',image:'/sites/all/modules/linnotest/angular/Images/Hmtzotzim.JPG'},
	{id:1,inbasket:false,name:'קוסקוס',category:5,price:4.8,amount:1,company:'אוסם',image:'/sites/all/modules/linnotest/angular/Images/Kuskus.JPG'},
	{id:2,inbasket:false,name:'חלב',category:1,price:5,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/Milk.JPG'},
	{id:1,inbasket:false,name:'מים מינרלים',category:5,price:10,amount:1,company:'מינרל',image:'/sites/all/modules/linnotest/angular/Images/MuneralWeter.JPG'},
	{id:2,inbasket:false,name:'פתיתים',category:5,price:6,amount:1,company:'אוסם',image:'/sites/all/modules/linnotest/angular/Images/ptitim.JPG'},
	{id:1,inbasket:false,name:'פודינג',category:5,price:15.7,amount:1,company:'אוסם',image:'/sites/all/modules/linnotest/angular/Images/puding.JPG'},
	{id:1,inbasket:false,name:'פיתות',category:4,price:15,amount:1,company:'האופה',image:'/sites/all/modules/linnotest/angular/Images/Pitta.JPG'},
	{id:1,inbasket:false,name:'נקניק אדום',category:5,price:30.5,amount:1,company:'אשפר',image:'/sites/all/modules/linnotest/angular/Images/Redsausage.JPG'},
	{id:1,inbasket:false,name:'אורז',category:5,price:8,amount:1,company:'סוגת',image:'/sites/all/modules/linnotest/angular/Images/Rice.JPG'},
	{id:1,inbasket:false,name:'לחמניות',category:4,price:12,amount:1,company:'אנגל',image:'/sites/all/modules/linnotest/angular/Images/Rolls.JPG'},
	{id:1,inbasket:false,name:'סנו קאלק',category:3,price:26,amount:1,company:'סנו',image:'/sites/all/modules/linnotest/angular/Images/SanoKalk.JPG'},
	{id:1,inbasket:false,name:'שמפו',category:3,price:10,amount:1,company:'פינוק',image:'/sites/all/modules/linnotest/angular/Images/Shampo.JPG'},
	{id:1,inbasket:false,name:'מרכך כביסה',category:1,price:22,amount:1,company:'בדין',image:'/sites/all/modules/linnotest/angular/Images/Softener.JPG'},
	{id:1,inbasket:false,name:'עוגיות שוקולד',category:2,price:23.3,amount:1,company:'טעמן',image:'/sites/all/modules/linnotest/angular/Images/SokledCockies.JPG'},
	{id:1,inbasket:false,name:'שוקו',category:5,price:15,amount:1,company:'אוסם',image:'/sites/all/modules/linnotest/angular/Images/Cokled.JPG'},
	{id:1,inbasket:false,name:'ספגטי',category:5,price:3.5,amount:1,company:'אוסם',image:'/sites/all/modules/linnotest/angular/Images/Spagety.JPG'},
	{id:1,inbasket:false,name:'חלב עמיד',category:1,price:12,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/UHTmilk.JPG'},
	{id:1,inbasket:false,name:'פודינג וניל',category:5,price:15,amount:1,company:'אוסם',image:'/sites/all/modules/linnotest/angular/Images/VanilPuding.JPG'},
	{id:1,inbasket:false,name:'ופלים',category:2,price:7,amount:1,company:'עלית',image:'/sites/all/modules/linnotest/angular/Images/Whafel.JPG'},
	{id:1,inbasket:false,name:'יין לבן',category:5,price:25,amount:1,company:'היקב',image:'/sites/all/modules/linnotest/angular/Images/WhiteWine.JPG'},
	{id:1,inbasket:false,name:'מגבונים',category:3,price:3.9,amount:1,company:'סנו',image:'/sites/all/modules/linnotest/angular/Images/Wipes.JPG'},
	{id:1,inbasket:false,name:'שמן',category:1,price:8,amount:1,company:'טעמן',image:'/sites/all/modules/linnotest/angular/Images/Oil.JPG'},
	{id:1,inbasket:false,name:'סושי',category:3,price:8.3,amount:1,company:'סנו',image:'/sites/all/modules/linnotest/angular/Images/sanosushi.JPG'},
	{id:1,inbasket:false,name:'כפפות',category:3,price:12.3,amount:1,company:'סנו',image:'/sites/all/modules/linnotest/angular/Images/latkes.JPG'},
	{id:1,inbasket:false,name:'vvvvv',category:2,price:13.7,amount:1,company:'טעמן',image:'/sites/all/modules/linnotest/angular/Images/pasket.JPG'},
	{id:1,inbasket:false,name:'vvvvv',category:2,price:7,amount:0,company:'מנטוס',image:'/sites/all/modules/linnotest/angular/Images/mentos.JPG'},
	{id:1,inbasket:false,name:'מסטיק',category:2,price:8.7,amount:1,company:'מאסט',image:'/sites/all/modules/linnotest/angular/Images/must.JPG'},
	{id:1,inbasket:false,name:'זאזא',category:2,price:16.5,amount:1,company:'זאזה',image:'/sites/all/modules/linnotest/angular/Images/suger.JPG'},
	{id:1,inbasket:false,name:'גבינה',category:1,price:15.8,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/cheese.JPG'},
	{id:1,inbasket:false,name:'יוגורט',category:1,price:3.5,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/yugort.JPG'},
	{id:1,inbasket:false,name:'בקבוק שוקו',category:1,price:15,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/sokobutten.JPG'},
	{id:1,inbasket:false,name:'גילה',category:1,price:1.2,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/gila.JPG'},
	{id:1,inbasket:false,name:'שוקו בשקית',category:1,price:3.5,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/sokosok.JPG'},
	{id:1,inbasket:false,name:'קצפת',category:1,price:6.7,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/kasefet.JPG'},
	{id:1,inbasket:false,name:'מרגרינה',category:1,price:4,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/margarin.JPG'},
	{id:1,inbasket:false,name:'חלב עמיד',category:1,price:	12,amount:1,company:'תנובה',image:'/sites/all/modules/linnotest/angular/Images/UHTmilk.JPG'},
	{id:1,inbasket:false,name:'לחם',category:4,price:5,amount:1,company:'האופה',image:'/sites/all/modules/linnotest/angular/Images/bread.JPG'}];
	dataFactory.categories=[
	{id:1,name:'מוצרי חלב'},
	{id:2,name:'ממתקים'},
	{id:3,name:'חומרי ניקוי'},
	{id:4,name:'מאפים'},
	{id:5,name:'מוצרי מזון'}
	];
	return dataFactory;
});
myApp.directive('product',function(){
 return {
    restrict: 'E',
    templateUrl: '/sites/all/modules/linnotest/angular/Partials/product.html',
	scope:{product:'=',change:'&',category:'='},
    link: function(scope, element, attrs) {
  
    }
    
  };
 
});


function SuperCtrl($scope,Data ,$http){
//myApp.controller('SuperCtrl'['$scope','Data',function($scope,Data)
//{
$scope.selectCategory=2;
$scope.buyAmount=0;
$scope.products=Data.product;
$scope.categories=Data.categories;
$scope.prodSearch='';
$scope.$watch('prodSearch',function(){
angular.forEach($scope.products, function(value,index) {
if(value.name.indexOf($scope.prodSearch)!=-1)
value.showSearch=true;
else
value.showSearch=false;
});
});
$scope.prodChange=function(){
$scope.buyAmount=1;
angular.forEach($scope.products, function(value,index) {
if(value.inbasket==true)
   {
   $scope.buyAmount+=value.price*value.amount;
   }
}); };

$scope.CategoryChange=function(id){$scope.selectCat=id;
angular.forEach($scope.products, function(value,index) {
if(value.category==id)
value.show=true;
else
value.show=false
});
};
$scope.CategoryChange(1);


$http.get('http://mystore.local:8083/json')
		.success(function(response, status, headers, config) {
                	$scope.stores = response.result;
                })



};



