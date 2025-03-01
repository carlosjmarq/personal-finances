import { Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { TooltipProvider } from './contexts/Tooltip/TooltipProvider';
import { useModal } from './hooks/useModal';
import ModalOrchestrator from './components/Modal/ModalOrchestrator';
import { DELETE_DASHBOARD } from './constants/ModalTypes';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const { openModal } = useModal();
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Toaster richColors />
        <ModalOrchestrator />
        <Suspense fallback={<div>Loading...</div>}>
          <h1
            onClick={() =>
              openModal(DELETE_DASHBOARD, {
                title: 'DELETE DASHBOARD',
                subtitle: 'Are you sure you want to delete this dashboard?',
                description: 'This action cannot be undone',
              })
            }
          >
            Hello{' '}
          </h1>
          <h3>{count}</h3>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </Suspense>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
