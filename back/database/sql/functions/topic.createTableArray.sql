CREATE OR REPLACE FUNCTION topic.createTableArray (
  tableNames TEXT[]
)
RETURNS VOID AS $$
DECLARE
  tableName TEXT;
BEGIN
  FOREACH tableName in ARRAY tableNames 
  LOOP
    EXECUTE topic.createTable(tableName);
  END LOOP;
END; 
$$ LANGUAGE 'plpgsql'