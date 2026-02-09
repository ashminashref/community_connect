import { Container, Nav } from 'react-bootstrap';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current tab from the URL path
  const currentTab = location.pathname.split('/').pop() || 'announcements';

  const tabs = [
    "Announcements", "Users", "Payments", 
    "Teams", "Library", "Certificates","Services", "Analytics"
  ];

  return (
    <div className="admin-bg">
      <Container className="py-4">
        {/* Persistent Header */}
        <header className="mb-4">
          <h2 className="fw-bold dashboard-title">Admin Dashboard</h2>
          <p className="text-muted">Manage requests, users, and content</p>
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
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

export default AdminLayout;