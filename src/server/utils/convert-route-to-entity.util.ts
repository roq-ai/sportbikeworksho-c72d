const mapping: Record<string, string> = {
  appointments: 'appointment',
  bikes: 'bike',
  companies: 'company',
  'service-engineers': 'service_engineer',
  'service-managers': 'service_manager',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
