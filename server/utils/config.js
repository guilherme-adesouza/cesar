require('dotenv').config();

const { PORT, HOST,
        DB_START_NAME,
        DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT,
        API_TOKEN, JWT_EXPIRATION_MINUTES, JWT_MAX_DAYS_ALIVE,
        UPLOAD_DIR} = process.env;

const Config = {
  'PORT': PORT || 5000,
  'HOST': HOST || 'localhost',

  'DB_START_NAME': DB_START_NAME || 'postgres',

  'DB_USER': DB_USER || 'postgres',
  'DB_HOST': DB_HOST || 'localhost',
  'DB_NAME': DB_NAME || 'cesar',
  'DB_PASSWORD': DB_PASSWORD || 'postgres',
  'DB_PORT': DB_PORT || 5432,

  'API_TOKEN': API_TOKEN || 'TyasA61A9CHaicoJ852',
  'JWT_EXPIRATION_MINUTES': JWT_EXPIRATION_MINUTES || 60,
  'JWT_MAX_DAYS_ALIVE': JWT_MAX_DAYS_ALIVE || 7,
  'UPLOAD_DIR': UPLOAD_DIR || '.cesar'
}

module.exports = Config;
