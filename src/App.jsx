import ProjectSideBar from "./Components/ProjectSideBar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar/>
  <NoProjectSelected/>
    </main>
  );
}

export default App;
