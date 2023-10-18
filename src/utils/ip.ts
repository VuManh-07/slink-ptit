const ip3 = 'https://dhs.ptit.edu.vn/odoo-user-service'; // ip prod
const ip = 'https://dhs.ptit.edu.vn'; // ip prod

// const ip3 = 'https://dhs.aisenote.com/odoo-user-service'; // ip dev
// const ip = 'https://dhs.aisenote.com'; // ip dev
// const ip3 = 'http://192.168.1.55:3001'; // ip dev
// const ip = 'http://192.168.1.55:3001'; // ip dev
const keycloakLogoutEndpoint =
  'https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Fslink.ptit.edu.vn%2Fuser%2Flogin';
// const keycloakLogoutEndpoint =
//   'https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/logout?redirect_uri=http://localhost:8000%2Fuser%2Flogin';

// const keycloakLogoutEndpoint =
//   'https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Fptit-qlkhnew-aisoft.vercel.app%2Fuser%2Flogin';

export { ip3, ip, keycloakLogoutEndpoint };
