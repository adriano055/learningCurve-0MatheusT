select 
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
from estados e, cidades c
where e.id = c.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades  -- Inner Join faz uma junção com outras tabelas (do que tem em comum entre elas)
    on e.id = c.estado_id