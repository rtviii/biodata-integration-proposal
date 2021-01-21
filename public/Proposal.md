# The problem, roughy: 


From [  a certain perspective  ](https://eplex.cs.ucf.edu/papers/lehman_alife08.pdf), the fields of "life-science" are investigating the output of a single ["master-algorithm"](https://www.frontiersin.org/articles/10.3389/frobt.2016.00040/full). From that perspective, biotechnology is an attempt to reverse-engineer the gallery of biological contexts in the hope of invoking a "better outcome" (for some definition of *better*). In that, the quality of the tools we have might come to distinguish engineering from hacking. 

Unsatisfactory data-integration characterizes many fields of computational biology. In a similar way that the legacy IT stack has certain seemingly irreconcilable security and interop issues: in health sciences, the mounting data and proliferating methods accrete around each other in a fashion that is not as intelligible as one wishes sometimes.  The problem is somewhat subtle and easy to take for granted:

Take any large multidisciplinary effort where multiple experts are involved from nominally disconnected fields. For example though both a geneticist, a physicist and a computer scientist may all be attending to the mechanisms of morphogenesis, the stacked-up contexts that are their respective fields are different enough: there is an upfront cost, a capital expense if you want, involved with setting up the study. The bandwith of communication between the fields is historically relatively low, hence there is less investemnet in the ontologies (protocols) that bridge them.  

At the very concrete level this might mean that a big dataset has to be collected, assembled and curated according to constraints, feedback from more parties than one (mildly -- a hassle) and in the better case it is not forgotten afterwards. At the higher level -- given the sheer number of known bioligical entities, the effort involved with merely codifying the categories against which a hypothesis is to be tested ( or model fitted... or search executed... ) might bar some general intuitions from emerging. This is not to say that every great discovery has had a concrete intuition or formulation behind it: maybe, on the contrary, this is all the more pertinent in the world where most of the latent confounders will be revelead and communicated by machine intelligence. 

Insofar as this *is* the case, it is unfortunate. Scientific software, databases, file-formats([*](https://project-gemmi.github.io/pdb-stats/tags.html),[*](https://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=Web&PAGE_TYPE=BlastDocs&DOC_TYPE=BlastHelp),[*](https://en.wikipedia.org/wiki/FASTQ_format),[*](http://www.rsc.org/suppdata/nj/b1/b110693g/b110693g_mime.html),[*](https://en.wikipedia.org/wiki/MRC_(file_format)),[*](https://en.wikipedia.org/wiki/CCP4_(file_format)) etc.), packages and methods get insulated in the space of local datatypes and instruments that bear them. Ontologies have to be merged on a per-need basis[*](http://www.oxfordjournals.org/nar/database/cap/) and valuable methods get embedded in accidentally withering paradigms. This is probably true in general of open-ended processes like human innovation, but seems all the more a loss in the case of life-sciences. Bottom line being: there is probably more transdisciplinary research that falls under some "bio"-umbrella underway now than there has ever been and yet a lot of expeditions seem to have to start with a raft instead of a harbor every time, exp. data-wise. 

In short:  

- there is a sense in which some delivery pipelines' cost (not only monetary) might approach that of the experiment
- information is lost when the contexts are made more narrow in the effort to decrease that cost.

# The proposition, also roughly:

Some of the fragmentation and computational challenges downstream from raw-data could maybe be ameliorated by bringing more method to its (data) organization. I'm not exactly sure as to what "*method*" comes to mean here, but it seems like there is room for making things at least a little bit more programmatic.

Some ideas that are not mutually-exclusive:


+ a type system for biological entities that spans scales, (something along the lines of \[[1](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies)\], but for real). It can be very weak, "open-source" and amendment-friendly. Still, some sort of a rough map of contexts for biological entities might be due. 
Things obviously evolve very rapidly with cutting-edge research, but for the most part we do have *a clear concept of __what subclasses what__*[*](https://www.tandfonline.com/doi/full/10.1080/19420889.2020.1802914). It also seems that the study of biology, at least at its very core, has an advantage in its attempts to organize itself over arguably less complex and more dynamic sources(ex. finance): life, terrifyingly complex as it is, at the bottom is more or less fixed[*](https://astrobiology.nasa.gov/news/yin-and-yang-polypeptide-and-polynucleotide/).  

A proper categorization seems like a necessary condition for sanity let alone directed progress so we might as well codify the part of our understanding around which there is consensus. But then, this is only nominally an organizational touch.  Beyond communication-clarity: something of an algebra of types in biochemistry could be a handy crutch for getting by in the spaces of biological multiplicity which *are* rife with polymorphism and mutual reference. 


+ some bioligically-intelligible hashing to have a digital lingua franca between countless field-specifc ontologies (gene, protein families, immune factors, etc.) that only practitioners really master and that change from decade to decade(in the good case). __Not__ *another format* to refer to, but a way to capture the "address" of the biological object in the universal "memory", regardless of what more specific naming system might come. If this "begs the question of what does *biological* even mean", then perhaps you are taking this too philosophically: i'm refering to much cruder things. A hash function like that would rest on the presence of a type system from before, i think: (1) the constituent abstract types of an object along with (2) *some* physical characteristics of the object (oh, polarity, chemical constitution..) are inputs to a function whose output uniquely identifies that object forever.

Hopefully these might lead to:

+ a more computationally-navigable format for novel results. 

+ more seamless integration between existing and future datasets, scale-bridging and interop

+ some incipient notion of [ observability ](#https://cloud.google.com/solutions/devops/devops-measurement-monitoring-and-observability) for biological systems


These are some very vague ideas and I'd definitely be wary of trying to be all things to all people, but at the same time feel that given how quickly the tools and rituals proliferate in here, it seems pretty timely to at least think about how to revert or slow down the complexity creep. Of course there is also something to be said for data democratization and pursuit of scale.

-----


## Multi-scale and delivery pipelines

The practical argument in favor of this integration is, again, roughly  software- and data- _interoperability_, ease of communication. Perhaps the less obvious second-order effect that makes sene to me is the promise of multi-scale inference that machine intelligence will deliver, you hope, in 2020s.

_Models that span verticals in addition to horizontals_. [Causality in biology](https://www.biorxiv.org/content/10.1101/2020.05.03.074419v1) is notoriously [ hard to establish ](https://doi.org/10.1155/2020/8932526)due to 2-way interactions between physical and structural scales, emergence. Models that learn from multiple scales/modalities of data have the potential to glean interactions and confounders that are not and cannot be represented in the teleologically selected data. It's hard to imagine overparametrizing a real  biological process(confining yourself to the organismal level), whatever you pick: morphogenesis, tumor formation, immune response, transcription modulation, cellular transport or shape, obviously a particular gene's expression -- all seem to have abundant feedback to and from their "environment". That's my crude case for making easier simultaneous inference from multiple sources.

I think a lot of people have this notion now that beyond modelling, real biological and systems in general cannot be simultaneously apprehended and intuited over by a single human mind. In fact the whole technology stack seems to be kind of shifting to accomodate this premonition[ [1](https://arxiv.org/abs/2003.08445),[2](https://www.cerebras.net/product/?fbclid=IwAR29dlQMcctqhFfEjpAtmFeWtCJR0q0xGjmPccL-zFk5VJBrFX74bmC1-_U#chip),[3](https://projects.preferred.jp/mn-core/en/),[4](https://www.graphcore.ai/products),[5](https://arxiv.org/pdf/1901.01753.pdf) ] so I don't see why biological/medical analyses should wait for NLP or finance or what have you to refashion themselves accordingly. In fact biology, *life itself*, seems like one of the richest sources of latent grammar out there. Don't mean to say that proper "modelling" is not useful somehow, it's just that if there is some other lens out there now -- why not try it.

## The Bazaar

This last one is hardly a technical point, but is probably the most important and one that encompasses all the previous ones.  In a world whose infrastracture is primarily digital and where the boundaries between the organism, its digital avatar and the network are increasingy obscure -- digitizing biology inevitably becomes another open-source project. Making this transition more explicit earlier is important, i think, because it would enable cross-polination of "modules" and it is also easier to attend to one garden instead of many. The point is not to have a grip on some central backbone that unifies fields and that everyone has to constantly agree on and update continuously. An obvious nightmare. The point is to lend just enough structure to the knowledge network such that both (1) the more ambitious projects of the future have their stepping stones built already __and__ (2) "lesser" agents than whole institutions or labs can contribute to development: an open-source contributor in this case could push either code *or* data. The structure of the subgraphs themselves is in fact already federated by the professionals in that domain -- we call these subgraphs  "communities" : "the cryo-em community", "the ovarian cancer community", "the ngs community"... -- and it's entirely possible that most people will still build whole careers contributing to a single subgraph's codebase and datalake and never leave their bespoke "hexagon". 
And yet, the experiment of conceiving the sum of these efforts as a huge monorepo seems to have its dividends. Nowhere is the need for organization and sense-making-at-scale is as pronounced as here and we now have half a century of expertise to bring to bear upon the [ problem ](#https://www.nature.com/articles/419343a.pdf). 



#### Summing up, the wish is for an interface to life that might have these features:

1. **Common Ontology** : A single namespace is useful to have for indexing data that originate from differet scales or pertain to processes that are nominally unrelated. This should, again, enable the flow of information between individual domains and get us closer to a common dataframe. Doesn't have to be a human-readable namespace either, can be a hash. A common ontology precludes a connected graph. 

2. **A notion of types**. The dream is of course to type the members of the graph in such a way that whole parts of the graph can be reconstructed or can be deduced with biochemical plausability "from frst principles" a la Idris(thanks, Markus Strasser) or curry-howard provers[*](https://www.researchgate.net/publication/266653387_Idris_general_purpose_programming_with_dependent_types). Agreeing on what which [ proteins ](https://bangroup.ethz.ch/research/nomenclature-of-ribosomal-proteins.html) are called would be swell for starters though.

3. **A connected graph**.  At the practical level a traversable graph (as opposed to a trillion excel files lossily duplicated across a thousand firewalls) would facilitate computational experiments that involve different modalities of raw data by providing a common handle on them. This "semantic bridging" could enhance experiments that draw from multiple pools of domain-specific knowledge, also enable other experiments that are not infrastracturally conceivable at the moment.[*](https://arxiv.org/abs/1810.00826). Again, this might seem like a whole load of text-mining, but the goal is ultimately to reconcile structure and function across scales and you have to call the variables *something*. 

-----


There is actually not much of a question in my mind about whether this infrastracture will emerge in the cracked-firmament future, but i'm wondering whether it is too early to ponder the details yet and how much of it is actually politics/coordination rather than anything remotely technical.
