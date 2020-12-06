# HackDuke 2020 Propel Education: Connecting students with guidance counselors. 

### Description
**Project Name:** Propel Education. Ambitious high school students need all the support they can get. Our web application serves as a platform where students can enter their goals, and counselors can seamlessly track them. Failing to plan is planning to fail—Propel Education empowers students and counselors to plan together. <br>
**Team Members:** Jake Derry, Han Lim, Zeqi Li, Will Monahan, and Rohan Sanjay. <br>
**Built With:** Django (backend) and React (frontend). <br>

### Devpost Submissioin
##### What track are we submitting to?
> Education
##### What was our inspiration?
> Many public high schools around the country are overcrowded, and counselors struggle to support a large number of students at once. They do not have the time and resources to track each students progress towards achieving their goals. In fact, counselors often don't know a students individual goals unless a student speaks with a counselor directly. Members of our team went to high schools with over 1000 kids in each grade where forming a personal relationship with counselors is daunting. Furthermore, struggling students at such schools do not have the support they need too be monitored and kept on track. Propel Education tackles these important issues in the Education system. Goal setting and progress monitoring are critical for high school students who are navigating a challenging time in their lives. 
##### How did we build it?
> We built a Django REST API on the backend that serves calls on the frontend using React. Students and counselors need accounts, and we manage authentification (sign up and log in). Students can enter their goals (e.g what colleges they would like to go through, what grades they want in certain classes) using an intuitive interface and mark these goals once complete. On the other end, counselors can monitor (add/modify) the goals for each individual student and track progress/provide feedback efficiently in real time. Counselors can also assign/customize different tracks based on student performance. School administrations can perform analytics of what students did throughout school to identify personal goals that lead to success for different groups of students. 
##### What challenges did we run into?
> - Linking all the objects (counselors, students, goals) and patching their interactions on the backend
> - Django circular imports
> - CORS acesss errors with local host testing
> - Frontend API call authentification blocked
> - React nested routing
> - Setting up local Django and React development environment
> - Google cloud deployment
##### What accomplishments are we proud of?
> insert accomplishments
##### What did we learn?
> - Web development! Many of our teams members came in with no prior experience (first hackathon), so Django and React were completely new. 
> - How to setup a frontend to function and communicate with a backend REST API. 
> - It's important to integrate the frontend and backend sooner rather than later to identify discrepancies between what is needed and what is returned. 
> - Mapping out design features beforehand prevents creating components that don't end up being used and saves time in the long run. 
> - Team development projects and solo programming projects are completely different—communication is essential in a team environment where members come in with different skillsets and prior experiences. 
> - Best practices for version control. 
##### What's next?
> - Cloud deployment
> - Implement a feature where students can flag a goal if they need help and alert their counselor 
> - Add timelines to student goals
