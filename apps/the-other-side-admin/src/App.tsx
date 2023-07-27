import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { MedicalHistoryList } from "./medicalHistory/MedicalHistoryList";
import { MedicalHistoryCreate } from "./medicalHistory/MedicalHistoryCreate";
import { MedicalHistoryEdit } from "./medicalHistory/MedicalHistoryEdit";
import { MedicalHistoryShow } from "./medicalHistory/MedicalHistoryShow";
import { SpecialtyList } from "./specialty/SpecialtyList";
import { SpecialtyCreate } from "./specialty/SpecialtyCreate";
import { SpecialtyEdit } from "./specialty/SpecialtyEdit";
import { SpecialtyShow } from "./specialty/SpecialtyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"the-other-side"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="MedicalHistory"
          list={MedicalHistoryList}
          edit={MedicalHistoryEdit}
          create={MedicalHistoryCreate}
          show={MedicalHistoryShow}
        />
        <Resource
          name="Specialty"
          list={SpecialtyList}
          edit={SpecialtyEdit}
          create={SpecialtyCreate}
          show={SpecialtyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
