interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Business Owner',
    'Service Manager',
    'Service Engineer',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'sportbikeworkshop',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read bike details', 'Create appointments', 'Read appointments', 'Update personal information'],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage bikes', 'Manage appointments'],
  getQuoteUrl: 'https://app.roq.ai/proposal/01c05a22-8057-4f7e-ad83-a15e8856c090',
};
