import { useKeycloak } from '@react-keycloak/web';
import { Button } from 'antd';
import * as React from 'react';
import { useCallback, useEffect } from 'react';

interface LoginWithKeycloakProps {
  title: string;
  onLoginSuccess: (token: string) => void;
}

const LoginWithKeycloak: React.FC<LoginWithKeycloakProps> = ({ title, onLoginSuccess }) => {
  const { keycloak } = useKeycloak();
  const login = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  useEffect(() => {
    if (keycloak.authenticated) onLoginSuccess(keycloak?.token ?? '');
  }, [keycloak.authenticated]);

  return (
    <div>
      <Button
        onClick={login}
        type="primary"
        style={{
          marginTop: 8,
          width: '100%',
        }}
        size="large"
      >
        {title}
      </Button>
    </div>
  );
};

export default LoginWithKeycloak;
