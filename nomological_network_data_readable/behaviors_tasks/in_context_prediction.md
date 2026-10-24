# In-context prediction
**Type:** Behavior  
**Referenced in:** 17 papers  
**Also known as:** Few-shot prediction, Many-shot in-context learning, Context-based prediction, One-shot adaptation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is making a prediction for a new query or test example from examples supplied in the prompt or other surrounding context. The common success criterion is to produce the output for that new example, sometimes explicitly the correct output, by using labels or other information in context rather than stored associations. One paper describes this as when "a model is able to successfully learn and generalize from new information given in its input" (Toward Understanding In-context vs. In-weight Learning). Some definitions make the operation explicit, for example taking "(x1, g(x1), ..., xn, g(xn), xt)" as input and predicting "g(xt)," while others phrase it as inferring dynamics from a single context trajectory and predicting from a new initial condition.

**Variants.** Papers most often vary the behavior by the amount and kind of support placed in context. Few-shot prediction is framed as using a small number of prompt examples or a limited labeled support set, including a text classification setup with 8 examples and a protein fitness setting where the support set provides task-specific adaptation, and one paper contrasts this with zero-shot use of no support data. Other named variants are many-shot in-context learning, studied as a long-context setting using Big-Bench Hard datasets, context-based prediction, which emphasizes using labels or information in context, and one-shot adaptation, where a single context trajectory is used to infer dynamics for a new query initial condition.

**Space of elicitation and scores.** One measurement instrument is linked to this behavior, HELMET. Papers use it as a benchmark that includes many-shot in-context learning among its long-context task categories, and the recorded evidence states that the HELMET many-shot ICL task is evaluated by accuracy. No other measurement instrument is linked to it.

**What it is taken as evidence of.** Papers link it to two constructs, and the links are not of the same type. In-context learning is related to it, with one paper stating that "the context is useful," while long-context understanding is treated differently: one paper claims a causal relationship from long-context understanding to in-context prediction in the setting of many-shot in-context learning.

## Sources

**[Rethinking Invariance in In-context Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/01e8ecf628f8d9f62a1fd433d44d34ab-Paper-Conference.pdf)**
> The observable task of generating a prediction for a new test example based on a set of context examples provided in the input prompt.

**[Not All LLM-Generated Data Are Equal: Rethinking Data Weighting in Text Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/03dfa2a7755635f756b160e9f4c6b789-Paper-Conference.pdf) (as "Few-shot prediction")**
> The task of making predictions based on a small number of examples (shots) provided in the context or prompt.

**[SCBench: A KV Cache-Centric Analysis of Long-Context Methods](https://proceedings.iclr.cc/paper_files/paper/2025/file/a540b17fb2295c736d5afd6c507acf66-Paper-Conference.pdf) (as "Many-shot in-context learning")**
> The observable task of learning a new task from a large number of examples provided within the context and then applying that learned skill to a new query.

**[Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf) (as "Context-based prediction")**
> Producing the correct output by using labels or information present in the surrounding context rather than relying on stored associations.

**[Zebra: In-Context Generative Pretraining for Solving Parametric PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/serrano25a/serrano25a.pdf) (as "One-shot adaptation")**
> The observable behavior of inferring the dynamics of a system and making predictions for a new query after being provided with only a single example trajectory from that system.

## Relationships

### In-context prediction →
- **HELMET** (measurements) — *measured_by*
  > we present HELMET (How to Evaluate Long-context Models Effectively and Thoroughly). We curate a diverse set of application-centric long-context tasks across seven categories. Beyond widely adopted categories like ... we also add many-shot in-context learning (ICL)
  - [HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)

### Associated with
- **In-context learning** (constructs)
  > The ICL class of functions H uses only labels in the context to make a prediction
  - [Toward Understanding In-context vs. In-weight Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ae338b3fe6624798efa80b6581924028-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > Handling long-context inputs is crucial for large language models (LLMs) in tasks such as extended conversations, document summarization, and many-shot in-context learning. (Section ABSTRACT)
  - [What is Wrong with Perplexity for Long-context Language Modeling?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ebd6641c32ed633c2a3addc689d39896-Paper-Conference.pdf)
