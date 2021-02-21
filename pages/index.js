import  Link from "next/link";

function About() {
    return (
        <div>
            <div>
            <h3 style={{margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: 30}}>Hello,</h3>
            <h3 style={{margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: 30}} className='sm:p-3'>my name is Joseph Jepson!</h3>
            </div>
            <div className='flex flex-col sm:px-12 mx-auto bg-gray-400 items-center justify-center sm:items-between sm:p-8 sm:flex-row'>
                <div>
                <img className='mx-auto mb-4 sm:mb-0 flex-shrink' src="/Profile_Photo.jpg" alt="Joseph Jepson"/>
                </div>
                <div className='flex-grow sm:p-8'>
                    <p className='sm:text-4xl md:text-6xl text-2xl font-bold'> I am a Full-Stack Developer,</p>
                    <p>with a background in the healthcare industry.</p>
                    <p>Experienced in creating responsive web applications utilizing HTML, CSS, JavaScript, React, Express, Node.js, MySQL, and MongoDB.</p>
                    <p>Checkout my <Link href="/portfolio" className='text-yellow-300 hover:text-black'>portfolio</Link> to see recent projects that I have worked on.</p>
                    <p>Take a look at my <a rel="noreferrer" href="https://docs.google.com/document/d/17X40IT-DeJSXVyl3ppgvui5OrA4x0iaQct5hN7rWVHA/edit?usp=sharing" target="_blank" className='text-yellow-300 hover:text-black'>resume</a> and <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank" className='text-yellow-300 hover:text-black'>GitHub</a> for a more comprehensive overview of my experience.
                </p>
                    <p>If you would like to say hi, you can get in <Link href="/contact" className='text-yellow-300 hover:text-black'>contact</Link>  with me by phone or email!</p>
                </div>
            </div>
        </div>
    );
}

export default About;