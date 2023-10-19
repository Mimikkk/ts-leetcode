select
  contest_id,
  round(count(contest_id) / (select count(*) from Users) * 100, 2) percentage
from Register
group by contest_id
order by percentage desc, contest_id asc;
