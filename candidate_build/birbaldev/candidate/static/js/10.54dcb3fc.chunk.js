(this["webpackJsonpadmin-hire-tool-frontend"]=this["webpackJsonpadmin-hire-tool-frontend"]||[]).push([[10],{205:function(e,t,a){"use strict";a.r(t);var s,n,r=a(8),i=a.n(r),o=a(80),d=a(90),l=a(46),c=a(47),u=a(91),p=a(64),m=a(63),g=a(0),h=a.n(g),f=a(711),v=a(15),b=a(12),E=a(33),U=a(28),D=a(709),I=a(653),w=a.n(I),N=a(654),x=a.n(N),y=a(655),S=a.n(y),R=a(237),A=a(32),O=a(260),k=a.n(O),P=a(650),C=a.n(P),F=(a(651),a(268)),q=a.n(F),j=a(652),T=a.n(j),B=a(23),M=a(92),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={email:"",userName:"",phoneNumber:"",pdf:"",selectedFile:null,emailError:"",phoneNumberError:"",userNameError:"",pdfError:"",jdId:"",scheduleID:"",uniqueId:"",userID:"",candidateId:"",isDataArrived:!0,mobile:!0,laptop:!0,buttonDisabled:!0,submitting:"",startTime:"",endTime:"",progress:0,pageDisabled:!1,testId:"",indexDb:null,askToUpload:!1,listfQuestions:[],continue:!1},e.handleClickShowPassword=function(){e.setState({showPassword:!e.state.showPassword})},e.handleMouseDownPassword=function(e){e.preventDefault()},e.handleChange=function(t,a){e.setState(Object(d.a)({},a,t.target.value))},e.onFileChange=function(t){if(t&&t.target&&t.target.files&&t.target.files[0]&&t.target.files[0].name&&t.target.files[0].size){var a=Math.round(t.target.files[0].size/1024);/(\.pdf|\.doc|\.docx)$/i.exec(t.target.files[0].name)&&parseInt(a)<=5120?e.setState({pdf:t.target.files[0],pdfError:""}):e.setState({pdfError:"please upload resume in pdf,doc or docx format with size not more than 5 MB",pdf:"",submitting:""})}},e.buttonClick=function(t,a,r,i,o,d){if(e.state.pdf){var l=new FormData;l.append("resume",e.state.pdf),localStorage.setItem("loginClicked",!0);var c=Object(u.a)(e),p=new XMLHttpRequest;p.timeout=6e5,s=!1,p.upload.addEventListener("progress",(function(e){var t=e.loaded/e.total*100;s||(s=(new Date).getTime()),t>=98&&(n=(new Date).getTime()+50),c.props.UserAction.addUserProgress({progress:t})}),!1),p.addEventListener("load",(function(e){if(201==e.target.status)c.props.UserAction.addUserSuccess(JSON.parse(e.target.responseText)),n||(n=(new Date).getTime()),c.ShowData();else{var t=e.target.responseText&&JSON.parse(e.target.responseText)&&JSON.parse(e.target.responseText).message;A.store.addNotification({title:"Error",message:t,type:"danger",container:"top-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3}}),c.setState({submitting:""})}}),!1),p.addEventListener("error",(function(e){c.props.UserAction.addUserError({error:e.response&&e.response.data&&e.response.data.message}),A.store.addNotification({title:"Error",message:e.response&&e.response.data&&e.response.data.message,type:"danger",container:"top-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3}})}),!1),p.addEventListener("abort",(function(e){}),!1),p.open("POST","".concat(B.a,"/response")),p.setRequestHeader("Authorization",localStorage.getItem("tokenNew")),p.send(l),e.setState({submitting:"Uploading Resume.Will Redirect....",pdfError:""})}else e.setState({pdfError:"Please Upload Resume",submitting:""})},e.ShowData=function(){var t=(n-s)/1e3,a=e.state.pdf&&8*e.state.pdf.size;console.log(s,n,a,t,"SPEED IN mbps",a/t/1048576);var r=(a/t/1024/1024).toFixed(2);localStorage.setItem("uploadSpeed",r)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.UserAction.getHealth(),t=indexedDB.open("elephantFiles",2),a=null,s=this,t.onsuccess=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=t.target.result,r=n.transaction(["videoAnswers"],"readwrite"),(o=r.objectStore("videoAnswers").getAll()).onsuccess=function(){a=o.result,s.setState({indexDb:a})},n.onerror=function(e){console.log("Error creating/accessing IndexedDB database")}}catch(i){console.log("indexdb err",i)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onupgradeneeded=function(e){e.target.result.createObjectStore("videoAnswers",{keyPath:"questionId"})},M.a.pageview("".concat("/birbaldev/candidate","/login")),e.next=9,localStorage.setItem("tokenNew",window.location.pathname.split("/").pop());case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(i.a.mark((function e(t,a){var s,n,r,o,d,l,c,u=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t&&t.UserReducer,n=this.props&&this.props.UserReducer,s.userDataResponse===n.userDataResponse||!n.userDataResponse||!n.isUserDataAdded){e.next=9;break}return r=n.userDataResponse,o=r.newResponse,d=r.response,r.questions,e.next=6,localStorage.setItem("responseId",d&&d.id);case 6:d&&d.id&&this.props.UserAction.addEvent({responseId:d.id,event:{type:"api",level:1,metadata:{detail:"Logged in for interview"},timestamp:(new Date).toISOString()}}),setTimeout((function(){if(A.store.addNotification({title:"Success",message:"Logged in successfully",type:"success",container:"top-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3}}),o){var e=indexedDB.deleteDatabase("elephantFiles");e.onsuccess=function(){console.log("Deleted database successfully")},e.onerror=function(){console.log("Couldn't delete database")},e.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},d&&d.id&&u.props.UserAction.addEvent({responseId:d.id,event:{type:"debug",level:1,metadata:{detail:"IndexDb status",indexDbStatus:"indexDb not created"},timestamp:(new Date).toISOString()}}),d&&d.id&&u.props.UserAction.addEvent({responseId:d.id,event:{type:"debug",level:3,metadata:{Page:"Instruction"},timestamp:(new Date).toISOString()}}),u.props.history.push({pathname:"/Instructions",state:n.userDataResponse})}else if(u.state.indexDb&&u.state.indexDb.length>0){var t=d.verbalQuestions,a=d.mcqQuestions,s=d.codingQuestions,r=t.concat(a);(r=r.concat(s)).find((function(e){return 4!=e.statusCode}))&&u.setState({askToUpload:!0,listfQuestions:r});var i=[];u.state.indexDb.map((function(e){i.push({questionId:e.questionId,responseId:localStorage.getItem("responseId"),type:e.type,questionStatus:e.questionStatus})})),d&&d.id&&u.props.UserAction.addEvent({responseId:d.id,event:{type:"debug",level:1,metadata:{detail:"IndexDb status",indexDbStatus:i.length?i:"indexDb is Empty!"},timestamp:(new Date).toISOString()}})}else d&&d.id&&u.props.UserAction.addEvent({responseId:d.id,event:{type:"debug",level:1,metadata:{detail:"IndexDb status",indexDbStatus:"indexDb is Empty!"},timestamp:(new Date).toISOString()}}),d&&d.id&&u.props.UserAction.addEvent({responseId:d.id,event:{type:"debug",level:3,metadata:{Page:"Preview"},timestamp:(new Date).toISOString()}}),u.props.history.push({pathname:"/preview",state:n.userDataResponse})}),500),localStorage.setItem("login",!0);case 9:a.continue!==this.state.continue&&this.state.continue&&(l=this.state.listfQuestions,c=this,this.state.indexDb&&this.state.indexDb.length>0&&this.state.indexDb.map((function(e){var t=l&&l.length>0&&l.find((function(t){return e.questionId===t.id}));if(t&&4!==t.statusCode){var a=new FormData;console.log(e.videoFile),a.append("video",e.videoFile,e.videoFileName),e.screenFile&&a.append("video",e.screenFile,e.screenFileName),a.append("timeTaken",e.timeTaken),e.events&&a.append("events",e.events),e.chosenOption&&a.append("chosenOption",e.chosenOption);var s={questionId:e.questionId,responseId:localStorage.getItem("responseId"),type:e.type,questionStatus:e.questionStatus,formdata:a};c.props.UserAction.updateResponse(s),indexedDB.open("elephantFiles",2).onsuccess=function(t){var a=t.target.result;a.transaction(["videoAnswers"],"readwrite").objectStore("videoAnswers",{keyPath:"questionId"}).delete("".concat(e.questionId)),a.onerror=function(e){console.log("Error creating/accessing IndexedDB database")}}}})),this.props.UserAction.addUser(),this.setState({indexDb:null})),s.isGetHealth!==n.isGetHealth&&n.isGetHealth&&n.health&&n.health.data&&("OK"==n.health.data?this.props.UserAction.getUser():this.props.history.push({pathname:"/maintainance",state:{errorMessage:n.health.data}})),s.isHealthError!==n.isHealthError&&n.isHealthError&&this.props.history.push({pathname:"/maintainance",state:{errorMessage:"The site is temporarily down for maintainance"}});case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=h.a.createElement("img",{src:T.a});return this.state.askToUpload?h.a.createElement("div",{className:"MessageDiv"},h.a.createElement("div",{className:"birbal-logo1"},h.a.createElement("img",{src:k.a,alt:"logo1"})),h.a.createElement("div",{className:"messageArea"},h.a.createElement("div",null,"We have found your partial Submission Do you want to continue with your submission"),h.a.createElement("div",{className:"button-div"},h.a.createElement(R.a,{variant:"contained",className:"Button",onClick:function(){return e.setState({continue:!0})}},"Yes")))):this.state.pageDisabled?0==this.state.mobile?h.a.createElement("div",null,"Please use a Laptop/PC to continue with the Interview process!"):0==this.state.laptop?h.a.createElement("div",null,"Please use a Mobile/Tab to continue with the Interview process!"):null:h.a.createElement("div",{className:"log-home"},h.a.createElement("div",{className:"container"},h.a.createElement("div",{className:"div-wrapper"},h.a.createElement("div",{className:"div-1-wrapper"},h.a.createElement("div",{className:"birbal-logo"}," ",h.a.createElement("img",{src:k.a,alt:"logo"})),h.a.createElement("div",{className:"login_instr"},h.a.createElement("h6",{className:"mb-50"},"Basic Instructions"),h.a.createElement("div",{className:"list"},h.a.createElement("div",{className:"point-wrapper"},h.a.createElement("div",{className:"bullet"}),h.a.createElement("div",{className:"point-content"}," ",h.a.createElement("p",null,"Please ensure that you are on a laptop or desktop."))),h.a.createElement("div",{className:"point-wrapper"},h.a.createElement("div",{className:"bullet"}),h.a.createElement("div",{className:"point-content"}," ",h.a.createElement("p",null,"Ensure your internet connection is stable."))),h.a.createElement("div",{className:"point-wrapper"},h.a.createElement("div",{className:"bullet"}),h.a.createElement("div",{className:"point-content"}," ",h.a.createElement("p",null,"Check your headphones before using them. Your mic should be working."))),h.a.createElement("div",{className:"point-wrapper"},h.a.createElement("div",{className:"bullet"}),h.a.createElement("div",{className:"point-content"}," ",h.a.createElement("p",null,"Please ensure that the audio quality of your laptop / desktop is good.")))))),h.a.createElement("div",{className:"div-2-wrapper"},h.a.createElement("div",{className:"birbal-logo-new"}," ",h.a.createElement("img",{src:k.a,alt:"logo"})),h.a.createElement("div",null,h.a.createElement("div",{className:"login-form"},h.a.createElement("div",{className:"img-login"},h.a.createElement("img",{className:"log-img",src:C.a}),h.a.createElement("h2",{className:"login-bold-text"},"Login")),h.a.createElement("div",{className:"card"},h.a.createElement("form",{className:"input-form"},h.a.createElement("div",{class:"form-group"},h.a.createElement("label",{for:"exampleFormControlInput1"},"Full Name"),h.a.createElement(f.a,{type:"text",class:"form-control",disabled:"true",id:"exampleFormControlInput1",value:this.state.userName,onChange:function(t){return e.handleChange(t,"userName")},InputProps:{startAdornment:h.a.createElement(D.a,{position:"start"},h.a.createElement(w.a,null))}})),h.a.createElement("div",{class:"form-group"},h.a.createElement("label",{for:"exampleFormControlInput1"},"Email"),h.a.createElement(f.a,{type:"email",class:"form-control",disabled:"true",id:"exampleFormControlInput1",value:this.state.email,onChange:function(t){return e.handleChange(t,"email")},InputProps:{startAdornment:h.a.createElement(D.a,{position:"start"},h.a.createElement(x.a,null))}})),h.a.createElement("div",{class:"form-group"},h.a.createElement("label",{for:"exampleFormControlInput1"},"Phone Number"),h.a.createElement(f.a,{type:"text",class:"form-control",id:"exampleFormControlInput1",value:this.state.phoneNumber,disabled:"true",onChange:function(t){return e.handleChange(t,"phoneNumber")},InputProps:{startAdornment:h.a.createElement(D.a,{position:"start"},h.a.createElement(S.a,null))}})),h.a.createElement("div",null,"Resume",h.a.createElement("br",null),h.a.createElement("div",{className:"upload-photo",style:{cursor:"pointer"},onClick:function(){return e.refs.fileUploader.click()}},h.a.createElement("div",{className:"flex-div"},h.a.createElement("img",{src:q.a}),h.a.createElement("input",{type:"file",id:"file",ref:"fileUploader",style:{display:"none"},accept:"application/pdf,application/msword,\r application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:function(t){return e.onFileChange(t)}}),h.a.createElement("div",{className:"text-upload"},"Upload Your Resume"," "))),h.a.createElement("div",{className:"text-upload"},this.state.pdf&&this.state.pdf.name?this.state.pdf.name:null),this.state.pdfError?h.a.createElement("div",{className:"error"},this.state.pdfError):null,this.state.submitting?h.a.createElement("div",{style:{fontSize:"13px",color:"#7A7A7A"}},h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"5px 0"}},h.a.createElement("div",{style:{marginRight:"5px"}},t),h.a.createElement("div",null," ",this.state.submitting)),h.a.createElement("div",{style:{textAlign:"center"}},this.state.progress.toFixed(1),"%")):null)),h.a.createElement("div",{className:"button-div"},h.a.createElement(R.a,{variant:"contained",className:"Button",disabled:this.state.buttonDisabled,onClick:function(){return e.buttonClick(e.state.jdId,e.state.scheduleID,e.state.uniqueId,e.state.userID,e.state.candidateId,e.state.testId)}},"Login")))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e&&e.UserReducer&&e.UserReducer.addUserProgress&&(t.progress=e.UserReducer.addUserProgress),e&&e.UserReducer&&e.UserReducer.userError&&(e.UserReducer.userError="",t.submitting=""),e&&e.UserReducer&&e.UserReducer.getUserData&&e.UserReducer.getUserData.data&&t.isDataArrived&&(t.isDataArrived=!1,e.UserReducer.getUserData.data.responsePresent&&e.UserAction.addUser(),t.userName=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.candidatename,t.phoneNumber=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.candidatesphone,t.email=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.candidateemail,t.jdId=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.jdId,t.scheduleID=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.scheduleID,t.uniqueId=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.uniqueId,t.userID=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.userID,t.candidateId=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.candidateId,t.testId=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.testId,t.mobile=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.mobile,t.laptop=e.UserReducer.getUserData.data&&e.UserReducer.getUserData.data.laptop,(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.screen.width<=1024)&&e.UserReducer.getUserData.data&&0==e.UserReducer.getUserData.data.mobile||(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.screen.width>=1024)&&e.UserReducer.getUserData.data&&0==e.UserReducer.getUserData.data.laptop?t.pageDisabled=!0:(t.buttonDisabled=!1,t.pageDisabled=!1)),t}}]),a}(h.a.Component);t.default=Object(E.b)((function(e){return{UserReducer:e.UserReducer}}),(function(e){return{UserAction:Object(U.b)(b,e)}}))(Object(v.e)(L))},260:function(e,t,a){e.exports=a.p+"static/media/login_page_logo.d598eaad.png"},268:function(e,t,a){e.exports=a.p+"static/media/uploadIcon.6365cfe0.png"},650:function(e,t,a){e.exports=a.p+"static/media/login-form-img.4ae46fa6.png"},651:function(e,t,a){},652:function(e,t,a){e.exports=a.p+"static/media/caution.f6a54f67.svg"}}]);
//# sourceMappingURL=10.54dcb3fc.chunk.js.map