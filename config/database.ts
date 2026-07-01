// import { parse } from 'pg-connection-string';

// export default ({ env }) => {
//   const databaseUrl = env('DATABASE_URL');

//   // Agar DATABASE_URL sach me exist karti hai aur khali nahi hai
//   if (databaseUrl && databaseUrl.trim() !== '') {
//     const { host, port, database, user, password } = parse(databaseUrl);

//     return {
//       connection: {
//         client: 'postgres',
//         connection: {
//           host,
//           port,
//           database,
//           user,
//           password,
//           ssl: env.bool('DATABASE_SSL', true) && {
//             rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
//           },
//         },
//         options: {
//           ssl: env.bool('DATABASE_SSL', true),
//         },
//       },
//     };
//   }

//   // Local environment ke liye default SQLite
//   return {
//     connection: {
//       client: 'sqlite',
//       connection: {
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       useNullAsDefault: true,
//     },
//   };
// };


export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: '.tmp/production.db', // Humne iska naam badal diya
    },
    useNullAsDefault: true,
  },
});