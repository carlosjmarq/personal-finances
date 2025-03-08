import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { TooltipProvider } from './contexts/Tooltip/TooltipProvider';
import ModalOrchestrator from './components/Modal/ModalOrchestrator';
import { Router } from './Router';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Toaster richColors />
        <ModalOrchestrator />
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
