# In-context and few-shot learning
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** In-context imitation learning, In-context learning capability, Contextual learning, Few-shot learning  

## State of the Field

Across the provided literature, in-context and few-shot learning is consistently defined as a latent ability of models to adapt to or perform a task using a small number of examples or contextual information provided directly in the input, without requiring parameter updates. The definitions vary slightly in focus, with some emphasizing learning from input-output demonstrations ("in-context learning"), others from task descriptions or class definitions ("contextual learning"), and a specific line of work examining learning from expert trajectories ("in-context imitation learning"). This capability is described as a phenomenon where "LLMs can generalize to new task distributions with just a few demonstrations" ("Task Generalization with Autoregressive Compositional Structure..."). However, one paper notes that models relying only on this ability may "struggle with other problems, particularly those requiring hierarchical reasoning."

As a construct, this ability is operationalized and measured through performance on a wide array of downstream tasks and benchmarks. Commonly used instruments include MMLU for general knowledge, GSM8k and MAWPS for mathematical reasoning, various text classification datasets like SST-2 and MNLI, and multimodal benchmarks such as VQA-v2 and COCO. The construct is most frequently studied for its relationship with generalization, with many papers positioning it as a cause of generalization, including out-of-distribution generalization. It is also reported to influence a broad set of behaviors such as mathematical reasoning, tool use, task planning, and even safety outcomes. The concept is frequently studied alongside related constructs like parametric knowledge, representation learning, and memorization.

## Sources

**[Task Generalization with Autoregressive Compositional Structure: Can Learning from $D$ Tasks Generalize to $D^T$ Tasks?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abedsoltan25a/abedsoltan25a.pdf) (as "In-context learning")**
> The latent ability of a model to infer and execute a task from a few input-output demonstrations provided within the input prompt, without parameter updates.

**[The Surprising Effectiveness of Test-Time Training for Few-Shot Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/akyurek25a/akyurek25a.pdf) (as "Few-shot learning")**
> The capability of a model to adapt to a new task after being provided with only a small number of examples.

**[LMAct: A Benchmark for In-Context Imitation Learning with Long Multimodal Demonstrations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ruoss25a/ruoss25a.pdf) (as "In-context imitation learning")**
> The latent ability of a model to acquire and generalize a decision-making policy by observing and imitating expert demonstrations presented within its context.

**[Generalization Principles for Inference over Text-Attributed Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25bq/wang25bq.pdf) (as "Contextual learning")**
> The latent ability of large language models to incorporate and leverage contextual information, such as class definitions or task descriptions, to improve representation and inference without parameter updates.

**[On the Power of Context-Enhanced Learning in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25p/zhu25p.pdf) (as "In-context learning capability")**
> The latent ability of a model to perform a task using in-context information such as phrasebooks or examples, without prior fine-tuning on that specific task, by leveraging internal reasoning or pattern recognition during inference.
