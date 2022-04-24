select author_id id from views
where author_id = viewer_id
group by id order by id asc