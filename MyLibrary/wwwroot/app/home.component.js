System.register(["@angular/core"],function(exports_1,context_1){"use strict";context_1&&context_1.id;var core_1,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};return{setters:[function(core_1_1){core_1=core_1_1}],execute:function(){let HomeComponent=class{constructor(){this.title="Welcome View"}};HomeComponent=__decorate([core_1.Component({selector:"home",template:`\n<h2>{{title}}</h2>\n<div class="menu">\n  <a class="books" [routerLink]="['books']">Books</a>\n| <a class="games" [routerLink]="['games']">Games</a>\n</div>\n`}),__metadata("design:paramtypes",[])],HomeComponent),exports_1("HomeComponent",HomeComponent)}}});
//# sourceMappingURL=wwwroot/home.component.js.map