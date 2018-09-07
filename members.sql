\c church;

DROP TABLE IF EXISTS members;

CREATE TABLE members (
  member_id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE,
  first_name VARCHAR,
  last_name VARCHAR NOT NULL,
  address VARCHAR,
  phone VARCHAR,
  staff BOOLEAN,
  photos BYTEA,
  gender VARCHAR,
  date_joined DATE,
  date_baptized DATE
);

INSERT INTO members (email, first_name, last_name, address, phone, staff, photos, gender, date_joined, date_baptized)
  VALUES ('TJ@aol.com', 'Tyler', 'Johnson', '111 Main st', '111-111-1111', false);
