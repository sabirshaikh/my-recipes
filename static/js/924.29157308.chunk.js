"use strict";(self.webpackChunkreact_recipes_2=self.webpackChunkreact_recipes_2||[]).push([[924],{1147:function(e,r,a){var t=a(1413),s=a(2791),c=a(184),i=s.forwardRef((function(e,r){return(0,c.jsx)("input",(0,t.Z)({ref:r},e))}));r.Z=i},823:function(e,r,a){a.r(r),a.d(r,{default:function(){return v}});var t=a(885),s=a(2791),c=a(4880),i=a(1523),n=a(9434),o=a(1747),l=a(7087),d=(a(9713),a(184)),u=function(e){var r=parseInt(e.rating),a=encodeURIComponent(e.recipeUrl),t=function(){for(var e=[],a=0;a<r;a++)e.push((0,d.jsx)("li",{className:"active"},"s"+a));return e};return(0,d.jsxs)("div",{className:"background-white thum-hover box-shadow hvr-float full-width full-height",children:[(0,d.jsx)("div",{className:"float-md-left margin-right-30px thum-xs",children:(0,d.jsx)(i.rU,{to:"/recipeDetails/".concat(a),children:(0,d.jsx)(l.LazyLoadImage,{src:e.recipeImage,effect:"blur",width:"100%",className:"width-250px"})})}),(0,d.jsxs)("div",{className:"padding-25px",children:[(0,d.jsx)("div",{className:"rating",children:(0,d.jsx)("ul",{children:(0,d.jsx)(t,{})})}),(0,d.jsxs)("h3",{children:[" ",(0,d.jsxs)(i.rU,{to:"/recipeDetails/".concat(a),href:"#",className:"d-block text-dark text-capitalize text-medium margin-tb-15px",children:[e.recipeName," "]})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{className:"row no-gutters",children:[(0,d.jsx)("div",{className:"col-4 text-left",children:(0,d.jsxs)("a",{href:"#",className:"text-red",children:[(0,d.jsx)("i",{className:"far fa-heart"})," Save"]})}),(0,d.jsx)("div",{className:"col-8 text-right",children:(0,d.jsxs)("a",{href:"#",className:"text-grey-2",children:[(0,d.jsx)("i",{className:"fas fa-users"})," ",e.recipeServing," servings"]})})]})]}),(0,d.jsx)("div",{className:"clearfix"})]})},h=a(4569),m=a.n(h),p=a(4270),f=a(1147),x=function(e){var r=(0,s.useState)(""),a=(0,t.Z)(r,2),c=a[0],i=a[1],n=(0,s.useState)(!1),o=(0,t.Z)(n,2),l=o[0],d=o[1],u=e(c);return{value:c,hasError:!u&&l,valueChangedHandler:function(e){i(e.target.value)},inputBlurHandler:function(e){d(!0)},isValid:u,reset:function(){i(""),d(!1)}}},v=function(){var e=(0,c.k6)(),r=(0,c.UO)(),a=(0,s.useState)(0),l=(0,t.Z)(a,2),h=l[0],v=l[1],g=(0,s.useState)([]),j=(0,t.Z)(g,2),b=j[0],N=j[1],w=r.id?r.id.trim():"indian",k=(0,s.useState)(!1),C=(0,t.Z)(k,2),S=C[0],y=C[1],L=(0,n.v9)((function(e){return e.layoutReducer.showLoader})),R=(0,n.v9)((function(e){return e.recipeReducer.recipes})),q=(0,n.v9)((function(e){return e.recipeReducer.currentCategory})),U=x((function(e){return""!==e.trim()})),I=U.value,Z=U.hasError,_=U.valueChangedHandler,E=U.inputBlurHandler,H=U.isValid,B=U.reset,F=(0,s.useRef)(""),M=!1;H&&(M=!0);var z=(0,n.I0)();(0,s.useEffect)((function(){z(o.qo.setHeaderAlignment("text-left"))}),[]),(0,s.useEffect)((function(){z(o.qo.setTitle("".concat(w," Recipes | Cook Note"))),q.toLowerCase()===w.toLowerCase()&&0!==R.length||(z(o.cF.setCategory(w.toLowerCase())),A(null,!0))}),[w]),(0,s.useEffect)((function(){h>0&&A({from:h,to:h+10})}),[h]),(0,s.useEffect)((function(){var e=R.map((function(e,r){return(0,d.jsx)("div",{className:"col-lg-6 margin-bottom-30px",children:(0,d.jsx)(u,{recipeName:e.recipe.label,recipeUrl:e.recipe.uri,recipeImage:e.recipe.image,recipeServing:e.recipe.yield,rating:Math.floor(5*Math.random())+1})},r)}));N(e)}),[R]);var A=(0,s.useCallback)((function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];z(o.qo.showLoader(!0));var a="https://api.edamam.com/search?imageSize=THUMBNAIL&q='".concat(w,"'&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39");if(e){var t=e.from,s=e.to;a="https://api.edamam.com/search?from=".concat(t,"&to=").concat(s,"&imageSize=THUMBNAIL&q='").concat(w,"'&app_key=21b0439f73d40762540d12bb2dcccc9d&app_id=87dc6b39")}try{m().get(a).then((function(e){200===e.status&&z(o.cF.setRecipes({data:e.data.hits,replace:r})),z(o.qo.showLoader(!1)),y(!1)})).catch((function(e){z(o.qo.showLoader(!1)),y(!0)}))}catch(S){z(o.qo.showLoader(!1))}}));return(0,d.jsxs)(s.Fragment,{children:[(0,d.jsx)(p.q,{children:(0,d.jsxs)("title",{children:["Cook Note - ",w," Food Recipes"]})}),(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"margin-bottom-60px",children:[(0,d.jsx)("div",{className:"listing-search box-shadow",children:(0,d.jsxs)("form",{className:"row no-gutters",onSubmit:function(r){r.preventDefault(),F.current.blur(),M?(B(),e.push("/recipes/".concat(F.current.value))):console.log("form is invalidated")},children:[(0,d.jsx)("div",{className:"col-md-8",children:(0,d.jsx)("div",{className:"keywords",children:(0,d.jsx)(f.Z,{ref:F,className:"listing-form first ".concat(Z?"inValid":""),type:"text",value:I,placeholder:"Enter recipe name",onChange:_,onBlur:E})})}),(0,d.jsx)("div",{className:"col-md-4",children:(0,d.jsx)("button",{type:"submit",className:"listing-bottom background-second-color box-shadow btn",disabled:!M,children:"Search Now"})})]})}),Z&&(0,d.jsx)("p",{className:"text-main-color mt-3",children:"Please enter value"})]})}),(0,d.jsxs)("div",{className:"container margin-bottom-100px",children:[S&&(0,d.jsx)("p",{children:"Something went wrong!"}),0!==b.length||L||S?(0,d.jsx)("div",{className:"row",children:!S&&b}):(0,d.jsxs)("p",{children:[w," Recipes Not Found, Please try again ",(0,d.jsx)(i.rU,{to:"/recipes",className:"text-main-color",children:"recipes"})]}),!S&&b&&(0,d.jsx)("div",{className:"text-center",children:(0,d.jsx)("button",{onClick:function(){v((function(e){return e+1}))},className:"btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white",children:"Show More Recipes"})})]})]})}}}]);
//# sourceMappingURL=924.29157308.chunk.js.map