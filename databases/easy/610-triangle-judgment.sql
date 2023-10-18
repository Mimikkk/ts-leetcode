select x, y, z,
case
  when (x + y > z and y + z > x and z + x > y) = 1 then 'Yes'
  else 'No'
end as triangle
 from Triangle;
