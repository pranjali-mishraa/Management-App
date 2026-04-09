import ProjectSideBar from "./Components/ProjectSideBar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./Components/SelectedProject";

function App() {

  const [projectState , setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[]
  });

 

  function handleSelectProject(id){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:id,
      }
    });
  }


  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    });
  }

  function handleCancleAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
      }
    });
  }

  function handleAddProject(projectData){
     setProjectState(prevState=>{
      const newProject ={
          ...projectData,
          id:Math.random()
        };

        return{
          ...prevState,
          selectedProjectId:undefined,
          projects:[...prevState.projects,newProject]
        };
      });
    }

    const selectedProject = projectState.projects.find(
      project => project.id === projectState.selectedProjectId
    );

  let content = <SelectedProject project={selectedProject}/>;

  if(projectState.selectedProjectId===null){
    content = <NewProject onAdd={handleAddProject} onCancle ={handleCancleAddProject}/>;
  }else if (projectState.selectedProjectId===undefined){
    content = <NoProjectSelected  onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">

     

      <ProjectSideBar onStartAddProject={handleStartAddProject} 
      projects = {projectState.projects}
      onSelectProject = {handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
