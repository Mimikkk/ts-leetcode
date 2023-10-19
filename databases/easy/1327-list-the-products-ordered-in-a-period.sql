select
  p.product_name,
  sum(o.unit) unit
from Products p
  join (select product_id, unit from Orders where order_date between '2020-02-01' and '2020-02-29') o
    on p.product_id = o.product_id
group by p.product_name having sum(o.unit) >= 100;
