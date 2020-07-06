

I decided to start with a GraphQL interface for EMBL to start committing data to a graph-database later on. I realize that it's a tiny constellation relative to the full range of disciplines that peer into biology and i'd appreciate as much as glimpse at other cases. If you had any experiences similar to the following, please consider getting in touch:

 - an interface doesn't allow for *high-volume* data-fetching
 - some heuristic you use becomes invalid when you try to augument your dataset with a different type
 - an API seems poorly documented or became obscure or obsolete over the years (bindings for older languages, outdated format specifications, labyrinthine endpoints)
 - the mappings are unsatisfactory between the two APIs (there are *reproducible inconsistencies* between same data different sources provide)
 - you need domain-specific experimental data and have no idea where to get it
 - the resource has low interoperability or no obvious mappings to others in its family

*It doesn't matter which slice of the biochemical "stack" you are dealing with (-omics/expression atlases/CryoEM models/sequences/...) or which format your data is in -- in fact, span is the goal*.  
*In the long run, we'd like to be able to the space of biochemical data-repositories from the same place with little friction and high (complete and dynamic) integration between the fetched data.*  


[``rtkushner@gmail.com`` ](mailto:rtkushner@gmail.com?subject=Biological+Data+Integration) 

UBC
🌾🦋

---
### Since my first posting this around christmas 2018:

+ 2019 PDB Rutgers  have added a [ GraphQL  wrapper](https://www.rcsb.org/pages/webservices) for their API.
+ 2020 PDBE is beggining migration to the Neo4j graph database, [ offering devloper training therein ](https://www.ebi.ac.uk/training/events/2020/mining-pdbe-and-pdbe-kb-using-graph-database).

+ A 2020 community-driven [ proposal ](https://f1000research.com/articles/9-278/v1) calling for integration of data and tools in ELIXIR. 
____

##### I realize that this might not actually be immediately useful to a professional biologist, who already has her heuristics developed and delivery pipelines figured out, or a professional data-scientist for whom another layer of scripting on top of the usual cleaning might not seem so unnatural. In fact, i'd like to hear from an audience in-between insofar as it exists. And insofar as it doesn't -- the reasons for why it can't.

##### Likewise, i'm perfectly aware of the complexity that something like that incurs in the limit. Contra certain responses along the lines of "impossible due to cost/complexity": it seems obvious that -- again, in the limit -- any costs are justified by the appropriate demand. An infrastsructure like this has to materialize eventually and now is as good a time as any to start.


