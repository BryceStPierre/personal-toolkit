CREATE OR REPLACE FUNCTION topic.dropTableArray (
  tableNames TEXT[]
)
RETURNS VOID AS $$
DECLARE
  tableName TEXT;
BEGIN
  FOREACH tableName in ARRAY tableNames 
  LOOP
    EXECUTE topic.dropTable(tableName);
  END LOOP;
END; 
$$ LANGUAGE 'plpgsql'