## The problem, roughy: 


From [  a certain perspective  ](https://eplex.cs.ucf.edu/papers/lehman_alife08.pdf), most \*nominally disconnected\* life-sciences fields are investigating the output of a single master-algorithm. From that perspective, biotechnology is an attempt to reverse-engineer the code in the hope of invoking a "better outcome" (your definition of *better*). In that, the quality of the tools we have comes to distinguish engineering from hacking. 

*In much the same way that the legacy IT stack has irreconcilable security issues, poor data-integration is something that plagues all fields of computational biology; for much the same historical reasons at that. The problem is both subtle and ubiquitous: ex. though both a geneticist and a bioelectricity researcher may be attending to the mechanisms of morphogenesis, there is still relatively little communication between their respective fields and hence fewer investemnet in the ontologies (protocols) that bridge them. This, unfortunately, insulates scientific software in the space of the local datatypes and instruments that bear it.* 


## The proposition, also roughly:

Don't "collect data" -- create computational objects. Commit relevant experimental data to a global biological assembly ([ex.](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies)) in intelligble layers such there is a context common to each layer, but everything is callable in a lucid manner irrespective of the source of data/experiment/lab/apparatus/format/local ontology.
The practical argument in favor of this is roughly  _software_ and _data interoperability_, ease of communication. The less obvious and the more compelling one is the promise of _multi-scale inference_ that machine intelligence will deliver, shockingly still, in 2020s.
The realization that systems such as the output of that bespoke "master-algorithm" cannot be simultaneously apprehended and -- more importantly -- intuited over by a single human mind galvanizes the technology stack into assuming a new form [ [1](https://arxiv.org/abs/2003.08445),[2](https://www.cerebras.net/product/?fbclid=IwAR29dlQMcctqhFfEjpAtmFeWtCJR0q0xGjmPccL-zFk5VJBrFX74bmC1-_U#chip),[3](https://projects.preferred.jp/mn-core/en/),[4](https://www.graphcore.ai/products),[5](https://arxiv.org/pdf/1901.01753.pdf) ] that might accommodate some model that that does.


#### Hence, we wish for an interface to life that has:

1. **Closure** : If a biochemical datum is digitized and non-proprietary - you should be able to get it. One API, one schema. 

2. **Common Ontology** : A single namespace is useful to have for indexing data that originate from differet scales or pertain to processes that are nominally unrelated. This should, again, enable the flow of information between domains of knowledge and get us closer to a common dataframe. Doesn't have to be a human-readable ontology, either,c an be a has. _A common ontology precludes a connected graph._ 


#### Why? 

-  At the very basic, practical level such a traversable graph (as opposed to a trillion excel files lossily duplicated across a thousand firewalls) would facilitate computational experiments that involve multiple types of raw data by providing a common handle on them. This "semantic bridging" should enable experiments that draw from multiple pools of deep domain-specific knowledge but might be infrastructurally infeasible at the moment.
 
- DNN _Models that span verticals in addition to horizontals_. [Causality in biology](https://www.biorxiv.org/content/10.1101/2020.05.03.074419v1) is notoriously [ hard to establish ](https://doi.org/10.1155/2020/8932526)due to 2-way interactions between physical and structural scales, emergence. Models that learn from multiple scales/modalities of data have the potential to glean interactions and confounders that are not represented in the teleologically selected data. Overparametrization is a blessing that has to be capitalized upon.

- _Spanning graph databases_ will elaborate

- _Graph learning_ [*](https://arxiv.org/abs/1810.00826)


To be candid, there is actually no question in my mind about whether this infrastracture will be built, just the question of what is the best way to go about it.
