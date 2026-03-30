import noProject from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProjectSelected({onStartAddProject}){
    return <div className='mt-24 text-center w-2/3'>
        <img src={noProject} alt='empty task list'
        className='w-16 h-16 mx-auto object-contain'/>
        <h2 className='font-bold text-stone-500 text-xl my-4' >No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or start with new one </p>

        <p>
           <Button onClick = {onStartAddProject} >Create Project</Button>
        </p>
    </div>
}