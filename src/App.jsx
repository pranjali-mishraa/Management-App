import ProjectSideBar from "./Components/ProjectSideBar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import { useState } from "react";

function App() {

  const [projectState , seyProjectState] = useState({
    selectedProjectId:undefined,
    projects:[]
  });

  function handleStartAddProject(){
    seyProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  let content;

  if(projectState.selectedProjectId===null){
    content = <NewProject/>;
  }else if (projectState.selectedProjectId===undefined){
    content = <NoProjectSelected  onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">

     

      <ProjectSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
