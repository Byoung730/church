\c church;

DROP TABLE IF EXISTS blogs;

CREATE TABLE blogs (
  blog_id SERIAL PRIMARY KEY,
  member_id INTEGER,
  title VARCHAR,
  post TEXT,
  posted_date DATE,
  FOREIGN KEY (member_id) references members(member_id)
);

INSERT INTO blogs (member_id, title, post, posted_date)
  VALUES (2, 'Hello', 'Greetings, everyone.  Thank you all so much for the warm welcome to your place of worship.', '2018-08-23');
