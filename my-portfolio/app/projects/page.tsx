export default function Home() {
  return (
    <div className="bg-indigo-700 p-20 justify-center font-sans text-white">

        <div className="flex items-start gap-10 bg-indigo-950 p-10 mb-10 rounded-3xl">
            <div className="flex-1">
                <h3 className="text-3xl">( Project Kororā ) - {">"} {"{"}</h3>
                <p className="text-base pt-5 pb-5 pl-10">
                    return <br />
                    “Project Kororā is New Zealand's first student-led CubeSat mission 
                    and Victoria University of Wellington’s first student-run space mission. 
                    As a member of the Pycubed Software team, I am responsible for developing 
                    the core flight software in python, that will control Kororā in space. 
                    Currently, our team is analysing the PyCubed framework and drafting 
                    documentation.”;
                </p>
                <h3 className="text-3xl">{"}"}</h3>
            </div>
            <div className="flex-shrink-0 object-center">
                <img src="/korora.png" alt="Project Kororā team" className="object-cover rounded-3xl w-125 h-80" />
            </div>
        </div>

        <div className="flex items-start gap-10 bg-indigo-950 p-10 mb-10 rounded-3xl">
            <div className="flex-1">
                <h3 className="text-3xl">( recapp ) - {">"} {"{"}</h3>
                <p className="text-base pt-5 pb-5 pl-10">
                    return <br />
                    “In the VUW Hackathon 2025 our team built an app aimed to remove the 
                    performative aspect of social media, encouraging users to focus on 
                    five friends, rather than five hundred followers. Groups are encouraged 
                    (through gamification) to share weekly photos and videos, which are compiled 
                    into a recap montage. I was responsible for implementing the relational database, 
                    which stored users, groups, and media uploads. I used Supabase Buckets to store 
                    user media and CRUD endpoints to integrate the database with the Node.js backend. 
                    Our code was managed on Github version control. I was Voted as MVP of my team.”;
                </p>
                <h3 className="text-3xl">{"}"}</h3>
            </div>
            <div className="flex-shrink-0 object-center">
                <img src="/hackathon.jpg" alt="Hackathon team" className="object-cover rounded-3xl w-125 h-80" />
            </div>
        </div>

        <div className="flex items-start gap-10 bg-indigo-950 p-10 mb-10 rounded-3xl">
            <div className="flex-1">
                <h3 className="text-3xl">( Autonomous Vehicle Challenge ) - {">"} {"{"}</h3>
                <p className="text-base pt-5 pb-5 pl-10">
                    return <br />
                    "Along with my team, I designed an autonomous vehicle using a RPI camera, 
                    motors and colour-sensors to navigate an obstacle course. The robot had 
                    to follow curved paths with 90°, 180° turns, and 360° turns, and dodge 
                    coloured cylinders before pushing a ball off the obstacle course platform. 
                    Our team achieved 100% functionality ahead of schedule. I was in charge of 
                    developing the software for the 90°, 180° and 360° turns, dodging cylinders 
                    and pushing the ball off the platform. For this projecgt I implemented PID 
                    (Proportional, Integral, Derivative) controller mechanism.";
                </p>
                <h3 className="text-3xl">{"}"}</h3>
            </div>
            <div className="flex-shrink-0 object-center">
                <img src="/avc.jpg" alt="AVC robot" className="object-cover rounded-3xl w-125 h-80" />
            </div>
        </div>

        <div className="flex items-start gap-10 bg-indigo-950 p-10 mb-10 rounded-3xl">
            <div className="flex-1">
                <h3 className="text-3xl">( Mountain Hikers ) - {">"} {"{"}</h3>
                <p className="text-base pt-5 pb-5 pl-10">
                    return <br />
                    I created a 2D game with vertical scrolling and parallax. To win the game, 
                    the character must climb to the top of the mountain, while dodging rolling 
                    boulders and eating giant marshmallows. The boulders take a life away and 
                    the marshmallows give a life. At the next level, the mountain is taller, 
                    boulders roll faster, and there are mud puddles that slow down the character 
                    down. I hand-drew all game assets, including characters, backgrounds, obstacles, 
                    and power-ups (using online drawing platforms).
                </p>
                <h3 className="text-3xl">{"}"}</h3>
            </div>
            <div className="flex-shrink-0 object-center">
                <img src="/mountain.png" alt="Mountain hikers game" className="object-cover rounded-3xl w-125 h-80" />
            </div>
        </div>

    </div>
  );
}
