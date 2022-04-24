select employee_id from employees left join salaries using(employee_id) where salary is null
union
select employee_id from employees right join salaries using(employee_id) where name is null
order by employee_id asc