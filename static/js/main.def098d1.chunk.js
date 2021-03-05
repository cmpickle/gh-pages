(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(233)},164:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(50),s=a.n(r),i=(a(164),a(2)),l=a(5),c=Object(i.withStyles)({label:{color:"#000000",padding:"60px 200px"},image:{width:"400px",height:"200px",objectFit:"contain",backgroundColor:"#FFFFFF"},content:{whiteSpace:"pre-wrap",textAlign:"initial"},roleStyle:{color:"#09f"},card:{margin:"20px",maxWidth:"1000px"},textArea:{padding:"20px"},imageBackground:{backgroundColor:"white"},flair:{width:"100px",height:"100px",margin:"20px",border:"5px solid #08F",objectFit:"contain",borderRadius:"15%",backgroundColor:"#FFF"}})(function(e){var t=e.company,a=e.classes,n=e.children;return o.a.createElement(l.a,{className:a.card},o.a.createElement("div",{className:a.imageBackground},t.image?o.a.createElement("img",{src:t.image,alt:t.name,className:a.image}):o.a.createElement(l.b,{variant:"h2",className:a.label},t.label)),o.a.createElement("div",{className:a.textArea},o.a.createElement(l.b,{variant:"h4",className:a.content},t.name),o.a.createElement(l.b,{className:"".concat(a.content," ").concat(a.roleStyle)},t.position," ",t.timeline),o.a.createElement(l.b,{className:a.content},t.technology),o.a.createElement(l.b,{className:a.content},t.description),t.flairs&&t.flairs.map(function(e){return o.a.createElement("img",{className:a.flair,src:e.path,alt:e.alt})})),n)}),d=a(52),h=a(53),m={banner:{minHeight:"100vh",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:"url("+a.n(h).a+")"},bannerImage:{height:"100vh"},heading:{fontSize:"4.8vw",fontWeight:300,color:"#fff",textShadow:"0 1px 3px rgba(0,0,0,.7)",top:"50%",position:"absolute",left:"50%",textAlign:"center",right:"auto",width:"90%",transform:"translateX(-50%) translateY(-50%)",maxWidth:"1170px"}},g=Object(i.withStyles)(m)(function(e){var t=e.component,a=void 0===t?"div":t,n=e.classes;return o.a.createElement("div",{className:n.banner},o.a.createElement(a,{className:n.heading}))}),p=a(54),u=a.n(p),f=Object(i.withStyles)({appHeader:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",fontize:"calc(10px + 2vmin)",color:"white"},app:{textAlign:"center"},profileImage:{marginTop:"30vh",borderRadius:"50%",border:"4px solid #09f"}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.app},o.a.createElement(g,{component:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:u.a,className:t.profileImage,alt:"Profile"}),o.a.createElement(l.b,{variant:"subtitle1"},"Hello, I'm"),o.a.createElement(l.b,{variant:"h1"},"Cameron Pickle"),o.a.createElement("header",{className:t.appHeader},o.a.createElement(c,{key:100,company:{id:100,label:"About Me",description:"For me Software Engineering is a way of life.\n\nOriginally I planned on being an Electrical Engineer but quickly found that I was obsessed with Software and the problems that I could solve with it (Although I still do enjoy some good hardware work now and again). I began my journey in the software world writing C++ to control Arduinos and was enveloped by the thrill of getting it do what I wanted. I went from the guy who had never written code before to the top of the class because I loved spending time writing code!\n\nI have a passion for constantly learning and stretching myself. I love that software engineering is like a constantly evolving puzzle that I get to learn and adapt to in order to make cool new things faster and with higher quality. I enjoy learning about code, learning best practices, and learning new coding tools. My only complaint is that there isn't enough time in the day to learn everything that I want to!\n\nI started out with Java and C# and ended up enjoying the Microsoft world. I learned about design patterns and became obsessed with writing clean, scalable, and maintainable code. After a while I fell into the world of web development learning Angularjs and React. I took a heavy liking to React and started to learn Go. I then learned about DevOps where I have set up robust scalable deploy processes using docker and Kubernetes and dove into big data with messaging in Kafka and searching with Elastic Search as I continued to branch out and explore the fascinating world of software development. I have worked across many industries including enterprise content management, planning, contact center, automotive, advertising, financial, and dance. I also tend to have a bad habit of becoming the leader of all the teams I work with.\n\nAt home when I am not wake surfing, 3D Printing, automating my home, or reading I like to get in some more coding. I have worked on many personal projects and side projects over the years. I have had fun making Android apps and games, Unity games, scripts and utilities for my personal life and for my family, and as some of my side projects I have built a full dance payment and registration system and a financial advisor lead generator and distributor software.",flairs:[{path:"assets/images/tech/github.png",alt:"C#"},{path:"assets/images/tech/stack-overflow.png",alt:"SQL Server"},{path:"assets/images/tech/linkedin.jpg",alt:"Selenium"}]}},o.a.createElement("img",{src:"https://stackoverflow.com/users/flair/1758235.png?theme=dark",width:"208",height:"58",alt:"profile for cmpickle at Stack Overflow, Q&A for professional and enthusiast programmers",title:"profile for cmpickle at Stack Overflow, Q&A for professional and enthusiast programmers",style:{border:"5px solid rgb(0, 136, 255)",borderRadius:"5px",margin:"40px"}})),d.companies.map(function(e){return o.a.createElement(c,{key:e.id,company:e})})))}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=Object(i.createMuiTheme)({typography:{useNextVariants:!0},palette:{type:"dark"}});s.a.render(o.a.createElement(i.MuiThemeProvider,{theme:w},o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e){e.exports={companies:[{id:5,name:"Rakuten",image:"assets/images/rakuten.png",position:"Senior Software Engineer",timeline:"August 2019 - Present",technology:"Go, React, Vue, GCP, Docker, Kubernetes, postgres, mysql",description:"I worked on a project during which I was working with React for the front end and Go for the backend. I established processes and patterns for the team to follow that increased our productivity and made our code base more maintainable. I also updated the deploy process and migrated from legacy deploy processes to containerized Kubernetes deployments. \n\nI then began work on a new team where I work with Vue on the front end and Go on the backend. I have led many team initiatives, dissecting the project and creating the technical documentation required for the team to begin work. After this project had two failed attempts by previous teams I was able to get the new team ramped up on the project and deliver the product within the required timeline.",flairs:[{path:"assets/images/tech/go.png",alt:"GoLang"},{path:"assets/images/tech/react.png",alt:"React"},{path:"assets/images/tech/vue.png",alt:"Vue"},{path:"assets/images/tech/google-cloud-platform.png",alt:"Google Cloud Platform"},{path:"assets/images/tech/docker.png",alt:"Docker"},{path:"assets/images/tech/kubernetes.png",alt:"Kubernetes"},{path:"assets/images/tech/postgres.png",alt:"Postgres"},{path:"assets/images/tech/mysql.png",alt:"MySQL"}]},{id:4,name:"DealerSocket",image:"assets/images/dealersocket.jpg",position:"Software Engineer II",timeline:"April 2018 - August 2019",technology:"C#, React, AngularJS, Java, AWS, Kafka, Docker, SQL Server",description:"I worked closely with the Front End architect to implement React Redux into our main Front End repository. I also helped create the React Redux template for all future front end repositories to implement.\n\nI was picked to be moved to the search team due to my previous successes at the company where I learned Kafka, ElasticSearch, AWS, Docker, and DevOps. I have been involved in setting up the core infrastructure for DealerSocket's core messaging and searching platform.",flairs:[{path:"assets/images/tech/csharp.png",alt:"C#"},{path:"assets/images/tech/react.png",alt:"React"},{path:"assets/images/tech/angularjs.png",alt:"Angular JS"},{path:"assets/images/tech/java.png",alt:"Java"},{path:"assets/images/tech/aws.png",alt:"Amazon Web Services"},{path:"assets/images/tech/kafka.png",alt:"Kafka"},{path:"assets/images/tech/docker.png",alt:"Docker"},{path:"assets/images/tech/sqlserver.png",alt:"SQL Server"}]},{id:3,name:"inContact",image:"assets/images/nice-incontact.png",position:"Software Engineer II",timeline:"May 2017 - April 2018",technology:"C#, AngularJS, SQL Server",description:"I am a part of the tools team for NICE InContact. I work on tools for our company as well as for our partners who are distributors of our product. I work full stack and build out tools front to back end. I am the product owner of our migration tools to be able to move the data from one of our systems to another. We also create automated testing for all of our products to be able to have a CI/CD environment",flairs:[{path:"assets/images/tech/csharp.png",alt:"C#"},{path:"assets/images/tech/angularjs.png",alt:"Angular JS"},{path:"assets/images/tech/sqlserver.png",alt:"SQL Server"}]},{id:2,name:"Tek Systems",image:"assets/images/tek-systems.png",position:"QA Engineer II",timeline:"February 2017 - May 2017",technology:"Android, Java",description:"I work for the LDS church on their missionary department as a Quality Assurance Engineer. I am working on testing their Android application as well as the hosted database that it connects to. We work in an agile environment. I work closely with the developer and we discuss the ways that they implemented the code for user stories to allow for better understanding and testing.\nI have also been working on the development application. With this I am able to learn the best practices of Android development straight from our team of highly skilled developers.",flairs:[{path:"assets/images/tech/android.png",alt:"Andriod"},{path:"assets/images/tech/java.png",alt:"Java"}]},{id:1,name:"Hyland Software",image:"assets/images/hyland.png",position:"QA Automation Engineer",timeline:"May 2015 - February 2017",technology:"C#, SQL Server, Selenium",description:"As a QA automation tester I have been working on a automation framework for Hyland's OnBase government Modules. This framework will allow other testers with little to no experience with automation and programming to write automated tests with minimal training. This framework will allow for large automated suites that will be able to perform regression tests in a fraction of the time it would take a manual tester to complete as well as reduce the company's costs in manual testing time that the regression tests would take.\n\nI have also been working as a manual tester for Hyland, specializing in their Media testing. The manual testing includes working with developers to make sure that all requirements are met for our user stories and to reduce/eliminate any bugs in the software. This involves exploratory testing, user driven testing, and edge case testing. With this testing I have learned what the user see and looks for when they are using the software along with the back end expertise of being able to configure the product and resolve issues when they arise. This includes debugging based on error messages, constructing complex SQL queries to fix the database, and working with our team to solve any issues that we or the customer come across.",flairs:[{path:"assets/images/tech/csharp.png",alt:"C#"},{path:"assets/images/tech/sqlserver.png",alt:"SQL Server"},{path:"assets/images/tech/selenium.png",alt:"Selenium"}]}]}},53:function(e,t,a){e.exports=a.p+"static/media/olympus.778e886f.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/profile.7c00b37f.jpg"}},[[159,1,2]]]);
//# sourceMappingURL=main.def098d1.chunk.js.map