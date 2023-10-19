select
  employee_id,
  name,
  (select count(*) from Employees where reports_to = manager.employee_id) reports_count,
  round((select avg(age) from Employees where reports_to = manager.employee_id)) average_age
from Employees manager
where (select count(*) from Employees where reports_to = manager.employee_id) <> 0
order by employee_id;
