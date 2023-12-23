import React from 'react';
import "./About.css"
import aboutImg from "../../images/about-img.jpg"

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2>About</h2>
                </div>

                <div className='about-content grid'>
                    <div className='about-img'>
                        <img src={aboutImg} alt=""/>
                    </div>
                    <div className='about-text'>
                        <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
                        <p className='fs-17'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias
                            aliquid aspernatur beatae delectus deserunt distinctio dolorem doloremque earum error
                            facilis fuga fugiat fugit illum in officiis quos reiciendis, suscipit, tenetur vel?
                            Asperiores obcaecati, quibusdam. Corporis explicabo impedit libero numquam officia quasi
                            voluptatibus. Harum, quas.</p>
                        <p className='fs-17'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus optio
                            pariatur possimus quam qui quod similique totam! Adipisci aliquid doloribus, id laudantium
                            maiores quaerat quas saepe tempora voluptate voluptatum. Pariatur.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;