\c church;

DROP TABLE IF EXISTS debits;

CREATE TABLE debits (
  transaction_id SERIAL PRIMARY KEY,
  member_id INTEGER,
  donations FLOAT,
  tithes FLOAT,
  collection FLOAT,
  miscellaneous FLOAT,
  transaction_date DATE,
  FOREIGN KEY (member_id) references members(member_id)
);

INSERT INTO debits (member_id, donations, tithes, collection, miscellaneous, transaction_date)
  VALUES (2, 50.00, 0, 0, 0, '2018-02-03');
