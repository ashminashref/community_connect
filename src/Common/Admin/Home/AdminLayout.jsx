import { Container, Nav } from 'react-bootstrap';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './AdminLayout.css';
import ThemeToggle from '../../../UI/ThemeToggle';
const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current tab from the URL path
  const currentTab = location.pathname.split('/').pop() || 'announcements';

  const tabs = [
    "Announcements", "Users", "Payments", 
    "Teams", "Library", "Certificates", "Analytics"
  ];

  return (
    <div className="admin-bg">
      <Container className="py-4">
        {/* Persistent Header with Theme Toggle */}
        <header className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold dashboard-title">Admin Dashboard</h2>
            <p className="text-muted mb-0">Manage requests, users, and content</p>
          </div>

          {/* Integration of your ThemeToggle component */}
          <div className="admin-header-actions">
            <ThemeToggle />
          </div>
        </header>

        {/* The Navigation Navbar */}
        <Nav 
          variant="pills" 
          activeKey={currentTab} 
          onSelect={(selectedKey) => navigate(selectedKey)} 
          className="admin-navbar mb-5 overflow-auto flex-nowrap"
        >
          {tabs.map((tab) => (
            <Nav.Item key={tab}>
              <Nav.Link eventKey={tab.toLowerCase()} className="rounded-pill px-4">
                {tab}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* This is where the specific page content will render */}
        <main className="admin-main-content">
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

export default AdminLayout;