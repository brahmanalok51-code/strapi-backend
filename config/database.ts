import { parse } from 'pg-connection-string';

export default ({ env }) => {
  if (env('DATABASE_URL')) {
    const { host, port, database, user, password } = parse(env('DATABASE_URL'));

    return {
      connection: {
        client: 'postgres',
        connection: {
          host,
          port,
          database,
          user,
          password,
          ssl: env.bool('DATABASE_SSL', true) && {
            rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
          },
        },
        options: {
          ssl: env.bool('DATABASE_SSL', true),
        },
      },
    };
  }

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};