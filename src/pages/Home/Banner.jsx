import {motion} from "framer-motion";
import team from "../../assets/team.png";  
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center ">
          <div className="flex-1">
            <motion.img
              src={team}
              animate={{
                y: [0, 15, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1 
             animate={{
              y: [0, 20, 0],
              color: ["red", "green", "blue"],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
             }}
            className="text-5xl font-bold">Latest <motion.span 
            animate={{color: ["#c34e42", "#f9c4ce", "#557958"]}}>Jobs</motion.span> For You!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
