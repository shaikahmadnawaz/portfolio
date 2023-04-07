import WorkoutTracker from "../images/workout-tracker.png";
import CodeEditor from "../images/code-editor.png";
import WeatherApp from "../images/react-weather-app.png";
import VConnectGlobe from "../images/vconnectglobe.png";

const projects = [
  {
    title: "VCONNECT GLOBE",
    description:
      "Built a study abroad mentorship web application using React and Tailwind CSS, implementing responsive design. Received positive feedback from the client, The client praised my technical and professional abilities and provided a glowing recommendation for future clients.",
    image: VConnectGlobe,
    technologies: ["React", "Tailwind CSS", "Git", "GitHub", "Hostinger"],
    github: "https://github.com/shaikahmadnawaz/vconnectglobe",
    live: "https://vconnectglobe.com/",
  },
  {
    title: "WORKOUT TRACKER",
    description:
      "Developed a workout tracking application using React, Node.js, Express.js, and MongoDB. Implemented authentication and authorization using JSON Web Tokens (JWT), Stored user data securely using MongoDB and encrypted passwords using bcrypt, Allowed users to create, read and delete workout records.",
    image: WorkoutTracker,
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JSON Web Tokens (JWT)",
      "Git",
      "GitHub",
      "Cyclic",
    ],
    github: "https://github.com/shaikahmadnawaz/workout-tracker",
    live: "https://workout-tracker.cyclic.app/signup",
  },
  {
    title: "REAL-TIME CODE EDITOR",
    description:
      "Developed a real-time code editor using React, Node.js, and Express.js. Implemented Web Sockets using socket.io for real-time collaboration, Added feature for creating rooms for multiple users to work on the same code simultaneously. Utilized socket.io for sending and receiving updates in real-time between clients and server.",
    image: CodeEditor,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Git",
      "GitHub",
      "Heroku",
    ],
    github: "https://github.com/shaikahmadnawaz/realtime-code-editor",
    live: "https://realtime-code-editor-project.herokuapp.com/",
  },
  {
    title: "REACT WEATHER APP",
    description:
      "Built a weather application using ReactJS and the OpenWeatherMap API. Implemented API calls using Axios to retrieve weather information and update the user interface in real-time.",
    image: WeatherApp,
    technologies: ["React", "OpenWeatherMap API", "Git", "GitHub", "Vercel"],
    github: "https://github.com/shaikahmadnawaz/react-weather-app",
    live: "https://react-weather-display-application.vercel.app/",
  },
];

export default projects;
