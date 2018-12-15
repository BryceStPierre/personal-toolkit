CREATE OR REPLACE FUNCTION topic.createTable (
  topicName TEXT
)
RETURNS VOID AS $$
BEGIN
  EXECUTE 'CREATE TABLE topic.' || topicName || '(
    item_id SERIAL PRIMARY KEY,
    item_value VARCHAR(255) NULL,
    item_classification VARCHAR(150) NULL,
    item_data_type SMALLINT NOT NULL,
    item_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    item_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )';
END; 
$$ LANGUAGE 'plpgsql'