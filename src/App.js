import './App.scss';
import Landing from './components/Landing';
import Project from './components/Project';
import ProjectCard from './components/ProjectCard';
const projects = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  return (
    <div className='App'>
      <Landing />
      <div className='container-projects p-4'>
        {projects.map((p) => (
          <ProjectCard key={p} />
        ))}
      </div>
      <Project />
    </div>
  );
}

export default App;
