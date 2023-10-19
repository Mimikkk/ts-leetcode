select
  name,
  unique_id
from Employees e
  left join EmployeeUni eu using(id);
