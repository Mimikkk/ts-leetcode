select sp.name
from orders o join company c on (o.com_id = c.com_id and c.name = 'RED')
              right join salesperson sp using(sales_id)
where o.sales_id is null
