### Question:

I'm curious if you've ever found yourself in a similar situation:

 - an API/Database doesn't allow for *high-volume* data-fetching
 - some heuristic you use becomes invalid when you try to augument your dataset with a different type
 - an API seems *poorly documented* or became *obscure or obsolete* over the years (bindings for older languages, outdated format specifications, labyrinthine endpoints)
 - the mappings are unsatisfactory between the two APIs (there are *reproducible inconsistencies* between same data different sources provide)
 - the shape you need lies on the intersection of mutually-exclusive ontologies
 - the API/Database doesn't serve the data in the *format* you'd prefer 
 - you need experimental data and have no idea where to get it
 - you spend more time on cleaning data than on runnning the study
 - the resource is isolated in any other sense (weak interoperability/no obvious mappings to other relevant resources or schemas) 

Please drop me a line or more if so or share any other thoughts you have about this. I'd really love to learn what can be improved and incorporated into our project. We are starting with a Node CLI for EMBL.

*It doesn't matter which slice of the biochemistry-stack you are dealing with (omics/expression dictionaries/cryoem models/sequences/..) or which format your case conforms to (fp-arrays/text/dictionary/time-series)[**](#complexity) -- we'd still love to hear about it*: [ ```rtkushner@gmail.com``` ](mailto:rtkushner@gmail.com?subject=Biological+Data+Integration)

Thank you!

____

ex. PDB Rutgers are developing a [GraphQL](https://graphql.org/) wrapper for their API and their [ beta ](http://beta.rcsb.org/pages/webservices) is up sometimes.

_________



