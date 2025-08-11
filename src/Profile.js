import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <header>
        <h1>Wen Guo</h1>
        <p className="contact">Ontario, CA · email@example.com · (123) 456-7890</p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>Computer science student and former U.S. Navy sailor with experience in Java development and web technologies.</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>Computer Science Bachelor's Degree (In Progress)</p>
      </section>

      <section>
        <h2>Technology Expertise</h2>
        <ul>
          <li>Programming Languages: Java, Python, C++, HTML, CSS, JavaScript, R</li>
          <li>Database Platforms: MySQL</li>
          <li>Libraries: React, Numpy, Pandas</li>
          <li>Tools/Apps: IntelliJ IDEA, VS Code, Jupyter, R Studio, CorelDRAW, Office Suite</li>
        </ul>
      </section>

      <section>
        <h2>Academic Projects (Java)</h2>
        <ul>
          <li>Hotel Reservation Application</li>
          <li>Simple Reddit</li>
          <li>Airline Reservation</li>
        </ul>
      </section>

      <section>
        <h2>Volunteer Experience</h2>
        <h3>United Proud Women</h3>
        <ul>
          <li>Member of the web application team</li>
          <li>Conduct layout design and construction for a variety of websites as assigned.</li>
          <li>Provide technical support to other web design team members as directed.</li>
        </ul>
      </section>

      <section>
        <h2>Work Experience</h2>
        <h3>United States Navy (Nov 2015 - Jun 2020)</h3>
        <ul>
          <li>Stationed at Norfolk Naval Station, VA (CVN-78)</li>
          <li>Established an engraving program and was in charge of the engraving shop.</li>
          <li>Supervised operation and organizational maintenance of engraving systems and specialized equipment.</li>
          <li>Planned and estimated projects, assigned daily projects to junior sailors, completed special projects, and supervised project tracking and reporting.</li>
          <li>Mentored junior sailors to achieve both personal and work-related goals.</li>
          <li>Evaluated junior sailors’ performance on a quarterly basis and coached and trained them accordingly, increasing the quality of work and junior sailors’ motivation.</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
