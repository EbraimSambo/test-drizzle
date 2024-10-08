import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  
  schema: './src/**/**.schema.ts',
  out: './drizzle',
  dialect: 'mysql',

  dbCredentials: {
      host: "srv1672.hstgr.io",
      database: "u151028130_drizzle",
      password: "Deezycheezy@2",
      user: "u151028130_drizzle",
      ssl: {
        rejectUnauthorized: false
      }
  },
  
});