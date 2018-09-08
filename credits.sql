\c church;

DROP TABLE IF EXISTS credits;

CREATE TABLE credits (
  transaction_out_id SERIAL PRIMARY KEY,
  person_id INTEGER,
  salaries FLOAT,
  utilities FLOAT,
  upkeep FLOAT,
  miscellaneous FLOAT,
  transaction_out_date DATE,
  FOREIGN KEY (person_id) references people (person_id)
);

INSERT INTO credits (person_id, salaries, utilities, upkeep, miscellaneous, transaction_out_date)
  VALUES (1, 0, 50.00, 0, 0, '2018-02-03');
