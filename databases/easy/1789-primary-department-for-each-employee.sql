select
  employee_id,
  department_id
from Employee e
where
  primary_flag = 'Y'
  or (select count(*) from Employee where e.employee_id = employee_id) = 1;
