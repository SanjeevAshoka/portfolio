import React, { createContext, useState, ReactNode, useContext } from 'react';

// Defining the shape of the context data
interface AppContextType {
    data: string;
    setData: (data: string) => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<string>('');

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
