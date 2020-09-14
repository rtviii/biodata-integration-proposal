## The problem, roughy: 


From [  a certain perspective  ](https://eplex.cs.ucf.edu/papers/lehman_alife08.pdf), most \*nominally disconnected\* life-sciences fields are investigating the output of a single master-algorithm. From that perspective, biotechnology is an attempt to reverse-engineer the code in the hope of invoking a "better outcome" (your definition of *better*). In that, the quality of the tools we have comes to distinguish engineering from hacking. 

 __Poor data-integration__ is something that plagues all fields of computational biology, in much the same way that the legacy IT stack has irreconcilable security issues; for much the same historical reasons. The problem is both subtle and ubiquitous: ex. though both a geneticist and a bioelectricity researcher may be attending to the mechanisms of morphogenesis, there bandwith of communication between their respective fields is relatively low and hence there is less investemnet in the ontologies (protocols) that bridge them. This, unfortunately, insulates scientific software (databases, file-formats, packages) in the space of local datatypes and instruments that bear it.* 


## The proposition, also roughly:

A lot of fragmentation downstream and computational challenges could seemingly be ameliorated by bringing more method to the process. I'm not exactly what "method"(no *the*) comes to mean, but there seems to be a lot of room for making things more programmatic 
Some ideas that are not mutually-exclusive: 
- interop of different database' schemas, more flexible file formats
- a stronger, more differentiatd type system for biological entities at every level of resolution \[[1](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies)\]
- some bioligically-intelligible hashing to have a digital lingua franca between countless field-specifc ontologies(gene, protein families, immune factors, etc.) that only practitioners really master.
I'd definitely be wary of trying to be all things to all people as it were but at the same time feel that given how quickly the tools and rituals in each subfields proliferate, it is pretty timely to at least think how to revert or slow down the complexity creep. 

The practical argument in favor of this is roughly  _software_ and _data interoperability_, ease of communication. The less obvious and the more compelling one is the promise of _multi-scale inference_ that machine intelligence will deliver, shockingly still, in 2020s.
I think a lot of people have this notion now that at some point biological and other systems cannot be simultaneously apprehended and intuited over by a single human mind. In fact the whole technology stack seems to be kind of shifting to accomodate this notion[ [1](https://arxiv.org/abs/2003.08445),[2](https://www.cerebras.net/product/?fbclid=IwAR29dlQMcctqhFfEjpAtmFeWtCJR0q0xGjmPccL-zFk5VJBrFX74bmC1-_U#chip),[3](https://projects.preferred.jp/mn-core/en/),[4](https://www.graphcore.ai/products),[5](https://arxiv.org/pdf/1901.01753.pdf) ] so I don't see why biological/medical analyses should wait for NLP or finance or what have you. In fact biology, life seems like one of the richest source of latent grammar out there, it's just that every sub-field is speaking a different dialect at the moment for historical and infrastracture reasons.


#### Hence, to be real bold about it, we wish for an interface to life that has:

1. **Closure** : If a biochemical datum is digitized and non-proprietary - you should be able to get it. One API, one schema. 

2. **Common Ontology** : A single namespace is useful to have for indexing data that originate from differet scales or pertain to processes that are nominally unrelated. This should, again, enable the flow of information between domains of knowledge and get us closer to a common dataframe. Doesn't have to be a human-readable namespace either, can be a hash. _A common ontology precludes a connected graph._ 


#### Why? 

-  At the very basic, practical level such a traversable graph (as opposed to a trillion excel files lossily duplicated across a thousand firewalls) would facilitate computational experiments that involve multiple types of raw data by providing a common handle on them. This "semantic bridging" should enable experiments that draw from multiple pools of deep domain-specific knowledge but might be infrastructurally infeasible at the moment.
 
- DNN _Models that span verticals in addition to horizontals_. [Causality in biology](https://www.biorxiv.org/content/10.1101/2020.05.03.074419v1) is notoriously [ hard to establish ](https://doi.org/10.1155/2020/8932526)due to 2-way interactions between physical and structural scales, emergence. Models that learn from multiple scales/modalities of data have the potential to glean interactions and confounders that are not represented in the teleologically selected data. Overparametrization is a blessing that has to be capitalized upon.

- _Spanning graph databases_ will elaborate

- _Graph learning_ [*](https://arxiv.org/abs/1810.00826)


There is actually not much of a question in my mind about whether this infrastracture will emerge, i'm just wondering whether it is too early and how much of it is politics/coordination rather than anything remotely technical.
