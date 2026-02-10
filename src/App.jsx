import { Route, Routes, Navigate } from "react-router-dom";
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
import UsersPage from "./Common/Admin/Users/UserPage";
import AdminPaymentPage from "./Common/Admin/Payments/AdminPaymentPage";
import TeamsPage from "./Common/Admin/Teams/TeamsPage";
import LibraryPage from "./Common/Admin/Library/LibraryPage";
import CertificatesPage from "./Common/Admin/Certificates/CertifcatesPage";
import AnalyticsPage from "./Common/Admin/Analytics/AnalyticsPage";
import AddUserPage from "./Common/Admin/Users/AddUserPage";

/* ================= SERVICES ================= */
import ServicesPage from "./Common/Admin/Services/ServicePage";
import FoodServicePage from "./Common/Admin/Services/FoodService";
import AddFoodService from "./Common/Admin/Services/AddFoodService";
import LoanAdminDashboard from "./Common/Admin/Services/PersonalLoan";
import EducationService from "./Common/Admin/Services/EducationalService";

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

          {/* ========= ADMIN ROUTES ========= */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="announcements" replace />} />

            <Route path="announcements" element={<AnnouncementsPage />} />

            {/* Users */}
            <Route path="users">
              <Route index element={<UsersPage />} />
              <Route path="add" element={<AddUserPage />} />
            </Route>

            <Route path="payments" element={<AdminPaymentPage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="certificates" element={<CertificatesPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />

            {/* ===== SERVICES (FIXED) ===== */}
            <Route path="services">
              <Route index element={<ServicesPage />} />

              <Route path="foodservices">
                <Route index element={<FoodServicePage />} />
                <Route path="add" element={<AddFoodService />} />
              </Route>

              {/* ✅ Personal Loan is a SIBLING */}
              <Route path="loan" element={<LoanAdminDashboard />} />
              <Route path="education" element={<EducationService/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
