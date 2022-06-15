import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
          <h1>About This Project</h1>
          <p>React App to leave feedback</p>
          <p>
              <Link to='/'>Home</Link>
          </p>
      </div>
    </Card>
  )
}

export default AboutPage
