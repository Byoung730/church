\c church;

DROP TABLE IF EXISTS people CASCADE;
DROP TYPE IF EXISTS marital_status;
CREATE TYPE marital_status AS ENUM ('single', 'engaged', 'married', 'divorced', 'widow/widower', 'separated');
CREATE TABLE people  (
  person_id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE,
  first_name VARCHAR,
  last_name VARCHAR NOT NULL,
  address VARCHAR,
  phone VARCHAR,
  staff BOOLEAN,
  photos BYTEA,
  gender VARCHAR,
  date_joined DATE,
  date_baptized DATE,
  birthdate DATE,
  date_deceased DATE,
  marital_status marital_status,
  number_private BOOLEAN,
  allow_texts BOOLEAN,
  allow_email BOOLEAN
);

INSERT INTO people  (email, first_name, last_name, address, phone)
    VALUES ('none', 'Full', 'Congregation', 'Church address', '222-222-2222');

INSERT INTO people  (email, first_name, last_name, address, phone, staff, gender, date_joined)
    VALUES ('TJ@aol.com', 'Tyler', 'Johnson', '111 Main st', '111-111-1111', false, 'M', '2000-02-08');
