select customer_id, count(*) count_no_trans from visits left join transactions
    using(visit_id) where transaction_id is null group by customer_id
