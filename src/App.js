import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Layout from './Layout'
import CoursePage from './CoursePage'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// return <BrowserRouter>
//     <Navbar
//       user={user}
//       signOut={signOut}
//     />
//     <Layout
//       user={user}
//     >
//     <Switch>
//       <Route exact path='/'>
//         <Landing 
//           signInWithEmailAndPassword={signInWithEmailAndPassword}
//           user={user}
//           error={error}
//           loading={loading}
//         />
//       </Route>
      
//         <PrivateRoute user={user} exact path='/coach_exercises' component={CoachExercises} />
//         <PrivateRoute user={user} exact path='/training/new' component={NewTraining} />
//         <PrivateRoute user={user} exact path='/training/:id/edit' component={EditTraining} />
//         <PrivateRoute user={user} exact path='/trainings' component={Trainings} />
//         <PrivateRoute user={user} exact path='/trainers' component={Coaches} />
//         <PrivateRoute user={user} exact path='/foods' component={Foods} />
//         <PrivateRoute user={user} exact path='/plates' component={Plates} />
//         <PrivateRoute user={user} exact path='/categories' component={Categories} />
//         <PrivateRoute user={user} exact path='/categories/:id/edit' component={EditCategory} />
//         <PrivateRoute user={user} exact path='/fitness_plans' component={FitnessPlans} />
//         <PrivateRoute user={user} exact path='/eating_plans' component={EatingPlans} />
//     </Switch>
//     </Layout>
//   </BrowserRouter>

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Layout>
      <Switch>
        <Route exact path='/'> <LandingPage /> </Route>
        <Route exact path='/courses/:id'> <CoursePage /> </Route>
      </Switch>
    </Layout>

    </BrowserRouter>
  );
}

export default App;
