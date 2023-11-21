import pandas as pd


quarters = ('quarter_1', 'quarter_2', 'quarter_3', 'quarter_4')
def meltTable(report: pd.DataFrame) -> pd.DataFrame:
  return pd.melt(report, id_vars='product', var_name='quarter', value_name='sales', value_vars=quarters)
