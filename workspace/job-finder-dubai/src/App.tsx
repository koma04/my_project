import { Route, Routes } from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen'
import JobListScreen from './screens/JobListScreen'
import JobDetailScreen from './screens/JobDetailScreen'
import AddJobScreen from './screens/AddJobScreen'
import SavedJobsScreen from './screens/SavedJobsScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/jobs" element={<JobListScreen />} />
      <Route path="/job/:id" element={<JobDetailScreen />} />
      <Route path="/add" element={<AddJobScreen />} />
      <Route path="/saved" element={<SavedJobsScreen />} />
    </Routes>
  )
}

export default App
