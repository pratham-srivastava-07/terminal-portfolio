"use client"
import { Typewriter } from 'react-simple-typewriter';
export default function Art() {
    return (
        <div className="text-3xl font-bold flex items-center justify-center pt-5">
            
          <span>Hi &lt;</span>
          <span>
            <Typewriter
              words={['I am Pratham Srivastava />', 'I am a Student />', 'I am a Full Stack Dev />']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <br />
          <br />
        </div>
      );
}