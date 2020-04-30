import React from 'react';
import { getCourses } from "../api/courseApi";

// === START - FAKE API FOR COURSES - FOR WHEN MOCK API VIA JSON SERVER IS NOT WORKING PROPERLY
const coursesApi = [
    {
      "id": 1,
      "title": "Securing React Apps with Auth0",
      "slug": "react-auth0-authentication-security",
      "authorId": 1,
      "category": "JavaScript"
    },
    {
      "id": 2,
      "title": "React: The Big Picture",
      "slug": "react-big-picture",
      "authorId": 1,
      "category": "JavaScript"
    },
    {
      "id": 3,
      "title": "Creating Reusable React Components",
      "slug": "react-creating-reusable-components",
      "authorId": 1,
      "category": "JavaScript"
    },
    {
      "id": 4,
      "title": "Building a JavaScript Development Environment",
      "slug": "javascript-development-environment",
      "authorId": 1,
      "category": "JavaScript"
    },
    {
      "id": 5,
      "title": "Building Applications with React and Redux",
      "slug": "react-redux-react-router-es6",
      "authorId": 1,
      "category": "JavaScript"
    },
    {
      "id": 6,
      "title": "Building Applications in React and Flux",
      "slug": "react-flux-building-applications",
      "authorId": 1,
      "category": "JavaScript"
    },
    {
      "id": 7,
      "title": "Clean Code: Writing Code for Humans",
      "slug": "writing-clean-code-humans",
      "authorId": 1,
      "category": "Software Practices"
    },
    {
      "id": 8,
      "title": "Architecting Applications for the Real World",
      "slug": "architecting-applications-dotnet",
      "authorId": 1,
      "category": "Software Architecture"
    },
    {
      "id": 9,
      "title": "Becoming an Outlier: Reprogramming the Developer Mind",
      "slug": "career-reboot-for-developer-mind",
      "authorId": 1,
      "category": "Career"
    },
    {
      "id": 10,
      "title": "Web Component Fundamentals",
      "slug": "web-components-shadow-dom",
      "authorId": 1,
      "category": "HTML5"
    },
  ];
  // === END

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then( (courses) => this.setState({ courses: courses }));
  };

  render() {
    return (
      <>
        <h1>Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            { coursesApi.map( course => {
              return (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            }
            )}
          </tbody>
        </table>
      </>
    )
  }
}

export default CoursesPage;
