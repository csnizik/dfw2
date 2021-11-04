import React from 'react';
import Sidebar from '../../03-organisms/navigation/Sidebar/Sidebar';
import Header from '../../03-organisms/components/Header/Header';
import AtAGlance from '../../04-templates/AtAGlance';
import TopMarkets from '../../04-templates/TopMarkets';
import WaterAdventures from '../../04-templates/WaterAdventures';
import ValueGap from '../../04-templates/ValueGap';
import TourismConfidence from '../../04-templates/TourismConfidence';
import FamilySentiment from '../../04-templates/FamilySentiment';
import classNames from 'classnames';

const Home = ({ pathName }) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={classNames('flex', 'min-h-screen', 'overflow-hidden')}>
      <Sidebar
        // sidebarOpen={sidebarOpen}
        // setSidebarOpen={setSidebarOpen}
        pathName={pathName}
      />
      <div
        className={classNames(
          'relative',
          'ml-20',
          'pt-4',
          'sm:ml-0',
          'flex-grow',
          'flex',
          'flex-col',
          'justify-start',
          'overflow-y-scroll',
          'overflow-x-hidden',
          'bg-white-dark'
        )}>
        <Header pathName={pathName} />
        <main>
          <div
            className={classNames(
              'm-6',
              pathName === '/' ? 'grid' : '',
              pathName === '/' ? 'grid-cols-3' : '',
              pathName === '/' ? 'gap-6' : ''
            )}>
            {/* Cards */}
            {pathName === '/' && <AtAGlance pathName={pathName} />}
            {(pathName === '/' || pathName === '/markets') && (
              <TopMarkets pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/water') && (
              <WaterAdventures pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/value') && (
              <ValueGap pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/confidence') && (
              <TourismConfidence pathName={pathName} />
            )}
            {(pathName === '/' || pathName === '/sentiment') && (
              <FamilySentiment pathName={pathName} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
