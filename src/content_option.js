import Photo from "./assets/images/Photo.png";
import JavascriptImg from "./assets/images/JavaScript-logo.png";
import ReactImg from "./assets/images/images.png";
import NodeJSImg from "./assets/images/2560px-Node.js_logo.svg.png";
import ExpressImg from "./assets/images/express.png";

const logotext = "Abhishek kasturay";
const meta = {
  title: "Abhishek kasturay",
  description: "I’m Abhishek kasturay_ Full stack devloper",
};

const introdata = {
  title: "I’m Abhishek kasturay",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
  },
  description:
    "A capable and versatile young coder whose enthusiasm is highly contagious. I am well grounded in using different programming languages and frameworks,with a strong foundation in both frontend and backend technologies, as well as database management. My strength lies in having excellent communication skills and being collaborative, combined with an ability to rapidly grasp new technologies and ideas underscored by a firm dedication to producing good code. Currently, I am looking for chances to join lively development teams and improve my skills in an environment that promotes learning.",
  your_img_url: Photo,
};

const dataabout = {
  title: "About my self",
  aboutme:
    " I am an enthusiastic programmer with a sense of adventurism and a philanthropic heart. Whenever not buried by lines of coding, you will probably find me exploring new places with my camera, to capture the beauty of our world. My creativity and perceptions are enhanced by travelling which enriches both my personal and professional life.I am passionate about programming, it is more than just a profession to me. I enjoy figuring out problems and then being able to create things from scratch. However what really motivates me is the ability to apply my knowledge in helping others. Whether its creating innovative solutions or giving back to the community through volunteering, I believe that technology has the capacity to make a positive societal impact.I can hardly wait to be part of your team; an active one where I can contribute my knowledge as well as face challenging moments which come with growth opportunities.",
};

const skills = [
  {
    name: "Javascript",
    image: JavascriptImg,
    value: 90,
  },
  {
    name: "React",
    image: ReactImg,
    value: 85,
  },
  {
    name: "NodeJS",
    image: NodeJSImg,
    value: 80,
  },
  {
    name: "Express",
    image: ExpressImg,
    value: 60,
  },
  {
    name: "Jquery",
    value: 85,
  },
];

const dataportfolio = [];

const contactConfig = {
  YOUR_EMAIL: "abhishekkasturay2@gmail.com",
  YOUR_PHONE: "+91-8659888967",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  YOUR_SERVICE_ID: "service_errz435",
  YOUR_TEMPLATE_ID: "template_knukl5h",
  YOUR_Public_Key: "04wKDri_UyNpvP-Yi",
};

const socialprofils = {
  github: "https://github.com/Abhishekkasturay",
  facebook: "https://www.facebook.com/abhishek.kasturay",
  linkedin: "https://www.linkedin.com/in/abhishek-kasturay-8a199585/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
