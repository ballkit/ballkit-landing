
import { useEffect, useRef } from 'react';

interface QrCodeProps {
  className?: string;
}

export const QrCode = ({ className = '' }: QrCodeProps) => {
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createQrPattern = () => {
      if (!qrRef.current) return;
      
      // Clear previous content
      qrRef.current.innerHTML = '';
      
      // Create QR pattern (simplified representation)
      const size = 7;
      const fragment = document.createDocumentFragment();
      
      // Create positioning squares (corners)
      const corners = [
        [0, 0], [0, 1], [0, 2], 
        [1, 0], [1, 2], 
        [2, 0], [2, 1], [2, 2],
        
        [0, size-3], [0, size-2], [0, size-1], 
        [1, size-3], [1, size-1], 
        [2, size-3], [2, size-2], [2, size-1],
        
        [size-3, 0], [size-3, 1], [size-3, 2], 
        [size-2, 0], [size-2, 2], 
        [size-1, 0], [size-1, 1], [size-1, 2]
      ];
      
      // Create random pattern for data cells
      const randomCells = [];
      for (let i = 0; i < 24; i++) {
        const x = Math.floor(Math.random() * (size - 1)) + 1;
        const y = Math.floor(Math.random() * (size - 1)) + 1;
        
        // Skip corner positioning cells
        if ((x < 3 && y < 3) || (x < 3 && y > size - 4) || (x > size - 4 && y < 3)) {
          continue;
        }
        
        randomCells.push([x, y]);
      }
      
      // Create grid
      const grid = document.createElement('div');
      grid.className = 'grid gap-1';
      grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      
      // Fill grid
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const cell = document.createElement('div');
          
          // Check if it's a corner cell
          const isCorner = corners.some(([cx, cy]) => cx === x && cy === y);
          
          // Check if it's a random data cell
          const isRandomCell = randomCells.some(([rx, ry]) => rx === x && ry === y);
          
          if (isCorner || isRandomCell) {
            cell.className = 'bg-primary-dark rounded-sm aspect-square';
          } else {
            cell.className = 'bg-transparent rounded-sm aspect-square';
          }
          
          grid.appendChild(cell);
        }
      }
      
      fragment.appendChild(grid);
      qrRef.current.appendChild(fragment);
    };
    
    createQrPattern();
    
    // Recreate on resize
    const handleResize = () => createQrPattern();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={qrRef} 
      className={`w-full max-w-[180px] aspect-square p-4 bg-white rounded-xl shadow-md ${className}`}
      aria-label="QR-код программы лояльности"
    ></div>
  );
};

export default QrCode;
