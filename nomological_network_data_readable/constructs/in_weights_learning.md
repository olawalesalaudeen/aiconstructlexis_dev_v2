# In-weights learning
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** In-Weights Learning, In-weight learning  

## State of the Field

**Definition agreement:** Consensus. All papers define in-weights learning as a model acquiring or storing query-response relations, memorized information, or training-data patterns in its parameters or weights through training or repeated observation. One paper adds the contrast that the model then relies on those learned weights rather than context examples at inference time, but this is the same core phenomenon rather than a different construct.

**Space of definitions.** Across the surveyed papers, the prevailing usage treats in-weights learning as a parameter-based form of learning: query-response relationships, or memorized information, are encoded in the model's weights or parameters. Papers agree on that locus and often contrast it with relying on context examples at inference time, using phrases such as "query-response relationships encoded in the weights of the network." A smaller line frames it more broadly as the ability to acquire knowledge by updating parameters during training and thereby encode patterns from training data into the weights.

**Space of facets.** Papers mostly organize the concept through its contrast with in-context learning, pairing in-weight and in-context predictors as different predictors a model can learn and implement. Some descriptions align it with memorization, including references to memorized information in parameters and to a "memorizing" in-weight predictor. The naming varies slightly, with authors using both "in-weights learning" and "in-weight learning."

**Space of measurement.** No measurement instrument is linked to it, and no behavioral indicator is linked to it. The papers discuss it through definitions and relations to other constructs rather than through a linked benchmark, human evaluation, LLM-as-a-judge setup, probe, or other operationalization.

**Links.** Several papers report that in-weights learning is related to in-context learning, usually by setting the two in contrast: one description opposes "query-response relationships encoded in the weights of the network" to prediction from "illustrative examples presented in the context," while another presents a transition from in-weight learning to in-context learning as data diversity increases. One paper also relates it to memorization, describing a bi-level model with a "memorizing" in-weight predictor alongside an in-context predictor.

## Sources

**[The mechanistic basis of data dependence and abrupt learning in an in-context classification task](https://proceedings.iclr.cc/paper_files/paper/2024/file/540a3bf4863672cdaebfed69fa2ce335-Paper-Conference.pdf)**
> The tendency of a model to encode query-response relationships in its parameters and use those learned weights rather than context examples at inference time.

**[Dual Process Learning: Controlling Use of In-Context vs. In-Weights Strategies with Weight Forgetting](https://proceedings.iclr.cc/paper_files/paper/2025/file/7db2348b5bfeca620aa7327df815adcc-Paper-Conference.pdf) (as "In-Weights Learning")**
> The latent trait where query-response relationships and memorized information are encoded directly in the model parameters after iterated observations.

**[Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf) (as "In-weight learning")**
> The ability of a model to acquire knowledge by updating its parameters during training, effectively encoding patterns from the training data into its weights.

## Relationships

### Associated with
- **In-context learning** (constructs)
  > In-context learning (ICL) is the ability to predict the response to a query based on illustrative examples presented in the context, without any additional weight updates. This form of learning contrasts with in-weights learning (IWL) of query-response relationships encoded in the weights of the network.
  - [The mechanistic basis of data dependence and abrupt learning in an in-context classification task](https://proceedings.iclr.cc/paper_files/paper/2024/file/540a3bf4863672cdaebfed69fa2ce335-Paper-Conference.pdf)
- **Memorization** (constructs)
  > we consider a bi-level model that learns a “memorizing” in-weight predictor g as well as an in-context predictor h (Section 2)
  - [Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf)
