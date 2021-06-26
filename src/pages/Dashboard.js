import React, { useState } from 'react';
import classNames from 'classnames';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={classNames('flex', 'h-screen', 'overflow-hidden')}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* TODO: rm red background */}
      <div
        className={classNames(
          'relative',
          'flex',
          'flex-col',
          'flex-1',
          'overflow-y-auto',
          'overflow-x-hidden',
          'bg-red'
        )}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>main tag in Dashboard.js</main>
      </div>
    </div>
  );
}

export default Dashboard;
