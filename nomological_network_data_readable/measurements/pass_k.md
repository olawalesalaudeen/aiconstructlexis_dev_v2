# pass@k
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Pass@N  

## State of the Field

Across the provided literature, pass@k is consistently defined as a metric or evaluation procedure that measures the probability of finding at least one correct output within a set of multiple attempts. It is operationalized by generating k independent responses to a prompt and checking if any of them contain a "suitable answer." One paper also refers to this concept as "coverage," or "the chance of success over repeated attempts" (A Simple Model of Inference Scaling Laws). The provided sources state that pass@k is commonly used to evaluate model performance on tasks where verification is possible, specifically mentioning reasoning, mathematical, and coding tasks. For instance, one study utilizes reported pass@k results to evaluate models such as Gemma-2B, Llama3-8B, and Pythia-2.8B on these types of tasks.

## Sources

**[LLM Alignment as Retriever Optimization: An Information Retrieval Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jin25k/jin25k.pdf) (as "Pass@N")**
> A generation evaluation procedure that checks whether any of the top-N generated responses contains a suitable answer.

**[A Simple Model of Inference Scaling Laws](https://raw.githubusercontent.com/mlresearch/v267/main/assets/levi25a/levi25a.pdf)**
> A metric that measures the probability of at least one correct output among k independent inference attempts, commonly used to evaluate performance on reasoning and coding tasks where verification is possible.
