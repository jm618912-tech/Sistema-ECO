import { useState, useCallback } from 'react';

export const TABS = {
  POS: 'pos',
  ADMIN: 'admin',
  MANAGER: 'manager',
};

export const useNavigation = (initialTab = TABS.POS) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const navigateTo = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  const isActive = useCallback((tabId) => {
    return activeTab === tabId;
  }, [activeTab]);

  return {
    activeTab,
    navigateTo,
    isActive,
    TABS,
  };
};
