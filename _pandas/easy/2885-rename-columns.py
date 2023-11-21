import pandas as pd

renames = {
  'id': 'student_id',
  'first': 'first_name',
  'last': 'last_name',
  'age': 'age_in_years'
}
def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
  students.rename(columns=renames, inplace=True)
  return students

