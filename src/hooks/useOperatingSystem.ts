import { useState, useEffect } from 'react';

type OperatingSystem = 'windows' | 'macos' | 'ubuntu' | 'linux' | 'unknown';

export const useOperatingSystem = (): OperatingSystem => {
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystem>('unknown');

  useEffect(() => {
    const detectOS = (): OperatingSystem => {
      const userAgent = navigator.userAgent.toLowerCase();
      
      if (userAgent.includes('win')) {
        return 'windows';
      } else if (userAgent.includes('mac')) {
        return 'macos';
      } else if (userAgent.includes('ubuntu')) {
        return 'ubuntu';
      } else if (userAgent.includes('linux')) {
        return 'linux';
      }
      
      return 'unknown';
    };

    setOperatingSystem(detectOS());
  }, []);

  return operatingSystem;
};

export const getOSClass = (os: OperatingSystem): string => {
  switch (os) {
    case 'windows':
    case 'ubuntu':
    case 'linux':
      return 'os-windows os-ubuntu';
    case 'macos':
      return 'os-macos';
    default:
      return '';
  }
}; 