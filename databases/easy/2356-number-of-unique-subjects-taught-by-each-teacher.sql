with Subjects as (
  select teacher_id, subject_id
  from Teacher
  group by teacher_id, subject_id
)
select
  teacher_id,
  count(subject_id) cnt
from Subjects
group by teacher_id;
