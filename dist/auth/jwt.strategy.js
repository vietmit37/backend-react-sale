'use strict';var _0x3268ed=_0x33dc;(function(_0x2e5ab7,_0x3d088f){var _0x3d60c5=_0x33dc,_0x2c7f88=_0x2e5ab7();while(!![]){try{var _0xeed4ca=parseInt(_0x3d60c5(0x7f))/0x1*(parseInt(_0x3d60c5(0x6c))/0x2)+parseInt(_0x3d60c5(0x86))/0x3+-parseInt(_0x3d60c5(0x81))/0x4+parseInt(_0x3d60c5(0x84))/0x5+-parseInt(_0x3d60c5(0x78))/0x6+-parseInt(_0x3d60c5(0x73))/0x7+parseInt(_0x3d60c5(0x74))/0x8;if(_0xeed4ca===_0x3d088f)break;else _0x2c7f88['push'](_0x2c7f88['shift']());}catch(_0x2a5c28){_0x2c7f88['push'](_0x2c7f88['shift']());}}}(_0x49b2,0x9dd6b));var __decorate=this&&this[_0x3268ed(0x77)]||function(_0x11852d,_0x101fdd,_0x20d3f8,_0x5c5411){var _0x565b58=_0x3268ed,_0x30e755,_0x4d445d=arguments[_0x565b58(0x70)],_0x2ef885=_0x4d445d<0x3?_0x101fdd:null===_0x5c5411?_0x5c5411=Object[_0x565b58(0x82)](_0x101fdd,_0x20d3f8):_0x5c5411;if(_0x565b58(0x72)==typeof Reflect&&'function'==typeof Reflect[_0x565b58(0x71)])_0x2ef885=Reflect['decorate'](_0x11852d,_0x101fdd,_0x20d3f8,_0x5c5411);else{for(var _0x77c6bb=_0x11852d[_0x565b58(0x70)]-0x1;0x0<=_0x77c6bb;_0x77c6bb--)(_0x30e755=_0x11852d[_0x77c6bb])&&(_0x2ef885=(_0x4d445d<0x3?_0x30e755(_0x2ef885):0x3<_0x4d445d?_0x30e755(_0x101fdd,_0x20d3f8,_0x2ef885):_0x30e755(_0x101fdd,_0x20d3f8))||_0x2ef885);}return 0x3<_0x4d445d&&_0x2ef885&&Object[_0x565b58(0x83)](_0x101fdd,_0x20d3f8,_0x2ef885),_0x2ef885;},__metadata=this&&this['__metadata']||function(_0x320dab,_0x18d6f2){var _0x496060=_0x3268ed;if('object'==typeof Reflect&&_0x496060(0x7d)==typeof Reflect['metadata'])return Reflect['metadata'](_0x320dab,_0x18d6f2);};Object[_0x3268ed(0x83)](exports,'__esModule',{'value':!0x0}),exports[_0x3268ed(0x6d)]=void 0x0;function _0x33dc(_0x319e24,_0x4a14ec){var _0x49b2d2=_0x49b2();return _0x33dc=function(_0x33dc11,_0x1d90a1){_0x33dc11=_0x33dc11-0x69;var _0x12095d=_0x49b2d2[_0x33dc11];return _0x12095d;},_0x33dc(_0x319e24,_0x4a14ec);}const passport_jwt_1=require(_0x3268ed(0x7c)),passport_1=require(_0x3268ed(0x75)),common_1=require('@nestjs/common');require('dotenv')[_0x3268ed(0x7b)]();let JwtStrategy=class extends(0x0,passport_1[_0x3268ed(0x6a)])(passport_jwt_1['Strategy']){constructor(){var _0x5d169e=_0x3268ed;super({'jwtFromRequest':passport_jwt_1[_0x5d169e(0x6f)]['fromAuthHeaderAsBearerToken'](),'ignoreExpiration':!0x1,'secretOrKey':process[_0x5d169e(0x79)][_0x5d169e(0x6b)]});}async[_0x3268ed(0x7e)](_0x4fad84){var _0x55a8fa=_0x3268ed;return{'_id':_0x4fad84['sub'],'phone':_0x4fad84[_0x55a8fa(0x80)],'email':_0x4fad84[_0x55a8fa(0x69)],'fullName':_0x4fad84[_0x55a8fa(0x7a)],'role':_0x4fad84[_0x55a8fa(0x6e)],'avatar':_0x4fad84[_0x55a8fa(0x85)]};}};function _0x49b2(){var _0x1cd5ba=['3865905xqedGP','avatar','829575GADxok','email','PassportStrategy','JWT_ACCESS_SECRET','6fqoBQq','JwtStrategy','role','ExtractJwt','length','decorate','object','53872mQsQNS','2641720AbQemO','@nestjs/passport','Injectable','__decorate','3666942tAKzMa','env','fullName','config','passport-jwt','function','validate','186672runJcp','phone','2698308jDqdCj','getOwnPropertyDescriptor','defineProperty'];_0x49b2=function(){return _0x1cd5ba;};return _0x49b2();}JwtStrategy=__decorate([(0x0,common_1[_0x3268ed(0x76)])(),__metadata('design:paramtypes',[])],JwtStrategy),exports[_0x3268ed(0x6d)]=JwtStrategy;