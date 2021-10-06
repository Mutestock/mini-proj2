const serverIp: string = '159.65.54.148';

export const environment = {
  production: true,
  grpcUrl: `http://${serverIp}:10050`,
  teacherRestUrl: `http://${serverIp}:10060`,
  gradesUrl: `http://${serverIp}:10020`
};
