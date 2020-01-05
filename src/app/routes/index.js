import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Signin from "./../pages/Signin";
import Student from "./../pages/Students";
import EditStudent from "./../pages/EditStudents";
import CreateStudent from "./../pages/CreateStudents";
import Plans from "./../pages/Plans";
import EditPlan from "./../pages/EditPlans";
import CreatePlans from "./../pages/CreatePlans";
import Registrations from "./../pages/Registrations";
import CreateRegistration from "./../pages/CreateRegistrations";
import HelpQuestion from "./../pages/HelpQuestions";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/students" exact component={Student} isPrivate />
            <Route path="/students/edit" component={EditStudent} isPrivate />
            <Route
                path="/students/create"
                component={CreateStudent}
                isPrivate
            />
            <Route path="/plans" exact component={Plans} isPrivate />
            <Route path="/plans/edit" component={EditPlan} isPrivate />
            <Route path="/plans/create" component={CreatePlans} isPrivate />
            <Route
                path="/registrations"
                exact
                component={Registrations}
                isPrivate
            />
            <Route
                path="/registrations/create"
                component={CreateRegistration}
                isPrivate
            />
            <Route path="/help" exact component={HelpQuestion} isPrivate />
        </Switch>
    );
}
