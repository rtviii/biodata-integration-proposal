### Question:


I'm curious if you've ever found yourself in a similar situation:

 - you need experimental data and have no idea where to get it
 - an API/Database doesn't allow for *high-volume* data-fetching
 - some heuristic you use becomes invalid when you try to augument your dataset with a different type
 - an API seems *poorly documented* or became *obscure or obsolete* over the years (bindings for older languages, outdated format specifications, labyrinthine endpoints)
 - the mappings are unsatisfactory between the two APIs (there are *reproducible inconsistencies* between same data different sources provide)
 - the shape you need lies on the intersection of mutually-exclusive ontologies
 - the API/Database doesn't serve the data in the *format* you'd prefer 
 - the resource is isolated in any other sense (weak interoperability/no obvious mappings to other relevant resources or schemas) 

Please drop me a line if so!

*It doesn't matter which slice of the biochemistry-stack you are dealing with (omics/expression dictionaries/cryoem models/sequences/..) or which format your case conforms to (fp-arrays/text/dictionary/time-series) -- we'd still love to hear about it*: [ ```rtkushner@gmail.com``` ](mailto:rtkushner@gmail.com?subject=Biological+Data+Integration)

Thank you!

____

ex. PDB Rutgers are developing a [GraphQL](https://graphql.org/) wrapper for their API and their [ beta ](http://beta.rcsb.org/pages/webservices) is up sometimes.

_________


###### *I realize that this might not actually be immediately useful to a professional biologist, who already has her heuristics developed and delivery pipelines figured out, or a professional data-scientist for whom another layer of scripting on top of the usual cleaning might not seem so unnatural. In fact, i'd like to hear from an audience in-between insofar as it exists. And insofar as it doesn't -- the reasons for why it can't.  

###### *Likewise, i'm perfectly aware of the complexity that something like that incurs in the limit. Contra certain responses along the lines of "impossible due to cost/complexity", to me it's obvious that -- again, in the limit -- costs are justified by the appropriate demand:  infrastsructure has to materialize eventually and the perceived complexity is not going to go away. 


