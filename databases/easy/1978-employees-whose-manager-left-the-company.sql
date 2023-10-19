with Managers as (
  select manager_id employee_id from Employees 
  where 
    manager_id is not null 
    and manager_id not in (select employee_id from Employees)
)
select
  employee_id
from Employees
where salary < 30000 and manager_id in (select employee_id from Managers)
order by employee_id;
