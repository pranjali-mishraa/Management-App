import ProjectSideBar from "./Components/ProjectSideBar";
import NewProject from "./Components/NewProject";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar/>
      <NewProject/>
    </main>
  );
}

export default App;
