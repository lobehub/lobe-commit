import { Box } from 'ink';
import { type ReactNode, memo } from 'react';

import { useTheme } from '@/hooks/useTheme';

export interface ViewProps {
  children: ReactNode;
}
const View = memo<ViewProps>(({ children }) => {
  const theme = useTheme();
  return (
    <Box
      borderBottom={false}
      borderColor={theme.colorBorder}
      borderLeft={false}
      borderRight={false}
      borderStyle={'single'}
      flexDirection={'column'}
    >
      {children}
    </Box>
  );
});

export default View;