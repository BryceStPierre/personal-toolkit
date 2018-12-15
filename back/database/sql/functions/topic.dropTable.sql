CREATE OR REPLACE FUNCTION topic.dropTable (
  topicName TEXT
)
RETURNS VOID AS $$
BEGIN
  EXECUTE 'DROP topic.' || topicName;
END; 
$$ LANGUAGE 'plpgsql'