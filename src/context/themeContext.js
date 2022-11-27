import React from 'react';

const ThemeContext = React.createContext({
    color: 'warning',
    changeTheme: () => {}
});

export default ThemeContext;