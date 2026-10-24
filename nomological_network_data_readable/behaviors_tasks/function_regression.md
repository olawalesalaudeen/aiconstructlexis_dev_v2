# Function regression
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Function fitting, Mathematical function learning  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is a prediction task: the model is given example input-output pairs for a mathematical function in context and must predict the output for a queried input. Most descriptions treat this generally as function fitting or mathematical function learning. A narrower formulation casts it as non-linear function regression with inputs x and y, where the target is the integer part of f(x, y) = √x√y; one paper also presents this task as a way to evaluate reasoning with continuous vector representations.

**Variants.** Papers use several near-synonymous names, including function regression, function fitting, and mathematical function learning. The main variation is between broad mathematical-function prediction from in-context examples and a specific arithmetic setting built around a non-linear function. One paper specifically studies learning out-of-distribution mathematical functions through in-context learning.

**Space of elicitation and scores.** No measurement instrument is linked to it. The available operationalizations are direct task formulations, with success described as predicting the function output for a given input and, in the more specific regression version, predicting the integer part of the output.

**What it is taken as evidence of.** No construct is explicitly linked to it.

## Sources

**[Vector-ICL: In-context Learning with Continuous Vector Representations](https://proceedings.iclr.cc/paper_files/paper/2025/file/46516c4204d6cab8299e55d4ebf7ccec-Paper-Conference.pdf)**
> The observable task of predicting the integer part of a non-linear function's output from numerical inputs, used to evaluate reasoning with continuous vector representations.

**[Understanding the Generalization of In-Context Learning in Transformers: An Empirical Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/bd19ca8039547b339a6a37bd4df24405-Paper-Conference.pdf) (as "Function fitting")**
> The task of predicting the output of a mathematical function for a given input, based on a series of example input-output pairs.

**[Can In-context Learning Really Generalize to Out-of-distribution Tasks?](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf7a83a5342befd11d3d65beba1be5b0-Paper-Conference.pdf) (as "Mathematical function learning")**
> The observable behavior of a model predicting the output of a mathematical function for a given input, after being provided with several input-output examples of that function in context.
