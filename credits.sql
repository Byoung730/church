\c church;

DROP TABLE IF EXISTS credits;

CREATE TABLE credits (
  transaction_out_id SERIAL PRIMARY KEY,
  member_id INTEGER,
  salaries FLOAT,
  utilities FLOAT,
  upkeep FLOAT,
  miscellaneous FLOAT,
  transaction_out_date DATE,
  FOREIGN KEY (member_id) references members(member_id)
);

INSERT INTO credits (member_id, salaries, utilities, upkeep, miscellaneous, transaction_date)
  VALUES (1, 0, 50.00, 0, 0, '2018-02-03');
