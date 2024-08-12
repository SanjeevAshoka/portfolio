import React, { createContext, useState, ReactNode, useContext } from 'react';
import { EnglishData } from './Locale/english';
import { FrenchData } from './Locale/french';
import { PolishData } from './Locale/polish';
import { MandarinChineseData } from './Locale/chinese';
import { HindiData } from './Locale/hindi';

// Defining the shape of the context data
interface AppContextType {
    data: any;
    languageUpdate: (data: string) => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(EnglishData);
    const languageUpdate = (selectedLanguage: string)=>{
        switch(selectedLanguage){
            case 'En': setData(EnglishData); break;
            case 'Fr': setData(FrenchData); break;
            case 'Pl': setData(PolishData); break; //português
            case '中': setData(MandarinChineseData); break;
            case 'अ': setData(HindiData); break;
            default: setData(EnglishData); break;
        }
    }
    return (
        <AppContext.Provider value={{ data, languageUpdate }}>
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
