import * as React from "react";
import Layout from "./views/Layout";
import CourseTable from "./views/CourseTable";
import Dashboard from "./views/Dashboard";
import { Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


function App({ Component }) {
  return (
    <ChakraProvider>
      <Switch>
        <Route path="/courses">
          <Layout>
            <CourseTable />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
           <Dashboard />
          </Layout>
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
