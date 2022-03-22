(this["webpackJsonpadmin-hire-tool-frontend"]=this["webpackJsonpadmin-hire-tool-frontend"]||[]).push([[38],{1266:function(e,t,a){},1370:function(e,t,a){"use strict";a.r(t);var s=a(51),n=a(52),r=a(60),i=a(59),l=a(1),o=a.n(l),c=(a(1266),a(278)),u=a(318),d=a(656),p=a(157),m=a(31),y=a(22),h=a(45),b=a(41),v=a(112),f=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).validateFields=function(){var e=!0;if(""==n.state.assessmentName&&(n.setState({assessmentNameError:"Please Enter Assessment Name"}),e=!1),""==n.state.industryType&&(n.setState({industryTypeError:"Please Select Industry Type"}),e=!1),""==n.state.jobType&&(n.setState({jobTypeError:"Please Select Job Type"}),e=!1),""==n.state.experienceLevel&&(n.setState({experienceLevelError:"Please Select Experience Level"}),e=!1),""==n.state.QuestionType&&(n.setState({questionTypeError:"Question Type Not Available"}),e=!1),n.state.questionTypes&&n.state.questionTypes.length){var t=[];n.state.questionTypes.map((function(e){e.checked&&t.push(e)})),t.length||(n.setState({questionTypeError:"Please Select Question Type"}),e=!1)}return e},n.handleChange=function(e){var t=n.state.questionTypes;t.map((function(t){t.value==e.value&&(t.checked=!t.checked)})),n.setState({questionTypes:t,questionTypeError:""})},n.saveContinueHandler=function(){if(n.validateFields()){var e=[];n.state.questionTypes.map((function(t){t.checked&&e.push({id:t.value,name:t.label})}));var t={name:n.state.assessmentName,industryType:n.state.industryType.value,experienceLevel:n.state.experienceLevel.value,jdId:n.state.jobType.value,questionType:e};n.props.AssessmentAction.addTest(t)}},n.state={assessmentName:"",optionsdata:[],industryType:"",jobType:"",optionsdata2:[],experienceLevel:"",optionsdata3:[],verbal:!1,mcq:!1,questionTypes:[],assessmentNameError:"",industryTypeError:"",jobTypeError:"",questionTypeError:"",experienceLevelError:"",testId:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){v.a.pageview(window.location.pathname),this.props.AssessmentAction.getIndustryTypes(),this.props.AssessmentAction.getJobTypes(),this.props.AssessmentAction.getExperienceLevel(),this.props.AssessmentAction.getQuestionTypes()}},{key:"componentDidUpdate",value:function(e){var t=e&&e.AssessmentReducer,a=this.props&&this.props.AssessmentReducer;if(t.isGetIndustryTypes!==a.isGetIndustryTypes&&(a.isGetIndustryTypes=!1,a.industryTypes&&a.industryTypes.data&&a.industryTypes.data.results&&a.industryTypes.data.results.length)){var s=[];a.industryTypes.data.results.map((function(e){s.push({value:e.id,label:e.name})})),this.setState({optionsdata:s})}if(t.isGetJobTypes!=a.isGetJobTypes&&(a.isGetJobTypes=!1,a.jobTypes&&a.jobTypes.data)){var n=[];a.jobTypes.data.map((function(e){n.push({value:e.id,label:e.title})})),this.setState({optionsdata2:n})}if(t.isGetExperienceLevel!==a.isGetExperienceLevel&&(a.isGetExperienceLevel=!1,a.experienceLevel&&a.experienceLevel.data&&a.experienceLevel.data.results&&a.experienceLevel.data.results.length)){var r=[];a.experienceLevel.data.results.map((function(e){r.push({value:e.id,label:e.name})})),this.setState({optionsdata3:r})}if(t.isGetQuestionTypes!==a.isGetQuestionTypes&&(a.isGetQuestionTypes=!1,a.questionType&&a.questionType.data&&a.questionType.data.results&&a.questionType.data.results.length)){var i=[];a.questionType.data.results.map((function(e){i.push({value:e.id,label:e.name,checked:!1})})),this.setState({questionTypes:i})}t.isTestAdded!==a.isTestAdded&&(a.isTestAdded=!1,a.test&&a.test.data&&a.test.data.id&&(this.setState({testId:a.test.data.id}),this.props.history.push({pathname:"/assessment/step2/create-assignment/".concat(a.test.data.id),state:{testId:a.test.data.id}})))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-step-1"},o.a.createElement("div",{className:"inputs-body-div"},o.a.createElement("div",{className:"assessment-name"},"Assessment Name"),o.a.createElement("div",{className:"assessment-name-input-div"},o.a.createElement(u.a,{className:"assessment-name-input",placeholder:"Enter assessment name ",value:this.state.assessmentName,onChange:function(t){e.setState({assessmentName:t.target.value})}})),o.a.createElement("div",{className:"error"},this.state.assessmentName?null:this.state.assessmentNameError),o.a.createElement("div",{className:"assessment-name"},"Industry Types"),o.a.createElement("div",{className:"industry-type-select-div"},o.a.createElement(c.a,{className:"industry-type-select",onChange:function(t){e.setState({industryType:{value:t.value,label:t.label}})},options:this.state.optionsdata,value:this.state.industryType,placeholder:this.state.industryType.label?this.state.industryType.label:"Select industry type"})),o.a.createElement("div",{className:"error"},this.state.industryType?null:this.state.industryTypeError),o.a.createElement("div",{className:"assessment-name"},"Job Type"),o.a.createElement("div",{className:"industry-type-select-div"},o.a.createElement(c.a,{className:"industry-type-select",onChange:function(t){e.setState({jobType:{value:t.value,label:t.label}})},options:this.state.optionsdata2,value:this.state.jobType,placeholder:this.state.jobType.label?this.state.jobType.label:"Select jd"})),o.a.createElement("div",{className:"error"},this.state.jobType?null:this.state.jobTypeError),o.a.createElement("div",{className:"assessment-name"},"Experience Level"),o.a.createElement("div",{className:"industry-type-select-div"},o.a.createElement(c.a,{className:"industry-type-select",onChange:function(t){e.setState({experienceLevel:{value:t.value,label:t.label}})},options:this.state.optionsdata3,value:this.state.experienceLevel,placeholder:this.state.experienceLevel.label?this.state.experienceLevel.label:"Select experience level"})),o.a.createElement("div",{className:"error"},this.state.experienceLevel?null:this.state.experienceLevelError),o.a.createElement("div",{className:"industry-type-select-div"},o.a.createElement(d.a,{questionTypes:this.state.questionTypes,handleChange:this.handleChange})),o.a.createElement("div",{className:"error"},this.state.questionTypeError),o.a.createElement("div",{className:"save-continue-button-div"},o.a.createElement(p.a,{className:"save-continue-button",onClick:function(){e.saveContinueHandler()}},"Save & Continue"))))}}]),a}(o.a.Component);t.default=Object(h.b)((function(e){return{AssessmentReducer:e.AssessmentReducer}}),(function(e){return{AssessmentAction:Object(b.b)(y,e)}}))(Object(m.e)(f))},222:function(e,t,a){"use strict";var s=a(68),n=a(69);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1)),i=(0,s(a(70)).default)(r.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=i},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var s=a(0),n=a(1),r=a.n(n),i=(a(293),a(441)),l=a(223),o=a(111),c=a.n(o);function u(e){var t=function(){return r.a.createElement(c.a,{style:{color:e.iconWhite?"#fff":"#333"}})},a={control:function(t){return Object(s.a)(Object(s.a)({},t),{},{height:e.height?e.height:34,minHeight:e.minHeight?e.minHeight:34,maxHeight:e.maxHeight?e.maxHeight:34,padding:e.padding?e.padding:0,borderRadius:4,fontSize:e.fontSize?e.fontSize:11,color:e.color?e.color:"#000",background:e.background?e.background:"#fff",fontWeight:e.fontWeight?e.fontWeight:"400"})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(s.a)(Object(s.a)({},e),{},{opacity:a,transition:"opacity 300ms"})},placeholder:function(t){return Object(s.a)(Object(s.a)({},t),{},{color:e.color?e.color:"#000",fontSize:e.fontSize?e.fontSize:11,fontWeight:e.fontWeight?e.fontWeight:"400"})},option:function(e,t){var a=t.data,n=a.color?a.color:"#000";return Object(s.a)(Object(s.a)({},e),{},{color:n})}};return r.a.createElement(l.a,{components:{DropdownIndicator:function(e){return r.a.createElement(i.l.DropdownIndicator,e,r.a.createElement(t,null))}},classNamePrefix:"select-state",className:e.className,onChange:e.onChange,options:e.options,placeholder:e.placeholder,value:e.value,isDisabled:e.disabled,styles:a,menuPortalTarget:document.body,menuPlacement:e.placement?e.placement:"auto"})}},293:function(e,t,a){},318:function(e,t,a){"use strict";var s=a(106),n=a(1),r=a.n(n),i=a(214),l=a(1389),o=a(1335),c=a(1379),u=(a(330),Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",fontFamily:"Poppins"},input:{"&::placeholder":{textOverflow:"ellipsis !important",color:"#363636"}}}})));t.a=function(e){var t,a=u(),n=null;return e.inputIcon&&(n=r.a.createElement("img",{src:e.inputIcon,height:e.imageHeight,width:e.imageWidth,style:{paddingLeft:"10px",marginRight:"-1px"},role:"button",onClick:e.imageOnClick})),r.a.createElement("div",{style:{width:"100%"}},e.labelName?r.a.createElement(l.a,{htmlFor:"bootstrap-input",className:e.noMargin?"text-black ml-2 mb-2":"text-black ml-2 mb-2 ",style:{fontFamily:"Poppins",color:"#162855"}},e.required?"".concat(e.labelName," *"):e.labelName):null,r.a.createElement(o.a,{className:a.margin,style:e.deviceAddInput?{width:"88%"}:{width:"100%"},error:e.error},r.a.createElement(c.a,(t={className:"new-input",id:"bootstrap-input",name:e.name?e.name:"",placeholder:e.placeholder,onChange:e.onChange,type:e.type?e.type:"text",style:{font:"normal normal normal 14px/21px Poppins"}},Object(s.a)(t,"className","".concat(e.className," input-fields")),Object(s.a)(t,"size",e.size?e.size:"small"),Object(s.a)(t,"error",e.error),Object(s.a)(t,"required",e.required),Object(s.a)(t,"inputProps",{maxLength:e.inputProps?e.inputProps:200}),Object(s.a)(t,"helperText",e.helperText),Object(s.a)(t,"InputProps",{className:a.textInput}),Object(s.a)(t,"InputProps",{startAdornment:n}),Object(s.a)(t,"value",e.value),Object(s.a)(t,"variant","outlined"),Object(s.a)(t,"height","34px"),Object(s.a)(t,"disabled",e.disabled),Object(s.a)(t,"onBlur",e.onKeyDown),Object(s.a)(t,"onKeyPress",(function(e){"Enter"===e.key&&e.preventDefault()})),t))))}},330:function(e,t,a){},372:function(e,t,a){"use strict";var s=a(1),n=a.n(s),r=a(222),i=a.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var o=function(e){var t=e.borderColor,a=e.borderRadius,r=e.borderStyle,i=e.borderWidth,o=e.checkbox,c=e.className,u=e.checked,d=e.disabled,p=e.containerClassName,m=e.containerStyle,y=e.label,h=e.labelClassName,b=e.labelStyle,v=e.name,f=e.onChange,g=e.reference,T=e.right,E=e.size,N=e.style,j=e.value,x=e.icon,S=Object(s.useState)(u),C=S[0],O=S[1],k=function(e){e.preventDefault(),O(!C),f&&f(!C)};return Object(s.useEffect)((function(){O(u)}),[u]),n.a.createElement("label",{style:l({},m,{display:"flex",alignItems:"center"}),className:p,onClick:function(e){return d?null:k(e)}},T&&y&&n.a.createElement("span",{className:h,style:b},y)||null,o||n.a.createElement("span",null,n.a.createElement("div",{style:l({},N,{height:E,width:E,borderWidth:i,borderColor:t,borderStyle:r,borderRadius:a,display:"flex",alignItems:"center",justifyContent:"center",cursor:d?"not-allowed":""}),className:c},C&&x||null,n.a.createElement("input",{ref:g,type:"checkbox",name:v,checked:C,value:j,onChange:k,disabled:d,hidden:!0}))),!T&&y&&n.a.createElement("span",{className:h,style:b},y)||null)};o.defaultProps={borderColor:"#D7C629",borderStyle:"solid",borderWidth:2,borderRadius:5,checked:!1,disabled:!1,right:!1,name:"",size:18,style:{},className:"",labelStyle:{marginLeft:5},labelClassName:"",containerStyle:{},containerClassName:"",value:"",onChange:null,icon:n.a.createElement("div",{style:{backgroundColor:"#D7C629",borderRadius:5,padding:5}})};var c=o;t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{icon:n.a.createElement(i.a,{style:{color:"#04724d",backgroundColor:"#fff",height:"16px",width:"16px"}}),name:"my-input",checked:e.checked,onChange:e.onChange,borderColor:e.borderColor,borderRadius:e.borderRadius,style:{cursor:"pointer",backgroundColor:"#fff"},labelStyle:e.labelStyle?e.labelStyle:{marginLeft:15,userSelect:"none",fontSize:"14px",fontWeight:"500"},label:e.label,size:e.size,disabled:e.disabled}))}},656:function(e,t,a){"use strict";var s=a(1),n=a.n(s),r=(a(657),a(372));t.a=function(e){return n.a.createElement("div",{className:"main-questionType"},n.a.createElement("div",{className:"select-questions"},"Select Question Type"),e.questionTypes.map((function(t){return n.a.createElement("div",{className:"question-type"},n.a.createElement(r.a,{checked:t.checked,labelStyle:{marginLeft:15,userSelect:"none",fontSize:"12px",fontWeight:"500"},size:20,borderRadius:2,borderColor:"#04724d",label:t.label,onChange:function(){e.handleChange(t)}}))})))}},657:function(e,t,a){}}]);
//# sourceMappingURL=38.62cf9cc5.chunk.js.map