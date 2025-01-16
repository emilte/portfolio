import { Route, Routes } from 'react-router-dom';

import { HealthPage, HomePage, SolarSystemPage } from '~/Pages';
import { ROUTES } from '~/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.frontend.home} element={<HomePage />} />
      <Route path={ROUTES.frontend.health} element={<HealthPage />} />
      <Route path={ROUTES.frontend.solar_system} element={<SolarSystemPage />} />
    </Routes>
  );
}
