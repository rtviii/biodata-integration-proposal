## The problem, roughy: 


From [  a certain perspective  ](https://eplex.cs.ucf.edu/papers/lehman_alife08.pdf), most nominally disconnected life-sciences fields are investigating the output of a single master-algorithm. From that perspective, biotechnology is an attempt reverse-engineer the gallery of biological contexts in the hope of invoking a "better outcome" (for some definition of *better*). In that, the quality of the tools we have might come to distinguish engineering from hacking. 

 __Unsatisfactory data-integration__ characterizes many fields of computational biology. In a similar way that the IT stack has certain seemingly irreconcilable security and interop issues: in health sciences especially, the mounting data and rapidly proliferating methods seem to accrete around each other in a fashion that might not be as intelligeble as owne would want sometimes, this is a weak formualtion.  The problem is somewhat subtle and easy to take for granted.
 
 Take any large multidisciplinary effort where multiple experts are involved from nominally disconnected fields. For example though both a geneticist, a mathematician and a computer scientist may all be attending to the mechanisms of morphogenesis, the stacked-up contexts that are their respective fields are different enough: there is an upfront cost, a capital expense if you want, involved with setting up the study. The bandwith of communication between the fields is relatively low historically and hence there is less investemnet in the ontologies (protocols) that bridge them. At the very concrete level this might mean that a big dataset has to be collected and curated according to multiple costraints from more parties than one and in the best case it is not forgotten afterwards. There is a sense in which the delivery pipelines' cost might approach that of the experiment.

  Insofar as this *is* the case with any fields aligned toward the same purpose, it is unfortunate: scientific software, databases, file-formats, packages and methods get insulated in the space of local datatypes and instruments that produce it, communities that bear them. Ontologies have to be merged on a per-need basis and potentially valuable methods that embed themselves in accidentally withering paradigms don't really get to shine. This is probably true in general of open-ended processes, but seems all the more a loss in the case of life-sciences. Bottom line being: there is probably more transdisciplinary research now than there ever was and yet a lot of expeditions seem to have to start with a raft instead of a harbor every time, data-wise.  


## The proposition, also roughly:

A lot of fragmentation and computational callenges downstream from raw-data could seemingly be ameliorated by bringing more method to the process. I'm not exactly sure as to what "*method*" comes to mean here, but there seems to be a lot of room for making things at least a little bit more programmatic. Weak statement.

Some ideas that are not mutually-exclusive:

+ more seamless interoperability of different database' schemas(ORMs, OGM), more flexible and accommodating file formats.

+ a more computationally-navigable format for novel results. 

+ a type system for biological entities at every level of resolution \[[1](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies)\]. It can be very weak, open-source and amendment-friendly. Still, some sort of a map even of contexts for biological entities might be due.
  Things obviously evolve vary rapidly with research on every leaf, but for the most part we do have *a clear concept of __what subclasses what__*. This is only nominally an organizational touch. A proper categorization seems like a necessary condition for sanity let alone computational efficiency so we might as well codify the part of our understanding around which there is consensus. Beyond sheer communication, an algebra of types in biochemistry seems at the very least a handy crutch for getting by in the spaces of biological multiplicity which *are* rife with polymorphism and mutual reference. 

- some bioligically-intelligible hashing to have a digital lingua franca between countless field-specifc ontologies (gene, protein families, immune factors, etc.) that only practitioners really master and that change from decade to decade(in the good case). *Not* a format to refer to between people while a more specific ontology is available, but a way to capture the "address" of the biological object in the universal "memory", regardless of what naming system might come. This is predicated on the presence of a type system from before whereby (1)the constituent abstract types of an object along with (2)*some* physical characteristics of the object (oh number of atoms... affinities...) are inputs to a hash function whose output uniquely identifies that object forever.

These are some vague ideas and I'd definitely be wary of trying to be all things to all people, but at the same time feel that given how quickly the tools and rituals in each subfields proliferate, it is pretty timely to at least think how to revert or slow down the complexity creep. 

The practical argument in favor of integration is roughly  _software_ and _data interoperability_, ease of communication. The less obvious and the more airy one is the promise of _multi-scale inference_ that machine intelligence will deliver, shockingly still, you hope, in 2020s.
I think a lot of people have this notion now that at some point biological and other systems cannot be simultaneously apprehended and intuited over by a single human mind. In fact the whole technology stack seems to be kind of shifting to accomodate this notion[ [1](https://arxiv.org/abs/2003.08445),[2](https://www.cerebras.net/product/?fbclid=IwAR29dlQMcctqhFfEjpAtmFeWtCJR0q0xGjmPccL-zFk5VJBrFX74bmC1-_U#chip),[3](https://projects.preferred.jp/mn-core/en/),[4](https://www.graphcore.ai/products),[5](https://arxiv.org/pdf/1901.01753.pdf) ] so I don't see why biological/medical analyses should wait for NLP or finance or what have you to refashion themselves accordingly. In fact biology, *life itself*, seems like one of the richest source of latent grammar out there.


#### Hence, to be real bold about it, we wish for an interface to life that has:


1. **Common Ontology** : A single namespace is useful to have for indexing data that originate from differet scales or pertain to processes that are nominally unrelated. This should, again, enable the flow of information between individual domains and get us closer to a common dataframe. Doesn't have to be a human-readable namespace either, can be a hash. _A common ontology precludes a connected graph._ 

2. **A notion of types**. The dream is of course to type the members of the graph in such a way that whole parts of the graph can be reconstructed or are deduced "from first principles" a la Idris or curry-howard provers.

3. **Alignment the structural and the semantic**


#### Why? 

-  At the very basic, practical level such a traversable graph (as opposed to a trillion excel files lossily duplicated across a thousand firewalls) would facilitate computational experiments that involve multiple types of raw data by providing a common handle on them. This "semantic bridging" should enhance experiments that draw from multiple pools of deep domain-specific knowledge and perhaps enable those that are not feasible or infrastracturally conceivable at the moment.
 
-_Models that span verticals in addition to horizontals_. [Causality in biology](https://www.biorxiv.org/content/10.1101/2020.05.03.074419v1) is notoriously [ hard to establish ](https://doi.org/10.1155/2020/8932526)due to 2-way interactions between physical and structural scales, emergence. Models that learn from multiple scales/modalities of data have the potential to glean interactions and confounders that are not represented in the teleologically selected data. Overparametrization is not always a blessing, but it, again, seems pretty ubiquitous in bio, so you might as well try to  capitalize on it.

[*](https://arxiv.org/abs/1810.00826)


There is actually not much of a question in my mind about whether this infrastracture will emerge in the firmament-cracking future, but i'm wondering whether it is too early and how much of it is actually politics/coordination rather than anything remotely technical.
