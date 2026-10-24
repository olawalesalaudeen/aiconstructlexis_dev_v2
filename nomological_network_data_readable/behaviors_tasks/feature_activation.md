# Feature activation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Feature firing  

## State of the Field

**Space of definitions.** Across the cited papers, the prevailing usage treats feature activation, also called feature firing, as the observable case where an internal feature becomes active on particular input tokens or contexts. Papers describe it as identifying which tokens activate a feature and in which contexts, as well as observing non-zero activation, and one recurring formulation is whether a feature fires at all on a given context.

**Variants.** The main variation is in granularity. Some descriptions focus on very simple features that activate exclusively on individual tokens, while others frame activation more generally over tokens and broader contexts, including analyses that group activating datapoints by activation range and count the tokens that appear there.

**Space of elicitation and scores.** No measurement instrument is linked to it. In practice, papers operationalize it by saving the activation of each sparse autoencoder feature over sampled tokens, identifying which tokens activate a feature and in which contexts, counting tokens among datapoints that activate the feature across activation ranges, and testing whether a description lets a model predict on which tokens a feature fires or whether it fires at all on a context.

**What it is taken as evidence of.** No construct is linked to it, and the papers summarized here do not state what construct it is evidence of.

## Sources

**[Towards Universality: Studying Mechanistic Similarity Across Language Model Architectures](https://proceedings.iclr.cc/paper_files/paper/2025/file/e3c3473812173643147170188ef2b141-Paper-Conference.pdf)**
> Internal features becoming active on particular input tokens or contexts.

**[Efficient Dictionary Learning with Switch Sparse Autoencoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc4fbc2c77d2150c4e61e0fca6c2e95a-Paper-Conference.pdf) (as "Feature firing")**
> The observable activation of specific features in response to specific input tokens or contexts.
