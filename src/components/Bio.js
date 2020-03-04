import React from 'react';

const Bio = () => {
    
    return(
        <section id="bio_container">

            <section className="bio-section contained">

                <img src="http://wyattdalton.com/wp-content/uploads/2020/01/untitled-4842-scaled-e1578418307170.jpg" alt="" />
                <div className="content-cluster">

                    <div>
                        <h3>About Me</h3>
                        <p>As a frontend developer, WordPress theme developer, and content creator, I&#8217;ve had some experience in most disciplines of digital marketing. I&#8217;ve taken websites from initial concept, through design, development, content planning and integration, launch, and post-launch support.</p>
                        <p>As a designer, I love thinking out-of-the-box and finding creative solutions to problems.</p>
                        <p>As a developer, I&#8217;m obsessive about finding the best ways to make those out-of-the-box ideas possible.</p>
                        <p>As a content creator, as long as we&#8217;re talking about written content, I&#8217;m about a versatile as they come. I&#8217;ve written everything from social media posts, to emails, blog articles, website copy, ebooks, and technical instructions.</p>
                    </div>

                    <span className="h-sep"></span>

                    <div>
                        <h3> What I know</h3>
                        <p>Below are the languages and technologies that I&#8217;m most familiar with.</p>
                        <ul>
                            <li><img src="http://wyattdalton.com/wp-content/uploads/2020/01/html-logo.png" alt="" /> HTML</li>
                            <li><img src="http://wyattdalton.com/wp-content/uploads/2020/01/css-logo-1.png" alt="" /> CSS</li>
                            <li> <img src="http://wyattdalton.com/wp-content/uploads/2020/01/sass-logo.png" alt="" /> SCSS </li>
                            <li><img src="http://wyattdalton.com/wp-content/uploads/2020/01/js-logo-1.png" alt="" /> JavaScript</li>
                            <li><img src="http://wyattdalton.com/wp-content/uploads/2020/01/jquery-logo.png" alt="" /> jQuery</li>
                            <li><img src="http://wyattdalton.com/wp-content/uploads/2020/01/wordpress-logo.png" alt="" /> Wordpress</li>
                        </ul>
                    </div>

                    <span className="h-sep"></span>

                    <div>
                        <h3> In Development</h3>
                        <p>I&#8217;m always working on expanding my toolset. Right now, that means learning new frontend libraries and getting stronger with backend languages critical to WordPress development.</p>
                        <ul>
                            <li><img src="http://wyattdalton.com/wp-content/uploads/2020/01/React-logo.png" alt="" /> React</li>
                            <li><img src="http://wyattdalton.com/wp-content/uploads/2020/01/PHP-elephant.png" alt="" /> PHP</li>
                        </ul>
                    </div>

                </div>
            </section>

            
            <section className="cta bg-img">
                <img className="bg-img-img" src="http://wyattdalton.com/wp-content/uploads/2020/01/chris-liverani-9cd8qOgeNIY-unsplash-scaled.jpg" alt="" />
                <div className="content-cluster contained">
                <h2>My Personal Mission statement</h2>
                <p>To equip passionate people with the technology and knowledge that enables them to freely pursue their passions</p>
                </div>
            </section>

            
            
            <section className="skills contained">
                <h2>My primary skillset</h2>
                <p>I started using WordPress many years ago as a tool to share my personal writing. My skillset naturally evolved from my need to design, build, and write for my own websites.</p>

                <div className="current cols">
                    <div className="col bg-img">
                        <img src="http://wyattdalton.com/wp-content/uploads/2020/01/domenico-loia-hGV2TfOh0ns-unsplash-scaled.jpg" alt="" className="bg-img-img"/>
                        <div className="content-cluster bg-blurred">
                            <h3>Website Design</h3>
                            <p>I do mobile-first, functional web design. My websites are meant to be interacted with, and they&#8217;re carefully crafted to encourage visitors to take specific actions.</p>
                        </div>
                    </div>
                    <div className="col bg-img">
                        <img src="http://wyattdalton.com/wp-content/uploads/2020/01/markus-spiske-MI9-PY5cyNs-unsplash-scaled.jpg" alt="" className="bg-img-img"/>
                        <div className="content-cluster bg-blurred">
                            <h3>Frontend Development</h3>
                            <p>I primarily use HTML, CSS, and JavaScript to bring my websites to life.</p>
                        </div>
                    </div>
                    <div className="col bg-img">
                        <img src="http://wyattdalton.com/wp-content/uploads/2020/01/fikret-tozak-rfNLa1HL7eY-unsplash-scaled.jpg" alt="" className="bg-img-img"/>
                        <div className="content-cluster bg-blurred">
                            <h3>Wordpress Theme Development</h3>
                            <p>I&#8217;ve always used WordPress as the backend for my websites. As such, when I started out, I quickly learned how to create my own themes by using PHP and taking advantage of the tools that WordPress makes available to developers.</p>
                        </div>
                    </div>
                    <div className="col bg-img">
                        <img src="http://wyattdalton.com/wp-content/uploads/2020/01/adolfo-felix-Yi9-QIObQ1o-unsplash-scaled.jpg" alt="" className="bg-img-img"/>
                        <div className="content-cluster bg-blurred">
                            <h3>Copywriting</h3>
                            <p>I use frameworks and formulas from people much smarter than me, knowledge gained in and out of school, and years of practice with the written word to craft social, email, technical, and web copy.</p>
                        </div>
                    </div>
                </div>

                <span className="h-sep"></span>

                <div className="learning cols">
                    <div className="content-cluster">
                        <h3>Skills in Development</h3>
                        <p>I have big plans for the future. In order to carry out these plans, I need to know more, practice more, and be able to do more. So I&#8217;m driven to learn and growth-oriented—always working to acquire new skills that will help me advance toward the next stage of my digital marketing career.</p>
                        <p>Here&#8217;s what I&#8217;m working on right now.</p>
                    </div>
                    <div className="col bg-img">
                        <img src="http://wyattdalton.com/wp-content/uploads/2020/01/fikret-tozak-rfNLa1HL7eY-unsplash-scaled.jpg" alt="" className="bg-img-img"/>
                        <div className="content-cluster bg-blurred">
                            <h3>Wordpress Plugin Development</h3>
                            <p>Being able to expand the functionality of WordPress with custom plugins will allow me to provide bespoke functionality solutions for clients, and give me a better understanding of the CMS as a whole.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Bio;