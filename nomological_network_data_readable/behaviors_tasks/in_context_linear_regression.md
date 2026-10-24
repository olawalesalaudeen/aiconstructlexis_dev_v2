# In-context linear regression
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Linear regression solving, Linear regression  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a prompt-based linear regression task: the model is given labeled input-output examples, infers the linear function they instantiate, and predicts a continuous output for a new input. Definitions agree on the continuous-output setting and on success as producing the held-out response implied by a linear relation, sometimes illustrated as "x1, y1, x2, y2, x3, y3, x4 → y4" with some w such that yi = xi · w. Some authors phrase this more generally as predicting a continuous response variable from one or more explanatory variables, while others describe it as "linear regression solving" from labeled examples.

**Variants.** Papers use the names "linear regression" and "linear regression solving" for the behavior. The studied settings are described as simple cases or among the simplest setups: linear-regression prompts built from labeled pairs, sometimes with one or more explanatory variables, and sometimes as pretraining of single-layer linear attention models on linear regression with a Gaussian prior.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead operationalize it directly through task performance, where labeled examples in the prompt define the linear function and the predicted continuous response for a new input is the observable outcome.

**What it is taken as evidence of.** Only one construct is linked to it, in-context learning, and the recorded link is related rather than causal or measurement-based. In that relation, one paper describes a looped transformer being trained from scratch to in-context learn data generated from linear functions, and no other constructs are linked.

## Sources

**[Why In-Context Learning Models are Good Few-Shot Learners?](https://proceedings.iclr.cc/paper_files/paper/2025/file/6c7ca1889f01a9b767c631686fb5fd24-Paper-Conference.pdf) (as "Linear regression solving")**
> Predicting continuous outputs for linear regression tasks from labeled examples.

**[How Many Pretraining Tasks Are Needed for In-Context Learning of Linear Regression?](https://proceedings.iclr.cc/paper_files/paper/2024/file/fa3c139cf8084de7bfd944f1c90c8695-Paper-Conference.pdf) (as "Linear regression")**
> The observable behavior of inferring a linear function from input-output pairs in the prompt and applying it to predict the output for a new input.

## Relationships

### Associated with
- **In-context learning** (constructs)
  > Based on our proposed training algorithm, empirical evidence demonstrates that looped transformer can be trained from scratch to in-context learn data generated from linear functions, sparse linear functions, decision trees, and 2-layer neural networks. (Section 1)
  - [Looped Transformers are Better at Learning Learning Algorithms](https://proceedings.iclr.cc/paper_files/paper/2024/file/b8402301e7f06bdc97a31bfaa653dc32-Paper-Conference.pdf)
