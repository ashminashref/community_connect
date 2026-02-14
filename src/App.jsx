import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./Theme/Themecontext";

/* ================= USER PAGES ================= */
import Home from "./Pages/User/Home";
import Notifications from "./Pages/User/Notifications";
import Profile from "./Pages/User/Profile";
import PaymentPage from "./Components/Payment";
import Certificate from "./Components/Certificate";
import UserDua from "./Pages/User/UserDua";
import Typedua from "./Components/User/Duas/Typedua";

/* ================= ADMIN PAGES ================= */
import AdminLayout from "./Common/Admin/Home/AdminLayout";
import AnnouncementsPage from "./Common/Admin/Announcements/AnnouncementPage";
import AddAnnouncementPage from "./Common/Admin/Announcements/CreateAnnouncementModel";
import UsersPage from "./Common/Admin/Users/UserPage";
import AddUserPage from "./Common/Admin/Users/AddUserPage";
import AdminPaymentPage from "./Common/Admin/Payments/AdminPaymentPage";
import TeamsPage from "./Common/Admin/Teams/TeamsPage";
import AddTeamPage from "./Common/Admin/Teams/CreateTeam";
import LibraryPage from "./Common/Admin/Library/LibraryPage";
import CertificatesPage from "./Common/Admin/Certificates/CertifcatesPage";
import AnalyticsPage from "./Common/Admin/Analytics/AnalyticsPage";

/* ================= SERVICES ================= */
import ServicesPage from "./Common/Admin/Services/ServicePage";
import FoodServicePage from "./Common/Admin/Services/FoodService";
import AddFoodService from "./Common/Admin/Services/AddFoodService";
import LoanAdminDashboard from "./Common/Admin/Services/PersonalLoan";
import EducationService from "./Common/Admin/Services/EducationalService";
import Medicine from "./Common/Admin/Services/Medicene";
import UserMedicinePage from "./Components/UserServices/UserMedicinePage";
import UserEducationPage from "./Components/UserServices/EducationalSupport";
import UserLoanPage from "./Components/UserServices/UserLoanPage";
import UserUdhiyaTeamPage from "./Components/UserTeam/UserUdhiyaTeamPage";
import UserIftarTeamPage from "./Components/UserTeam/UserIfthar";
import UserCleaningTeamPage from "./Components/UserTeam/UserCleaningTeamPage";
import UserProgrammingTeamPage from "./Components/UserTeam/UserProgrammingTeamPage";
import AdminCreateTeamPage from "./Common/Admin/Services/AdminCreateTeamPage";
import UserFoodServicePage from "./Components/UserServices/UserFoodService";

function App() {
  return (
    <ThemeProvider>
      <div className="p-3">
        <Routes>

          {/* ========= USER ROUTES ========= */}
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/typedua" element={<Typedua />} />
          <Route path="/dua" element={<UserDua />} />
          <Route path="/dua/:categoryName" element={<UserDua />} />
          <Route path='/foodservice' element={<UserFoodServicePage/>}/>
          <Route path="/usermedicine" element={<UserMedicinePage/>}/>
          <Route path="/usereducation" element={<UserEducationPage/>}/>
          <Route path="/userloan" element={<UserLoanPage/>}/>
          <Route path='/ifthar' element={<UserIftarTeamPage/>}/>
          <Route path='/uluhiyath' element={<UserUdhiyaTeamPage/>}/>
          <Route path="/cleaning" element={<UserCleaningTeamPage/>}/>
          <Route path="programming" element={<UserProgrammingTeamPage/>}/>

          {/* ========= ADMIN ROUTES ========= */}
          <Route path="/admin" element={<AdminLayout />}>

            {/* Announcements */}
            <Route path="announcements">
              <Route index element={<AnnouncementsPage />} />
              <Route path="add" element={<AddAnnouncementPage />} />
            </Route>

            {/* Users */}
            <Route path="users">
              <Route index element={<UsersPage />} />
              <Route path="add" element={<AddUserPage />} />
            </Route>

            {/* Payments */}
            <Route path="payments" element={<AdminPaymentPage />} />

            {/* Teams */}
            <Route path="teams">
              <Route index element={<TeamsPage />} />
              <Route path="add" element={<AddTeamPage />} />
            </Route>

            {/* ✅ FIXED Library Route */}
            <Route path="library" element={<LibraryPage />} />

            {/* Other Admin Pages */}
            <Route path="certificates" element={<CertificatesPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />

            {/* Services */}
            <Route path="services">
              <Route index element={<ServicesPage />} />
              <Route path="foodservices">
                <Route index element={<FoodServicePage />} />
                <Route path="add" element={<AddFoodService />} />
                <Route path="createteam" element={<AdminCreateTeamPage/>}/>
              </Route>
              <Route path="medical" element={<Medicine/>} />
              <Route path="loan" element={<LoanAdminDashboard />} />
              <Route path="education" element={<EducationService />} />
            </Route>

          </Route>

          {/* ========= 404 ========= */}
          <Route path="*" element={<div>Page Not Found</div>} />

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
