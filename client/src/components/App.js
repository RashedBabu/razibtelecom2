import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./navbar/Header";
// import Signup from "./signinFolder/Signup";
import Signin from "./signinFolder/Signin";
import LogicDashboard from "./userFolder/Logic/LogicDashboard";
import EditLogic from "./userFolder/Logic/EditDisplay";
import RibonDashboard from "./userFolder/Ribon/RibonDashboard";
import EditRibon from "./userFolder/Ribon/EditRibon";

import SpeakerDashboard from "./userFolder/Speaker/SpeakerDashboard";
import EditSpeaker from "./userFolder/Speaker/EditSpeaker";
import RibonSwitch from "./userFolder/Ribon-Switch/RibonSwitchDashboard";
import EditSwitch from "./userFolder/Ribon-Switch/EditRibonSwitch";

import BackShellDashboard from "./userFolder/BackShell/BackShellDashboard";
import EditBackShell from "./userFolder/BackShell/EditBackShell";

import SimTryDashboard from "./userFolder/SimTry/SimTryDashboard";
import EditSimTry from "./userFolder/SimTry/EditSimTry";

import OcaDashboard from "./userFolder/Oca/OcaDashboard";
import EditOca from "./userFolder/Oca/EditOca";

import GlassDashboard from "./userFolder/Glass/GlassDashboard";
import EditGlass from "./userFolder/Glass/EditGlass";
import BodyDashboard from "./userFolder/Body/BodyDashboard";
import EditBody from "./userFolder/Body/EditBody";
import NotFound from "./NotFound";
import UserRoute from "./userFolder/UserRoute";

// import AdminRoute from "./AdminRoute";
//import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/" component={Signin} />

          <UserRoute
            exact
            path="/user/dashboard/logic"
            component={LogicDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/logic/edit/:id"
            component={EditLogic}
          />
          <UserRoute
            exact
            path="/user/dashboard/ribon"
            component={RibonDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/ribon/edit/:id"
            component={EditRibon}
          />

          <UserRoute
            exact
            path="/user/dashboard/speaker-dum"
            component={SpeakerDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/speaker-dum/edit/:id"
            component={EditSpeaker}
          />
          <UserRoute
            exact
            path="/user/dashboard/ribon-switch"
            component={RibonSwitch}
          />
          <UserRoute
            exact
            path="/user/dashboard/ribon-switch/edit/:id"
            component={EditSwitch}
          />
          <UserRoute
            exact
            path="/user/dashboard/back-shell"
            component={BackShellDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/back-shell/edit/:id"
            component={EditBackShell}
          />
          <UserRoute
            exact
            path="/user/dashboard/sim-try"
            component={SimTryDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/sim-try/edit/:id"
            component={EditSimTry}
          />
          <UserRoute
            exact
            path="/user/dashboard/oca"
            component={OcaDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/oca/edit/:id"
            component={EditOca}
          />
          <UserRoute
            exact
            path="/user/dashboard/glass"
            component={GlassDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/glass/edit/:id"
            component={EditGlass}
          />

          <UserRoute
            exact
            path="/user/dashboard/body"
            component={BodyDashboard}
          />

          <UserRoute
            exact
            path="/user/dashboard/body/edit/:id"
            component={EditBody}
          />

          {/* <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          /> */}

          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
