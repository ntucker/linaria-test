import { css, cx } from '@linaria/core';
import { memo, useState, ReactNode, createContext, useCallback } from 'react';
import { lighten } from 'polished';

const a = css`
  --color-text: #666;
  --color-primary: #6200ee;
  --color-primary-hover: ${lighten(0.3, '#6200ee')};
  --color-accent: #03dac4;
  --color-background: #ddd;
`;

const b = css`
  --color-text: #fff;
  --color-primary: #03a9f4;
  --color-primary-hover: ${lighten(0.1, '#03a9f4')};
  --color-accent: #e91e63;
  --color-background: #4516f0;
`;

const basic = css`
  background-color: var(--color-background);
  color: var(--color-text);
`;

export const ThemeContext = createContext((): void => undefined);

function Theme({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'a' | 'b'>('b');
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'a' ? 'b' : 'a'));
  }, [setTheme]);
  return (
    <div className={cx(theme === 'a' ? a : b, basic)}>
      <ThemeContext.Provider value={toggleTheme}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
export default memo(Theme);
