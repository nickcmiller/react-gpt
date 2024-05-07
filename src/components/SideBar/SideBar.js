import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <a href="#dashboard" className="nav-link active"><i className="nav-icon fas fa-home"></i>Dashboard</a>
      <a href="#team" className="nav-link"><i className="nav-icon fas fa-users"></i>Team</a>
      <a href="#projects" className="nav-link"><i className="nav-icon fas fa-folder-open"></i>Projects</a>
      <a href="#calendar" className="nav-link"><i className="nav-icon fas fa-calendar-alt"></i>Calendar</a>
      <a href="#documents" className="nav-link"><i className="nav-icon fas fa-file-alt"></i>Documents</a>
      <a href="#reports" className="nav-link"><i className="nav-icon fas fa-chart-line"></i>Reports</a>
      <div className="teams-section">
        <div>Your teams</div>
        <a href="#heroicons" className="team-link">Heroicons</a>
        <a href="#tailwind" className="team-link">Tailwind Labs</a>
        <a href="#workcation" className="team-link">Workcation</a>
      </div>
      <a href="#settings" className="nav-link"><i className="nav-icon fas fa-cog"></i>Settings</a>
    </div>
  );
}

export default SideBar;